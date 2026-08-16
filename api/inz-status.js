const crypto = require("crypto");
const baseline = require("./inz-baseline.json");

function extractSignal(html) {
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  const matches = [...cleaned.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi)];
  return matches
    .map((m) => m[1].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .filter((t) => !/travel disrupted|cookie/i.test(t));
}

function hashOf(texts) {
  return crypto.createHash("sha256").update(texts.join("|")).digest("hex").slice(0, 16);
}

module.exports = async (req, res) => {
  const results = {};
  let anyChanged = false;

  await Promise.all(
    Object.entries(baseline.pages).map(async ([key, page]) => {
      try {
        const r = await fetch(page.url, {
          headers: { "User-Agent": "Mozilla/5.0 (zelandaliyoruk.vercel.app monitor)" },
        });
        const html = await r.text();
        const hash = hashOf(extractSignal(html));
        const changed = hash !== page.hash;
        if (changed) anyChanged = true;
        results[key] = { label: page.label, url: page.url, status: "ok", changed };
      } catch (err) {
        results[key] = { label: page.label, url: page.url, status: "error", changed: false };
      }
    })
  );

  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=3600");
  res.status(200).json({
    checkedAt: new Date().toISOString(),
    baselineGeneratedAt: baseline.generatedAt,
    anyChanged,
    pages: results,
  });
};
