/* Statik konu sayfası üreteci.
 *
 *   node build.js
 *
 * data.js tek içerik kaynağıdır. Bu script her konu için crawler'ların ve
 * sosyal medya önizleme botlarının tam metni görebileceği statik HTML üretir:
 *   /t/<slug>.html        (TR)
 *   /en/t/<slug>.html     (EN)
 * ve sitemap.xml'i bu adreslere göre yeniden yazar.
 *
 * Bağımlılık yok. HER `git push` / `vercel deploy` ÖNCESİNDE çalıştır.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const ORIGIN = "https://zelandaliyoruk.com";
const BANNER = ORIGIN + "/assets/yt-banner.png";

// --- i18n.js + data.js'i sandbox'ta çalıştırıp TOPICS / STRINGS al ---------
const sandbox = {
  window: {},
  document: {},
  localStorage: { getItem: () => null, setItem: () => {} },
  navigator: { language: "tr" },
};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, "i18n.js"), "utf8"), sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, "data.js"), "utf8"), sandbox);

// data.js top-level `const` bağlamın lexical scope'unda kalır; ifadeyle çekiyoruz.
const TOPICS = vm.runInContext("typeof TOPICS !== 'undefined' ? TOPICS : null", sandbox);
const SITE = vm.runInContext("typeof SITE !== 'undefined' ? SITE : null", sandbox);
const STRINGS = sandbox.window._STRINGS;
if (!Array.isArray(TOPICS) || !STRINGS) {
  console.error("data.js / i18n.js okunamadı");
  process.exit(1);
}

const lastUpdatedHtml = (lang) => {
  if (!SITE || !SITE.contentUpdated) return "";
  const d = new Date(SITE.contentUpdated + "T00:00:00Z");
  const formatted = d.toLocaleDateString(lang === "en" ? "en-NZ" : "tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  return `<p class="last-updated">${esc(T(lang, "lastUpdated"))} <time datetime="${SITE.contentUpdated}">${esc(formatted)}</time> — ${esc(T(lang, "freshnessNote"))}</p>`;
};

const T = (lang, key) =>
  (STRINGS[lang] && STRINGS[lang][key] != null ? STRINGS[lang][key] : STRINGS.tr[key]) ?? key;
const L = (field, lang) => {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.tr || field.en || "";
};
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// --- parçalar --------------------------------------------------------------
function accordionItem(i, lang) {
  const label = esc(L(i.label, lang));
  const content = i.content ? esc(L(i.content, lang)) : null;
  if (i.url && content) {
    return `<div class="accordion-item accordion-item--info">
              <p class="accordion-item-label">${label}</p>
              <p class="accordion-item-content">${content}</p>
              <a href="${esc(i.url)}" target="_blank" rel="noopener" class="accordion-item-link">${T(lang, "officialLink")} <span class="accordion-arrow">↗</span></a>
            </div>`;
  }
  if (i.url) {
    return `<a href="${esc(i.url)}" target="_blank" rel="noopener"><span>${label}</span><span class="accordion-arrow">↗</span></a>`;
  }
  if (content) {
    return `<div class="accordion-item accordion-item--info">
              <p class="accordion-item-label">${label}</p>
              <p class="accordion-item-content">${content}</p>
            </div>`;
  }
  return `<div class="accordion-item"><span>${label}</span></div>`;
}

function accordionHtml(topic, lang) {
  if (!topic.accordion) return "";
  return topic.accordion
    .map(
      (group) => `
      <details class="accordion"${group.open ? " open" : ""}>
        <summary class="accordion-summary"><span>${esc(L(group.label, lang))}</span><span class="accordion-chevron">⌄</span></summary>
        <div class="accordion-panel accordion-panel--static">
          ${group.items.map((i) => accordionItem(i, lang)).join("\n")}
        </div>
      </details>`
    )
    .join("\n");
}

function relatedHtml(topic, lang, base) {
  if (!topic.related || !topic.related.length) return "";
  const cards = topic.related
    .map((slug) => TOPICS.find((t) => t.slug === slug))
    .filter(Boolean)
    .map((t) => `<a class="related-topic-card" href="${base}/t/${t.slug}.html">${esc(L(t.title, lang))}</a>`)
    .join("\n");
  return `<div class="related-topics">
            <h2 class="related-topics-title">${T(lang, "relatedTopicsHeading")}</h2>
            <div class="related-topics-grid">${cards}</div>
          </div>`;
}

function calculatorHtml(topic, lang) {
  if (topic.calculator !== "salary-nz") return "";
  return `<div class="calc-box">
    <h2>${T(lang, "calcTitle")}</h2>
    <p>${T(lang, "calcDesc")}</p>
    <form id="calc-form">
      <div class="calc-field">
        <label for="calc-gross">${T(lang, "calcGrossLabel")}</label>
        <div class="calc-field--inline">
          <input type="number" id="calc-gross" min="0" step="any" value="65000" required />
          <select id="calc-period" aria-label="${T(lang, "calcPeriodLabel")}">
            <option value="year" selected>${T(lang, "calcPeriodYear")}</option>
            <option value="month">${T(lang, "calcPeriodMonth")}</option>
            <option value="week">${T(lang, "calcPeriodWeek")}</option>
          </select>
        </div>
      </div>
      <div class="calc-field calc-field--inline">
        <input type="checkbox" id="calc-ks-enabled" />
        <label for="calc-ks-enabled">${T(lang, "calcKiwiSaverLabel")}</label>
      </div>
      <p class="calc-ietc-hint">${T(lang, "calcKiwiSaverHint")}</p>
      <div class="calc-field">
        <label for="calc-ks-rate">${T(lang, "calcKiwiSaverRateLabel")}</label>
        <select id="calc-ks-rate" disabled>
          <option value="0.035" selected>3.5%</option>
          <option value="0.04">4%</option>
          <option value="0.06">6%</option>
          <option value="0.08">8%</option>
          <option value="0.10">10%</option>
        </select>
      </div>
      <div class="calc-field calc-field--inline">
        <input type="checkbox" id="calc-sl-enabled" />
        <label for="calc-sl-enabled">${T(lang, "calcStudentLoanLabel")}</label>
      </div>
      <div class="calc-field calc-field--inline">
        <input type="checkbox" id="calc-ietc-enabled" />
        <label for="calc-ietc-enabled">${T(lang, "calcIetcLabel")}</label>
      </div>
      <p class="calc-ietc-hint">${T(lang, "calcIetcHint")}</p>
      <button type="submit">${T(lang, "calcButton")}</button>
    </form>
    <div class="calc-results" id="calc-results" hidden></div>
    <p class="calc-disclaimer">${T(lang, "calcDisclaimer")}</p>
  </div>`;
}

function questionFormHtml(topic, lang, base) {
  return `<div class="ask-box">
    <h3>${T(lang, "askTitle")}</h3>
    <p>${T(lang, "askDesc")}</p>
    <form id="ask-form" data-topic="${esc(L(topic.title, lang))}" novalidate>
      <label class="sr-only" for="ask-name">${T(lang, "askNamePh")}</label>
      <input type="text" id="ask-name" name="name" placeholder="${T(lang, "askNamePh")}" autocomplete="name" required />
      <label class="sr-only" for="ask-email">${T(lang, "askEmailPh")}</label>
      <input type="email" id="ask-email" name="email" placeholder="${T(lang, "askEmailPh")}" autocomplete="email" required />
      <label class="sr-only" for="ask-question">${T(lang, "askQuestionPh")}</label>
      <textarea id="ask-question" name="question" placeholder="${T(lang, "askQuestionPh")}" rows="3" required></textarea>
      <input type="text" name="hp" class="gate-hp" tabindex="-1" autocomplete="off" />
      <label class="gate-consent">
        <input type="checkbox" name="consent" id="ask-consent" required />
        <span>${T(lang, "askConsentPre")}<a href="${base}/privacy.html" target="_blank" rel="noopener">${T(lang, "askConsentLink")}</a>${T(lang, "askConsentPost")}</span>
      </label>
      <button type="submit">${T(lang, "askSubmit")}</button>
      <div class="ask-msg" id="ask-msg" aria-live="polite"></div>
    </form>
    <p class="gate-privacy">${T(lang, "askNotice")}</p>
  </div>`;
}

function page(topic, lang) {
  const base = lang === "en" ? "/en" : "";
  const url = `${ORIGIN}${base}/t/${topic.slug}.html`;
  const trUrl = `${ORIGIN}/t/${topic.slug}.html`;
  const enUrl = `${ORIGIN}/en/t/${topic.slug}.html`;
  const title = `${L(topic.title, lang)} | zelandaliyoruk`;
  const desc = L(topic.summary, lang);
  const shareText = encodeURIComponent(`${L(topic.title, lang)} (zelandaliyoruk)\n${url}`);
  const closest =
    topic.related && topic.related.length
      ? TOPICS.find((t) => t.slug === topic.related[0] && t.slug !== topic.slug)
      : null;

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: L(topic.title, lang),
    description: desc,
    inLanguage: lang === "en" ? "en" : "tr",
    isPartOf: { "@type": "WebSite", name: "zelandaliyoruk", url: ORIGIN + base + "/" },
    publisher: { "@type": "Organization", name: "zelandaliyoruk", logo: ORIGIN + "/assets/logo.jpg" },
    mainEntityOfPage: url,
  };

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="tr" href="${trUrl}" />
  <link rel="alternate" hreflang="en" href="${enUrl}" />
  <link rel="alternate" hreflang="x-default" href="${trUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="zelandaliyoruk" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:image" content="${BANNER}" />
  <meta property="og:image:width" content="2048" />
  <meta property="og:image:height" content="1152" />
  <meta property="og:url" content="${url}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${BANNER}" />
  <link rel="icon" type="image/jpeg" href="/assets/logo.jpg" />
  <link rel="apple-touch-icon" href="/assets/logo.jpg" />
  <meta name="theme-color" content="#0c4a30" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/style.css" />
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <a class="brand" href="${base}/">
        <picture><source srcset="/assets/logo.webp" type="image/webp" /><img class="brand-logo" src="/assets/logo.jpg" alt="zelandaliyoruk logo" /></picture>
        zelandaliyoruk
      </a>
      <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
        <nav class="social-links" id="social-links"></nav>
        <div class="lang-switch" id="lang-switch"></div>
      </div>
    </div>
  </header>

  <main>
  <div class="container">
    <a class="back-link" href="${base}/">${esc(T(lang, "backToTopics"))}</a>
    <section class="topic-detail">
      <span class="eyebrow">${esc(T(lang, "topicsEyebrow"))}</span>
      <h1>${esc(L(topic.title, lang))}</h1>
      <p class="summary">${esc(L(topic.summary, lang))}</p>
      ${lastUpdatedHtml(lang)}
      ${topic.intro ? `<p class="topic-intro">${L(topic.intro, lang)}</p>` : ""}
      ${closest ? `<a class="highlight-link" href="${base}/t/${closest.slug}.html">${esc(L(closest.title, lang))}</a>` : ""}
      <a class="share-btn" href="https://wa.me/?text=${shareText}" target="_blank" rel="noopener">${esc(T(lang, "shareBtn"))}</a>
      ${topic.inzWatch ? `<div class="inz-status" id="inz-status">${esc(T(lang, "inzChecking"))}</div>` : ""}
      ${topic.pinned ? (Array.isArray(topic.pinned) ? topic.pinned : [topic.pinned]).map((p) => `<div class="pinned-highlight${p.tone === "light" ? " pinned-highlight--light" : ""}">${L(p, lang)}</div>`).join("") : ""}
      ${calculatorHtml(topic, lang)}
      ${accordionHtml(topic, lang)}
      ${relatedHtml(topic, lang, base)}
      ${questionFormHtml(topic, lang, base)}
    </section>
  </div>

  <div class="disclaimer">
    <div class="container">
      <strong>${esc(T(lang, "disclaimerLabel"))}</strong> <span>${esc(T(lang, "disclaimer"))}</span>
    </div>
  </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      &copy; <span id="year"></span> zelandaliyoruk ·
      <a href="${base}/privacy.html">${esc(T(lang, "footerPrivacy"))}</a> ·
      <a href="${base}/terms.html">${esc(T(lang, "footerTerms"))}</a>
    </div>
  </footer>

  <script defer src="/_vercel/insights/script.js"></script>
  ${lang === "en" ? '<script>window.__FORCE_LANG = "en";</script>' : ""}
  <script src="/i18n.js"></script>
  <script src="/data.js"></script>
  <script src="/gate.js"></script>
  <script src="/question-form.js"></script>
  ${topic.calculator === "salary-nz" ? '<script src="/salary-calculator.js"></script>' : ""}
  <script>
    document.getElementById("year").textContent = new Date().getFullYear();
    renderLangSwitch("lang-switch", { tr: "/t/${topic.slug}.html", en: "/en/t/${topic.slug}.html" });
    var _ic = {
      youtube: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg>',
      instagram: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
      tiktok: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16.5 2h-3v13.6a3 3 0 1 1-2.2-2.9v-3.1a6.1 6.1 0 1 0 5.2 6V9.1a7.6 7.6 0 0 0 4.5 1.5V7.5a4.6 4.6 0 0 1-4.5-4.6V2Z"/></svg>'
    };
    document.getElementById("social-links").innerHTML =
      '<a href="' + SITE.channelUrl + '" target="_blank" rel="noopener">' + _ic.youtube + '<span>YouTube</span></a>' +
      '<a href="' + SITE.instagramUrl + '" target="_blank" rel="noopener">' + _ic.instagram + '<span>Instagram</span></a>' +
      '<a href="' + SITE.tiktokUrl + '" target="_blank" rel="noopener">' + _ic.tiktok + '<span>TikTok</span></a>';
    ${topic.calculator === "salary-nz" ? "if (window.initSalaryCalculator) initSalaryCalculator();" : ""}
    ${
      topic.inzWatch
        ? `fetch("/api/inz-status").then(function(r){return r.json();}).then(function(d){
             var el = document.getElementById("inz-status"); if (!el) return;
             var checked = new Date(d.checkedAt).toLocaleDateString(${lang === "en" ? '"en-NZ"' : '"tr-TR"'});
             el.textContent = Tf(d.anyChanged ? "inzChanged" : "inzOk", { d: checked });
             el.classList.add(d.anyChanged ? "inz-status--changed" : "inz-status--ok");
           }).catch(function(){ var el = document.getElementById("inz-status"); if (el) el.remove(); });`
        : ""
    }
  </script>
</body>
</html>
`;
}

// --- yaz -----------------------------------------------------------------
fs.mkdirSync(path.join(ROOT, "t"), { recursive: true });
fs.mkdirSync(path.join(ROOT, "en", "t"), { recursive: true });

let n = 0;
for (const topic of TOPICS) {
  fs.writeFileSync(path.join(ROOT, "t", `${topic.slug}.html`), page(topic, "tr"));
  fs.writeFileSync(path.join(ROOT, "en", "t", `${topic.slug}.html`), page(topic, "en"));
  n += 2;
}

// --- sitemap.xml -------------------------------------------------------
const staticPairs = [
  ["/", "/en/"],
  ["/checklist.html", "/en/checklist.html"],
  ...TOPICS.map((t) => [`/t/${t.slug}.html`, `/en/t/${t.slug}.html`]),
  ["/privacy.html", "/en/privacy.html"],
  ["/terms.html", "/en/terms.html"],
];
const sm =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  staticPairs
    .flatMap(([tr, en]) =>
      [tr, en].map(
        (loc) =>
          `  <url>\n` +
          `    <loc>${ORIGIN}${loc}</loc>\n` +
          `    <xhtml:link rel="alternate" hreflang="tr" href="${ORIGIN}${tr}" />\n` +
          `    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${en}" />\n` +
          `  </url>`
      )
    )
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sm);

console.log(`${n} konu sayfası + sitemap.xml üretildi.`);
