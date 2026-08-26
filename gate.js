(function () {
  if (localStorage.getItem("zy_lead_ok") === "1") return;
  if (sessionStorage.getItem("zy_gate_dismissed") === "1") return;

  const banner = document.createElement("div");
  banner.className = "gate-banner";
  banner.innerHTML = `
    <div class="gate-banner-card">
      <button type="button" class="gate-banner-close" id="gate-banner-close" aria-label="Kapat">&times;</button>
      <picture><source srcset="/assets/logo.webp" type="image/webp" /><img class="gate-logo" src="/assets/logo.jpg" alt="zelandaliyoruk logo" /></picture>
      <h1>${T("gateTitle")}</h1>
      <p>${T("gateDesc")}</p>
      <form id="gate-form" novalidate>
        <label class="sr-only" for="gate-name">${T("gateNamePh")}</label>
        <input type="text" id="gate-name" name="name" placeholder="${T("gateNamePh")}" autocomplete="name" required />
        <label class="sr-only" for="gate-email">${T("gateEmailPh")}</label>
        <input type="email" id="gate-email" name="email" placeholder="${T("gateEmailPh")}" autocomplete="email" required />
        <input type="text" name="hp" class="gate-hp" tabindex="-1" autocomplete="off" />
        <label class="gate-consent">
          <input type="checkbox" name="consent" id="gate-consent" required />
          <span>${T("gateConsentPre")}<a href="${getLang() === "en" ? "/en/privacy.html" : "/privacy.html"}" target="_blank" rel="noopener">${T("gateConsentLink")}</a>${T("gateConsentPost")}</span>
        </label>
        <button type="submit">${T("gateSubmit")}</button>
        <div class="gate-error" id="gate-error" aria-live="polite"></div>
      </form>
      <p class="gate-privacy">${T("gatePrivacy")}</p>
    </div>
  `;
  document.body.appendChild(banner);

  banner.querySelector("#gate-banner-close").addEventListener("click", () => {
    sessionStorage.setItem("zy_gate_dismissed", "1");
    banner.remove();
  });

  const form = banner.querySelector("#gate-form");
  const errorEl = banner.querySelector("#gate-error");
  const btn = form.querySelector("button");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorEl.textContent = "";
    const data = new FormData(form);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const hp = data.get("hp").trim();
    const consent = data.get("consent") === "on";

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorEl.textContent = T("gateValidation");
      return;
    }
    if (!consent) {
      errorEl.textContent = T("gateConsentErr");
      return;
    }

    btn.disabled = true;
    btn.textContent = T("gateSending");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, hp, consent }),
      });
      if (!res.ok) throw new Error("request_failed");
      localStorage.setItem("zy_lead_ok", "1");
      localStorage.setItem("zy_lead_name", name);
      localStorage.setItem("zy_lead_email", email);
      banner.querySelector(".gate-banner-card").innerHTML = `<p class="gate-thanks">${T("gateThanks")}</p>`;
      setTimeout(() => banner.remove(), 2600);
    } catch (err) {
      errorEl.textContent = T("gateErr");
      btn.disabled = false;
      btn.textContent = T("gateSubmit");
    }
  });
})();
