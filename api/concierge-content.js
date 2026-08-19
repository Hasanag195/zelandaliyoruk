const CONTENT = {
  title: "NZ Welcome & Settlement Concierge",
  subtitle: "Working Holiday ve yeni gelenler için pratik yerleşim desteği",
  packages: [
    {
      name: "Starter — 'İlk Adım'",
      duration: "1 hafta destek",
      price: "$149 NZD",
      scope: "Havalimanı sonrası yönlendirme rehberi (PDF), IRD/banka/SIM adım adım kılavuz, 1x 30dk online görüşme",
    },
    {
      name: "Premium — 'Yerleşim Paketi'",
      duration: "30 gün destek",
      price: "$399 NZD",
      scope: "Starter + barınma arama koordinasyonu (Trade Me/Flatmates ilan filtreleme), CV/cover letter düzenleme, 3x görüşme",
    },
    {
      name: "Ultimate VIP — 'Tam Kapsam'",
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
  status: "Henüz canlı değil — şirket kaydı ve hukuki onay süreci tamamlanmadan hizmet satışa açılmayacak.",
};

module.exports = async (req, res) => {
  const key = req.query.key || req.headers["x-admin-key"] || "";
  if (!process.env.ADMIN_KEY || key !== process.env.ADMIN_KEY) {
    res.status(401).json({ ok: false, error: "unauthorized" });
    return;
  }
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ ok: true, content: CONTENT });
};
