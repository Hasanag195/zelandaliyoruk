(function () {
  function showWelcome() {
    if (localStorage.getItem("zy_welcome_seen") === "1") return;

    document.documentElement.style.overflow = "hidden";
    const name = localStorage.getItem("zy_lead_name") || "";

    const overlay = document.createElement("div");
    overlay.className = "gate-overlay";
    overlay.innerHTML = `
      <div class="gate-card">
        <img class="gate-logo" src="assets/logo.jpg" alt="zelandalıyoruk logo" />
        <h1>Hoş Geldin${name ? ", " + name.split(" ")[0] : ""} 👋</h1>
        <p>zelandalıyoruk rehberinde şunları bulacaksın:</p>
        <ul class="welcome-list">
          <li>🛂 Vize Türleri &amp; Resmi Süreçler</li>
          <li>✈️ Yeni Zelanda'ya Nasıl Gelinir</li>
          <li>💰 Maaş &amp; Vergi Sistemi</li>
          <li>🏡 Günlük Hayat Gerçekleri</li>
        </ul>
        <button id="welcome-start" type="button">Keşfetmeye Başla</button>
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
      <img class="gate-logo" src="assets/logo.jpg" alt="zelandalıyoruk logo" />
      <h1>zelandalıyoruk'a Hoş Geldin</h1>
      <p>Yeni Zelanda rehberine erişmeden önce birkaç bilgini bırakır mısın?</p>
      <form id="gate-form" novalidate>
        <input type="text" name="name" placeholder="Ad Soyad" autocomplete="name" required />
        <input type="email" name="email" placeholder="E-posta" autocomplete="email" required />
        <input type="text" name="hp" class="gate-hp" tabindex="-1" autocomplete="off" />
        <button type="submit">Devam Et</button>
        <div class="gate-error" id="gate-error"></div>
      </form>
      <p class="gate-privacy">E-posta adresin yalnızca bu proje hakkında bilgilendirme için kullanılır, üçüncü taraflarla paylaşılmaz.</p>
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
      errorEl.textContent = "Lütfen ad soyad ve geçerli bir e-posta gir.";
      return;
    }

    btn.disabled = true;
    btn.textContent = "Gönderiliyor…";

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
      errorEl.textContent = "Bir şeyler ters gitti, lütfen tekrar dene.";
      btn.disabled = false;
      btn.textContent = "Devam Et";
    }
  });
})();
