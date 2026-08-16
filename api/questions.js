const REPO = "Hasanag195/zelandaliyoruk-leads";
const PATH = "questions.ndjson";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function githubRequest(path, options = {}) {
  return fetch(`https://api.github.com/repos/${REPO}/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.LEADS_GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
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
  const question = String(body.question || "").trim().slice(0, 2000);
  const topic = String(body.topic || "").trim().slice(0, 120);
  const hp = String(body.hp || "").trim();

  if (hp) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !EMAIL_RE.test(email) || !question) {
    res.status(400).json({ ok: false, error: "invalid_input" });
    return;
  }

  const record = JSON.stringify({ name, email, question, topic, ts: new Date().toISOString() });

  try {
    let lastError = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      const getRes = await githubRequest(`contents/${PATH}`);
      if (!getRes.ok) {
        lastError = `get_failed_${getRes.status}`;
        continue;
      }
      const current = await getRes.json();
      const currentContent = Buffer.from(current.content, "base64").toString("utf8");
      const newContent = currentContent + (currentContent.endsWith("\n") || !currentContent ? "" : "\n") + record + "\n";

      const putRes = await githubRequest(`contents/${PATH}`, {
        method: "PUT",
        body: JSON.stringify({
          message: "soru eklendi",
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
