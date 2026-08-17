// Site içeriğinin tek kaynağı: yeni konu başlığı eklemek için buraya bir obje eklemen yeterli.
const SITE = {
  channelUrl: "https://www.youtube.com/@zelandalıyoruk",
  instagramUrl: "https://www.instagram.com/zelandaliyoruk",
  tiktokUrl: "https://www.tiktok.com/@zelandaliyoruk",
};

const TOPICS = [
  {
    slug: "nasil-gelinir",
    title: "Yeni Zelanda'ya Nasıl Gelinir",
    summary: "Yeni Zelanda'ya gelmenin yasal yolları: sponsorlu çalışma vizesi, öğrenci vizesi ve diğer seçenekler.",
    videos: [
      { id: "Z2fB2UyX0F4", title: "Yeni Zelanda'ya Nasıl Gelinir 6 Yasal Yol!" },
    ],
  },
  {
    slug: "vize-sureclari",
    title: "Vize Türleri & Resmi Süreçler",
    summary: "Türkiye'den Yeni Zelanda'ya gelmek için ihtiyacın olan resmi bilgiler tek yerde. Başlığa tıkla, doğrudan resmi kaynağa git. Bu sayfa danışmanlık değildir.",
    inzWatch: true,
    accordion: [
      {
        label: "🇹🇷 Türkiye'den Gelenler İçin Özel Bilgiler",
        open: true,
        items: [
          {
            label: "Türkiye Çalışma Tatili Vizesi (18-30 yaş arası için özel anlaşma)",
            url: "https://www.immigration.govt.nz/visas/turkey-working-holiday-visa/",
          },
          {
            label: "Türkiye vize muafiyeti listesinde değil: NZeTA yetmez, Ziyaretçi Vizesi gerekir",
            url: "https://www.immigration.govt.nz/visit/what-you-need-to-visit-new-zealand/visa-waiver-countries-and-territories/",
          },
        ],
      },
      {
        label: "En Çok Aranan Vize Türleri",
        items: [
          { label: "Ziyaretçi Vizesi (Visitor Visa)", url: "https://www.immigration.govt.nz/visas/visitor-visa/" },
          { label: "Akredite İşveren Çalışma Vizesi (Accredited Employer Work Visa)", url: "https://www.immigration.govt.nz/visas/accredited-employer-work-visa/" },
          { label: "Nitelikli Göçmen Kalıcı Oturum Vizesi (Skilled Migrant Category)", url: "https://www.immigration.govt.nz/visas/skilled-migrant-category-resident-visa/" },
          { label: "Öğrenci Vizesi (Fee Paying Student Visa)", url: "https://www.immigration.govt.nz/visas/fee-paying-student-visa/" },
          { label: "Partner Vizesi (New Zealand vatandaşı/residenti ile)", url: "https://www.immigration.govt.nz/visas/partner-of-a-new-zealander-resident-visa/" },
        ],
      },
      {
        label: "Genel Kategori Sayfaları (tüm alt seçenekler)",
        items: [
          { label: "Çalışma Vizeleri: tüm seçenekler", url: "https://www.immigration.govt.nz/work/visas-for-working-in-new-zealand/" },
          { label: "Öğrenci Vizeleri: tüm seçenekler", url: "https://www.immigration.govt.nz/study/study-visas/" },
          { label: "Ziyaretçi Vizeleri: tüm seçenekler", url: "https://www.immigration.govt.nz/visit/" },
          { label: "Oturum Vizeleri: tüm seçenekler", url: "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/" },
        ],
      },
      {
        label: "Başvuru İçin Hazırlık",
        items: [
          {
            label: "Başvuruda İstenen Belgeler ve Kanıtlar",
            url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/",
          },
        ],
      },
    ],
    videos: [],
  },
  {
    slug: "maas-vergi",
    title: "Maaş & Vergi Sistemi",
    summary: "Yeni Zelanda'da maaşlar, vergi sistemi ve çalışma hayatı hakkında gerçekler.",
    videos: [
      { id: "gZIgX_0Ny9g", title: "Yeni Zelanda'da Çalışma Hayatı Maaşlar ve Vergi Sistemi!" },
    ],
  },
  {
    slug: "gunluk-hayat",
    title: "Günlük Hayat Gerçekleri",
    summary: "Yeni Zelanda'da yaşamın gündelik gerçekleri: kimsenin anlatmadığı detaylar.",
    videos: [
      { id: "-PftP3IlhOs", title: "Yeni Zelanda'da Hayat Nasıl? (Yeni Zelanda Gerçekleri)" },
      { id: "q0rccS7Rdek", title: "Yeni Zelanda'da Ev Bulma: Gerçek Süreç ve Hatalar (1. Bölüm)" },
      { id: "fGgNF-I6zYc", title: "Yeni Zelanda'da Ramazan Atmosferi (Türklerle Karşılaştık)" },
    ],
  },
  {
    slug: "isci-haklari",
    title: "İşçi Hakları",
    summary: "Yeni Zelanda'da çalışma vizesiyle çalışırken haklarını ve işvereninin sorumluluklarını bil. Başlığa tıkla, altındaki konulardan resmi sayfaya git.",
    accordion: [
      {
        label: "İşçi Hakları Konuları",
        open: true,
        items: [
          {
            label: "Kurallar: Yurt Dışından Gelen Çalışan Olarak Haklarınız",
            url: "https://www.immigration.govt.nz/work/worker-rights/your-rights-as-a-worker-from-overseas/",
          },
          {
            label: "Çalışma Sorumluluğu: İşvereniniz AEWV'de Ne Yapmalı",
            url: "https://www.immigration.govt.nz/work/worker-rights/what-your-employer-must-do-when-they-hire-you-on-an-aewv/",
          },
          {
            label: "Çalışan Hakları ve Sorumlulukları",
            url: "https://www.employment.govt.nz/starting-employment/rights-and-responsibilities/employee-rights-and-responsibilities",
          },
          {
            label: "İhmaller: İş Yerinde Destek ve Sorun Bildirme",
            url: "https://www.immigration.govt.nz/work/worker-rights/support-in-the-workplace/",
          },
          {
            label: "Göçmen Sömürüsü",
            url: "https://www.employment.govt.nz/resolving-problems/migrant-exploitation",
          },
          {
            label: "Göçmen Sömürüsünden Korunma Çalışma Vizesi",
            url: "https://www.immigration.govt.nz/visas/migrant-exploitation-protection-work-visa",
          },
        ],
      },
    ],
    videos: [],
  },
  {
    slug: "gezi-kesif",
    title: "Gezi & Keşif",
    summary: "Yeni Zelanda'nın doğası ve gezilecek yerleri: kanaldaki keşif videoları.",
    videos: [
      { id: "C0Nbab1mtu8", title: "Yeni Zelanda Waitomo Mağaraları: Karanlığın İçindeki Işıklar!" },
      { id: "krkUb7Lgorg", title: "Yeni Zelanda'da Sessizliğin İçinde 🐦 | Katikati Bird Gardens" },
    ],
  },
];
