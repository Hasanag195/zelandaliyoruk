const crypto = require("crypto");

const FAIL_WINDOW_MS = 15 * 60_000;
const FAIL_MAX = 10;
const fails = new Map();

function clientIp(req) {
  const parts = String(req.headers["x-forwarded-for"] || "").split(",").map((p) => p.trim()).filter(Boolean);
  return parts[parts.length - 1] || req.socket?.remoteAddress || "unknown";
}

function sameKey(a, b) {
  const h = (s) => crypto.createHash("sha256").update(String(s)).digest();
  return crypto.timingSafeEqual(h(a), h(b));
}

const LEADS_REPO = "Hasanag195/zelandaliyoruk-leads";
const LEADS_PATH = "leads.ndjson";

module.exports = async (req, res) => {
  const key = req.headers["x-admin-key"] || "";
  const ip = clientIp(req);
  const now = Date.now();
  const rec = fails.get(ip);
  if (rec && now - rec.first < FAIL_WINDOW_MS && rec.count >= FAIL_MAX) {
    res.status(429).json({ ok: false, error: "too_many_attempts" });
    return;
  }
  if (!process.env.ADMIN_KEY || !sameKey(key, process.env.ADMIN_KEY)) {
    if (!rec || now - rec.first >= FAIL_WINDOW_MS) fails.set(ip, { first: now, count: 1 });
    else rec.count++;
    res.status(401).json({ ok: false, error: "unauthorized" });
    return;
  }
  fails.delete(ip);

  try {
    const r = await fetch(`https://api.github.com/repos/${LEADS_REPO}/contents/${LEADS_PATH}`, {
      headers: {
        Authorization: `Bearer ${process.env.LEADS_GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });
    if (!r.ok) throw new Error("fetch_failed");
    const file = await r.json();
    const content = Buffer.from(file.content, "base64").toString("utf8");
    const leads = content
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => {
        try {
          return JSON.parse(l);
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .reverse();

    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({ ok: true, count: leads.length, leads });
  } catch (err) {
    res.status(502).json({ ok: false, error: "storage_failed" });
  }
};
