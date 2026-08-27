// Statik konu sayfalarındaki "Soru Sor" formunu (#ask-form) yönetir.
// Konu adı form üzerindeki data-topic özniteliğinden okunur.
(function () {
  const form = document.getElementById("ask-form");
  if (!form) return;
  const msg = document.getElementById("ask-msg");
  const nameEl = form.querySelector('input[name="name"]');
  const emailEl = form.querySelector('input[name="email"]');
  if (nameEl && !nameEl.value) nameEl.value = localStorage.getItem("zy_lead_name") || "";
  if (emailEl && !emailEl.value) emailEl.value = localStorage.getItem("zy_lead_email") || "";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.textContent = "";
    msg.className = "ask-msg";
    const data = new FormData(form);
    const name = (data.get("name") || "").trim();
    const email = (data.get("email") || "").trim();
    const question = (data.get("question") || "").trim();
    const hp = (data.get("hp") || "").trim();
    const consent = data.get("consent") === "on";

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !question) {
      msg.textContent = T("askValidation");
      msg.classList.add("ask-msg--error");
      return;
    }
    if (!consent) {
      msg.textContent = T("askConsentErr");
      msg.classList.add("ask-msg--error");
      return;
    }

    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.textContent = T("askSending");

    try {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, question, topic: form.dataset.topic || "Genel", hp, consent }),
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      msg.textContent = T("askOk");
      msg.classList.add("ask-msg--ok");
    } catch (err) {
      msg.textContent = T("askErr");
      msg.classList.add("ask-msg--error");
    } finally {
      btn.disabled = false;
      btn.textContent = T("askSubmit");
    }
  });
})();
