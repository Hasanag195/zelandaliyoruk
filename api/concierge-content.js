const CONTENT = {
  tr: {
    title: "NZ Welcome & Settlement Concierge",
    subtitle: "Working Holiday ve yeni gelenler için pratik yerleşim desteği",
    packagesLabel: "Paketler",
    addonsLabel: "Ek Modüller",
    packages: [
      {
        name: "Starter: 'İlk Adım'",
        duration: "1 hafta destek",
        price: "$149 NZD",
        scope: "Havalimanı sonrası yönlendirme rehberi (PDF), IRD/banka/SIM adım adım kılavuz, 1x 30dk online görüşme",
      },
      {
        name: "Premium: 'Yerleşim Paketi'",
        duration: "30 gün destek",
        price: "$399 NZD",
        scope: "Starter + barınma arama koordinasyonu (Trade Me/Flatmates ilan filtreleme), CV/cover letter düzenleme, 3x görüşme",
      },
      {
        name: "Ultimate VIP: 'Tam Kapsam'",
        duration: "90 gün destek",
        price: "$799 NZD",
        scope: "Premium + havalimanı karşılama koordinasyonu, ilk hafta günlük WhatsApp desteği, mülakat provası, ikinci el araç kontrol rehberliği",
      },
    ],
    addons: [
      { name: "Araç Alım Danışmanlığı", price: "$79 NZD", scope: "WOF/REGO/CarJam kontrol rehberliği, satın alma öncesi kontrol listesi" },
      { name: "Mülakat Hazırlık Seansı", price: "$59 NZD", scope: "1x45dk NZ iş kültürüne özel mülakat provası" },
    ],
    scopeNote: "Hiçbir pakette vize başvuru işlemi, INZ ile yazışma veya iş garantisi yer almaz.",
    disclaimer:
      "NZ Welcome & Settlement Concierge, lisanslı bir Immigration Adviser (IAA) veya işe yerleştirme acentesi değildir. Sunulan hizmetler; barınma koordinasyonu, idari kurulum rehberliği ve iş arama mentorluğundan ibarettir. Vize kategorisi, başvuru stratejisi veya oturum izni ile ilgili kararlar için müşteri, lisanslı bir Immigration Adviser'a veya avukata yönlendirilir. Şirket, iş bulma veya vize onayı garantisi vermez.",
    disclaimerLabel: "Yasal Uyarı:",
    status: "Henüz canlı değil. Şirket kaydı ve hukuki onay süreci tamamlanmadan hizmet satışa açılmayacak.",
  },
  en: {
    title: "NZ Welcome & Settlement Concierge",
    subtitle: "Practical settlement support for Working Holiday makers and newcomers",
    packagesLabel: "Packages",
    addonsLabel: "Add-on Modules",
    packages: [
      {
        name: "Starter: 'First Step'",
        duration: "1 week support",
        price: "$149 NZD",
        scope: "Post-arrival orientation guide (PDF), step-by-step IRD/bank/SIM setup guide, 1x 30min online call",
      },
      {
        name: "Premium: 'Settlement Package'",
        duration: "30 days support",
        price: "$399 NZD",
        scope: "Starter + accommodation search coordination (Trade Me/Flatmates listing filtering), CV/cover letter editing, 3x calls",
      },
      {
        name: "Ultimate VIP: 'Full Coverage'",
        duration: "90 days support",
        price: "$799 NZD",
        scope: "Premium + airport pickup coordination, daily WhatsApp support in the first week, mock interview, used-car inspection guidance",
      },
    ],
    addons: [
      { name: "Car Purchase Advisory", price: "$79 NZD", scope: "WOF/REGO/CarJam check guidance, pre-purchase checklist" },
      { name: "Interview Prep Session", price: "$59 NZD", scope: "1x45min mock interview tailored to NZ workplace culture" },
    ],
    scopeNote: "No package includes visa application processing, correspondence with INZ, or a job guarantee.",
    disclaimer:
      "NZ Welcome & Settlement Concierge is not a licensed Immigration Adviser (IAA) or a recruitment agency. The services provided consist of accommodation coordination, administrative setup guidance, and job-search mentoring. For decisions about visa category, application strategy, or residence, clients are referred to a licensed Immigration Adviser or lawyer. The company does not guarantee employment or visa approval.",
    disclaimerLabel: "Disclaimer:",
    status: "Not yet live. The service will not open for sale until company registration and legal review are complete.",
  },
};

module.exports = async (req, res) => {
  const key = req.query.key || req.headers["x-admin-key"] || "";
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    res.status(401).json({ ok: false, error: "unauthorized" });
    return;
  }
  const lang = req.query.lang === "en" ? "en" : "tr";
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ ok: true, content: CONTENT[lang] });
};
