const LEADS_REPO = "Hasanag195/zelandaliyoruk-leads";
const LEADS_PATH = "leads.ndjson";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function githubRequest(path, options = {}) {
  const res = await fetch(`https://api.github.com/repos/${LEADS_REPO}/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.LEADS_GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  return res;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch {
    res.status(400).json({ ok: false, error: "invalid_json" });
    return;
  }
  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().slice(0, 200);
  const hp = String(body.hp || "").trim();
  const consent = body.consent === true;

  if (hp) {
    // Honeypot dolu = muhtemelen bot, sessizce başarı dön.
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !EMAIL_RE.test(email) || !consent) {
    res.status(400).json({ ok: false, error: "invalid_input" });
    return;
  }

  try {
    let lastError = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      const getRes = await githubRequest(`contents/${LEADS_PATH}`);
      if (!getRes.ok) {
        lastError = `get_failed_${getRes.status}`;
        continue;
      }
      const current = await getRes.json();
      const currentContent = Buffer.from(current.content, "base64").toString("utf8");

      const records = currentContent
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
        .filter(Boolean);

      const emailLower = email.toLowerCase();
      const existingIdx = records.findIndex((r) => String(r.email || "").toLowerCase() === emailLower);
      const updatedRecord = { name, email, ts: new Date().toISOString(), consentAt: new Date().toISOString() };
      if (existingIdx >= 0) {
        records[existingIdx] = updatedRecord;
      } else {
        records.push(updatedRecord);
      }

      const newContent = records.map((r) => JSON.stringify(r)).join("\n") + "\n";

      const putRes = await githubRequest(`contents/${LEADS_PATH}`, {
        method: "PUT",
        body: JSON.stringify({
          message: "lead kaydı eklendi",
          content: Buffer.from(newContent, "utf8").toString("base64"),
          sha: current.sha,
          branch: "master",
        }),
      });

      if (putRes.ok) {
        res.status(200).json({ ok: true });
        return;
      }
      lastError = `put_failed_${putRes.status}`;
    }
    throw new Error(lastError || "unknown_error");
  } catch (err) {
    res.status(502).json({ ok: false, error: "storage_failed" });
  }
};
