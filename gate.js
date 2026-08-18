(function () {
  function showWelcome() {
    if (localStorage.getItem("zy_welcome_seen") === "1") return;

    document.documentElement.style.overflow = "hidden";
    const name = localStorage.getItem("zy_lead_name") || "";

    const overlay = document.createElement("div");
    overlay.className = "gate-overlay";
    overlay.innerHTML = `
      <div class="gate-card">
        <img class="gate-logo" src="assets/logo.jpg" alt="zelandaliyoruk logo" />
        <h1>${T("welcomeHi")}${name ? ", " + name.split(" ")[0] : ""} 👋</h1>
        <p>${T("welcomeDesc")}</p>
        <ul class="welcome-list">
          ${T("welcomeList").map((li) => `<li>${li}</li>`).join("")}
        </ul>
        <button id="welcome-start" type="button">${T("welcomeStart")}</button>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector("#welcome-start").addEventListener("click", () => {
      localStorage.setItem("zy_welcome_seen", "1");
      document.documentElement.style.overflow = "";
      overlay.remove();
    });
  }

  if (localStorage.getItem("zy_lead_ok") === "1") {
    showWelcome();
    return;
  }

  document.documentElement.style.overflow = "hidden";

  const overlay = document.createElement("div");
  overlay.className = "gate-overlay";
  overlay.innerHTML = `
    <div class="gate-card">
      <img class="gate-logo" src="assets/logo.jpg" alt="zelandaliyoruk logo" />
      <h1>${T("gateTitle")}</h1>
      <p>${T("gateDesc")}</p>
      <form id="gate-form" novalidate>
        <input type="text" name="name" placeholder="${T("gateNamePh")}" autocomplete="name" required />
        <input type="email" name="email" placeholder="${T("gateEmailPh")}" autocomplete="email" required />
        <input type="text" name="hp" class="gate-hp" tabindex="-1" autocomplete="off" />
        <button type="submit">${T("gateSubmit")}</button>
        <div class="gate-error" id="gate-error"></div>
      </form>
      <p class="gate-privacy">${T("gatePrivacy")}</p>
    </div>
  `;
  document.body.appendChild(overlay);

  const form = overlay.querySelector("#gate-form");
  const errorEl = overlay.querySelector("#gate-error");
  const btn = form.querySelector("button");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorEl.textContent = "";
    const data = new FormData(form);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const hp = data.get("hp").trim();

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorEl.textContent = T("gateValidation");
      return;
    }

    btn.disabled = true;
    btn.textContent = T("gateSending");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, hp }),
      });
      if (!res.ok) throw new Error("request_failed");
      localStorage.setItem("zy_lead_ok", "1");
      localStorage.setItem("zy_lead_name", name);
      localStorage.setItem("zy_lead_email", email);
      overlay.remove();
      showWelcome();
      if (!document.querySelector(".gate-overlay")) document.documentElement.style.overflow = "";
    } catch (err) {
      errorEl.textContent = T("gateErr");
      btn.disabled = false;
      btn.textContent = T("gateSubmit");
    }
  });
})();
