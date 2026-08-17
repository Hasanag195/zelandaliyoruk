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
    summary: "Yeni Zelanda vize kategorilerine genel bakış. Bu sayfa danışmanlık değildir, her kategori altındaki resmi bağlantıdan güncel koşulları mutlaka kontrol et.",
    inzWatch: true,
    visaCategories: [
      {
        title: "Çalışma Vizeleri (Work)",
        description: "İş teklifi ile sponsorlu çalışma vizesi, çalışma tatili (working holiday) vizesi ve yatırım/iş kurma vizeleri bu kategoride.",
        url: "https://www.immigration.govt.nz/work/visas-for-working-in-new-zealand/",
      },
      {
        title: "Öğrenci Vizeleri (Study)",
        description: "Yeni Zelanda'da bir eğitim kurumuna kayıtlı olarak okumak isteyenler için vize seçenekleri.",
        url: "https://www.immigration.govt.nz/study/study-visas/",
      },
      {
        title: "Ziyaretçi Vizeleri (Visit) & NZeTA",
        description: "Turistik/aile ziyareti, iş amaçlı kısa ziyaretler ve vizesiz giriş yapabilen ülkeler için elektronik seyahat izni (NZeTA).",
        url: "https://www.immigration.govt.nz/visit/",
      },
      {
        title: "Oturum Vizeleri (Resident)",
        description: "Nitelikli göçmen (skilled) yerleşim yolları, kalıcı oturum ve belirli Pasifik ülke vatandaşları için özel oturum vizeleri.",
        url: "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/",
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
    accordion: {
      label: "İşçi Hakları Konuları",
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
