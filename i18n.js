// Dil yönetimi: TR/EN. localStorage'da saklanır, tüm sayfalarda data.js'ten önce yüklenir.
(function () {
  function getLang() {
    // /en/ sayfaları her zaman İngilizce render eder (SEO için sabit), diğer sayfalar
    // localStorage'daki kullanıcı tercihini kullanır.
    if (window.__FORCE_LANG) return window.__FORCE_LANG;
    return localStorage.getItem("zy_lang") || "tr";
  }
  function setLang(l) {
    localStorage.setItem("zy_lang", l);
  }
  window.getLang = getLang;
  window.setLang = setLang;

  // Çift dilli bir { tr, en } objesinden mevcut dile göre metni seçer.
  // Düz string verilirse (henüz çevrilmemiş eski içerik) olduğu gibi döner.
  window.L = function (field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[getLang()] || field.tr || field.en || "";
  };

  const STRINGS = {
    tr: {
      backToTopics: "← Tüm konular",
      topicsEyebrow: "Rehber",
      topicsHeading: "Konu Başlıkları",
      videosEyebrow: "İzle",
      videosHeading: "Videolar",
      heroEyebrow: "Türkiye'den Yeni Zelanda'ya Rehber",
      heroTitle: "Yeni Zelanda'ya Yolculuk Rehberi",
      heroSubtitle: "Vize süreçlerinden günlük hayata, konu başlığına göre derlenmiş kapsamlı rehber.",
      heroStats: [
        { n: "580+", l: "Abone" },
        { n: "55+", l: "Video" },
        { n: "7", l: "Rehber Konusu" },
        { n: "Ücretsiz", l: "Rehber" },
      ],
      ctaEyebrow: "Ücretsiz Kaynak",
      ctaTitle: "Yeni Zelanda'ya Yolculuk Checklist'i",
      ctaSubtitle: "Hazırlıktan ilk haftaya, işaretleyerek takip edebileceğin adım adım liste.",
      askTitle: "Aklında bir soru mu var?",
      askDesc: "Hangi konuyla ilgili olursa olsun sorunu bırak, gelecek videolarda cevaplayayım. Yorum alanı değildir, cevaplar burada değil kanalda gelir.",
      askNamePh: "Ad Soyad",
      askEmailPh: "E-posta",
      askQuestionPh: "Sorunu yaz…",
      askSubmit: "Soruyu Gönder",
      askSending: "Gönderiliyor…",
      askOk: "Sorun alındı, teşekkürler!",
      askErr: "Bir şeyler ters gitti, tekrar dener misin?",
      askValidation: "Lütfen tüm alanları doldur.",
      disclaimerLabel: "Yasal Uyarı:",
      disclaimer: "Bu sitede ve zelandaliyoruk YouTube/Instagram/TikTok hesaplarında paylaşılan içerikler tamamen kişisel deneyim ve bilgi paylaşımı amaçlıdır; hukuki, mali, vergi veya göçmenlik danışmanlığı niteliği taşımaz. Herhangi bir danışmanlık hizmeti sunulmamaktadır. Vize, oturum izni, vergi veya hukuki konularda karar almadan önce mutlaka lisanslı bir göçmenlik danışmanı, avukat veya ilgili resmi kurumlara danışınız. Bu sitedeki bilgilerin kullanımından doğabilecek hiçbir sonuçtan sorumluluk kabul edilmez.",
      videoComingSoon: "Bu konu için video yakında eklenecek.",
      visitChannel: "Kanalı ziyaret et →",
      notFound: "Konu bulunamadı.",
      shareBtn: "📤 WhatsApp'ta Paylaş",
      officialLink: "Resmi sayfaya git",
      calcTitle: "Maaş Hesaplayıcı",
      calcDesc: "Brüt (vergi öncesi) yıllık maaşını gir, net eline geçecek tahmini tutarı gör.",
      calcGrossLabel: "Brüt Yıllık Maaş (NZD)",
      calcKiwiSaverLabel: "KiwiSaver'a katılıyorum",
      calcKiwiSaverRateLabel: "KiwiSaver oranı",
      calcButton: "Hesapla",
      calcResultGross: "Brüt yıllık maaş",
      calcResultTax: "Gelir vergisi (PAYE)",
      calcResultAcc: "ACC işçi primi",
      calcResultKiwiSaver: "KiwiSaver kesintisi",
      calcResultNetYear: "Net yıllık",
      calcResultNetMonth: "Net aylık",
      calcResultNetWeek: "Net haftalık",
      calcResultRate: "Efektif vergi oranı",
      calcDisclaimer: "Bu tahmini bir hesaplamadır, öğrenci kredisi, ikincil gelir veya vergi kredileri gibi durumları hesaba katmaz. Güncel resmi oranlar için ird.govt.nz'yi kontrol et.",
      gateTitle: "zelandaliyoruk Hoş Geldin",
      gateDesc: "Yeni Zelanda rehberine erişmeden önce birkaç bilgini bırakır mısın?",
      gateNamePh: "Ad Soyad",
      gateEmailPh: "E-posta",
      gateSubmit: "Devam Et",
      gateSending: "Gönderiliyor…",
      gateErr: "Bir şeyler ters gitti, lütfen tekrar dene.",
      gateValidation: "Lütfen ad soyad ve geçerli bir e-posta gir.",
      gatePrivacy: "E-posta adresin yalnızca bu proje hakkında bilgilendirme için kullanılır, üçüncü taraflarla paylaşılmaz.",
      gateConsentPre: "Kişisel verilerimin ",
      gateConsentLink: "Gizlilik Politikası",
      gateConsentPost: " kapsamında işlenmesini kabul ediyorum.",
      gateConsentErr: "Devam etmek için gizlilik politikasını onaylamalısın.",
      footerPrivacy: "Gizlilik Politikası",
      footerTerms: "Kullanım Şartları",
      welcomeHi: "Hoş Geldin",
      welcomeDesc: "zelandaliyoruk rehberinde şunları bulacaksın:",
      welcomeStart: "Keşfetmeye Başla",
      welcomeList: ["🛂 Vize Türleri & Resmi Süreçler", "✈️ Yeni Zelanda'ya Nasıl Gelinir", "💰 Maaş & Vergi Sistemi", "🏡 Günlük Hayat Gerçekleri"],
      inzChecking: "Resmi kaynaklarla karşılaştırılıyor…",
      inzChanged: "Immigration NZ sayfalarında değişiklik tespit edildi (son kontrol: {d}). Bu sayfadaki özet gözden geçiriliyor, en güncel bilgi için yukarıdaki resmi bağlantılara bakın.",
      inzOk: "Immigration NZ sayfalarıyla karşılaştırıldı, önemli bir değişiklik tespit edilmedi (son kontrol: {d}).",
      notFoundTitle: "Sayfa Bulunamadı (404)",
      notFoundDesc: "Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.",
      backHome: "← Ana sayfaya dön",
      clPrint: "🖨️ Yazdır / PDF Olarak Kaydet",
      clReset: "Listeyi Sıfırla",
      clResetConfirm: "Tüm işaretleri sıfırlamak istediğine emin misin?",
      clProgress: "{n} / {t} tamamlandı",
      clEyebrow: "Ücretsiz Kaynak",
      clTitle: "Yeni Zelanda'ya Yolculuk Checklist'i",
      clDesc: "Türkiye'den Yeni Zelanda'ya uzanan yolculuğunun her adımını kendi hızında işaretleyerek takip edebilirsin. İlerlemen tarayıcında otomatik olarak saklanır.",
      ccCardTitle: "Settlement Concierge",
      ccCardDesc: "Yeni gelenler için yerleşim destek hizmeti. Çok yakında.",
      ccPremium: "Premium",
      ccLockedTitle: "Settlement Concierge",
      ccLockedDesc: "Working Holiday ve yeni gelenler için yerleşim destek hizmeti hazırlanıyor. Detaylar şimdilik yalnızca ekip tarafından görüntülenebilir.",
      ccKeyPh: "Erişim anahtarı",
      ccUnlock: "Görüntüle",
      ccKeyErr: "Anahtar hatalı.",
      ccLoadErr: "Yüklenemedi.",
      ccInterestPrompt: "Bu hizmet başlayınca haberdar olmak ister misin?",
      ccInterestBtn: "İlgileniyorum",
      ccInterestBtnDone: "İlgileniyorum ✓",
      ccInterestSending: "Gönderiliyor…",
      ccInterestNeedEmail: "Önce ana sayfadan e-postanı bırakman gerekiyor.",
      ccInterestSent: "Kaydedildi, teşekkürler!",
      ccInterestErr: "Bir şeyler ters gitti, tekrar dener misin?",
      ccPreviewLabel: "Önizleme (Sadece Sen)",
      videoSchemaDesc: "{title}: zelandaliyoruk YouTube kanalından Yeni Zelanda rehberi videosu.",
      relatedTopicsHeading: "İlgili Konular",
    },
    en: {
      backToTopics: "← All topics",
      topicsEyebrow: "Guide",
      topicsHeading: "Topics",
      videosEyebrow: "Watch",
      videosHeading: "Videos",
      heroEyebrow: "Turkey to New Zealand, Guided",
      heroTitle: "Your Journey to New Zealand",
      heroSubtitle: "From visa processes to daily life, a comprehensive guide organised by topic.",
      heroStats: [
        { n: "580+", l: "Subscribers" },
        { n: "55+", l: "Videos" },
        { n: "7", l: "Guide Topics" },
        { n: "Free", l: "Guide" },
      ],
      ctaEyebrow: "Free Resource",
      ctaTitle: "New Zealand Journey Checklist",
      ctaSubtitle: "A step-by-step list you can tick off, from preparation to your first week.",
      askTitle: "Got a question?",
      askDesc: "Leave your question about any topic and I'll answer it in a future video. This isn't a comment section: the answer comes on the channel, not here.",
      askNamePh: "Full name",
      askEmailPh: "Email",
      askQuestionPh: "Write your question…",
      askSubmit: "Send Question",
      askSending: "Sending…",
      askOk: "Got it, thank you!",
      askErr: "Something went wrong, want to try again?",
      askValidation: "Please fill in all fields.",
      disclaimerLabel: "Disclaimer:",
      disclaimer: "The content shared on this site and on zelandaliyoruk's YouTube/Instagram/TikTok accounts is personal experience and information-sharing only; it does not constitute legal, financial, tax, or immigration advice, and no advisory service is provided. Before making any decision about visas, residence, tax, or legal matters, always consult a licensed immigration adviser, lawyer, or the relevant official authorities. No liability is accepted for any consequences arising from the use of information on this site.",
      videoComingSoon: "A video for this topic is coming soon.",
      visitChannel: "Visit the channel →",
      notFound: "Topic not found.",
      shareBtn: "📤 Share on WhatsApp",
      officialLink: "Go to official page",
      calcTitle: "Salary Calculator",
      calcDesc: "Enter your gross (before-tax) annual salary to see an estimated take-home amount.",
      calcGrossLabel: "Gross Annual Salary (NZD)",
      calcKiwiSaverLabel: "I'm enrolled in KiwiSaver",
      calcKiwiSaverRateLabel: "KiwiSaver rate",
      calcButton: "Calculate",
      calcResultGross: "Gross annual salary",
      calcResultTax: "Income tax (PAYE)",
      calcResultAcc: "ACC earner levy",
      calcResultKiwiSaver: "KiwiSaver deduction",
      calcResultNetYear: "Net annual",
      calcResultNetMonth: "Net monthly",
      calcResultNetWeek: "Net weekly",
      calcResultRate: "Effective tax rate",
      calcDisclaimer: "This is an estimate and doesn't account for student loan repayments, secondary income, or tax credits. For current official rates, check ird.govt.nz.",
      gateTitle: "Welcome to zelandaliyoruk",
      gateDesc: "Mind leaving a few details before you access the New Zealand guide?",
      gateNamePh: "Full name",
      gateEmailPh: "Email",
      gateSubmit: "Continue",
      gateSending: "Sending…",
      gateErr: "Something went wrong, please try again.",
      gateValidation: "Please enter your name and a valid email.",
      gatePrivacy: "Your email is only used for updates about this project and is never shared with third parties.",
      gateConsentPre: "I agree to the processing of my personal data as described in the ",
      gateConsentLink: "Privacy Policy",
      gateConsentPost: ".",
      gateConsentErr: "You need to accept the privacy policy to continue.",
      footerPrivacy: "Privacy Policy",
      footerTerms: "Terms of Use",
      welcomeHi: "Welcome",
      welcomeDesc: "Here's what you'll find in the zelandaliyoruk guide:",
      welcomeStart: "Start Exploring",
      welcomeList: ["🛂 Visa Types & Official Processes", "✈️ How to Come to New Zealand", "💰 Salary & Tax System", "🏡 Everyday Life Realities"],
      inzChecking: "Comparing with official sources…",
      inzChanged: "A change was detected on Immigration NZ's pages (last checked: {d}). This page's summary is being reviewed, check the official links above for the latest information.",
      inzOk: "Compared with Immigration NZ's pages, no significant change detected (last checked: {d}).",
      notFoundTitle: "Page Not Found (404)",
      notFoundDesc: "The page you're looking for may have moved or never existed.",
      backHome: "← Back to homepage",
      clPrint: "🖨️ Print / Save as PDF",
      clReset: "Reset List",
      clResetConfirm: "Are you sure you want to reset all checkmarks?",
      clProgress: "{n} / {t} completed",
      clEyebrow: "Free Resource",
      clTitle: "New Zealand Journey Checklist",
      clDesc: "You can tick off every step of your journey from Turkey to New Zealand at your own pace. Your progress is saved automatically in your browser.",
      ccCardTitle: "Settlement Concierge",
      ccCardDesc: "A settlement support service for newcomers. Coming soon.",
      ccPremium: "Premium",
      ccLockedTitle: "Settlement Concierge",
      ccLockedDesc: "A settlement support service for Working Holiday makers and newcomers is in the works. Details are visible to the team only for now.",
      ccKeyPh: "Access key",
      ccUnlock: "View",
      ccKeyErr: "Incorrect key.",
      ccLoadErr: "Couldn't load.",
      ccInterestPrompt: "Want to be notified when this service launches?",
      ccInterestBtn: "I'm interested",
      ccInterestBtnDone: "I'm interested ✓",
      ccInterestSending: "Sending…",
      ccInterestNeedEmail: "You need to leave your email on the homepage first.",
      ccInterestSent: "Saved, thank you!",
      ccInterestErr: "Something went wrong, want to try again?",
      ccPreviewLabel: "Preview (You Only)",
      videoSchemaDesc: "{title}: a New Zealand guide video from the zelandaliyoruk YouTube channel.",
      relatedTopicsHeading: "Related Topics",
    },
  };

  window._STRINGS = STRINGS;
  window.T = function (key) {
    const lang = getLang();
    return (STRINGS[lang] && STRINGS[lang][key]) ?? STRINGS.tr[key] ?? key;
  };
  // Basit {placeholder} değiştirme
  window.Tf = function (key, vars) {
    let s = T(key);
    Object.keys(vars || {}).forEach((k) => {
      s = s.replace(`{${k}}`, vars[k]);
    });
    return s;
  };

  // urls: { tr: "/index.html", en: "/en/index.html" }: sayfanın diğer dildeki gerçek adresi.
  // Gerçek <a href> linkleri kullanır (SEO/crawler dostu), tıklanınca tercih de hatırlanır.
  window.renderLangSwitch = function (containerId, urls) {
    const el = document.getElementById(containerId);
    if (!el || !urls) return;
    const lang = getLang();
    el.innerHTML = `
      <a href="${urls.tr}" class="lang-btn${lang === "tr" ? " active" : ""}" data-lang="tr">TR</a>
      <a href="${urls.en}" class="lang-btn${lang === "en" ? " active" : ""}" data-lang="en">EN</a>
    `;
    el.querySelectorAll(".lang-btn").forEach((a) => {
      a.addEventListener("click", () => setLang(a.dataset.lang));
    });
  };
})();
