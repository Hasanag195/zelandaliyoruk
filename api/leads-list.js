const LEADS_REPO = "Hasanag195/zelandaliyoruk-leads";
const LEADS_PATH = "leads.ndjson";

module.exports = async (req, res) => {
  const key = req.query.key || (req.headers["x-admin-key"] || "");
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    res.status(401).json({ ok: false, error: "unauthorized" });
    return;
  }

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
