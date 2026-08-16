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
      // { id: "YouTube video ID", title: "Video başlığı" }
    ],
  },
  {
    slug: "vize-sureclari",
    title: "Vize Türleri & Resmi Süreçler",
    summary: "Yeni Zelanda vize kategorilerine genel bakış. Bu sayfa danışmanlık değildir — her kategori altındaki resmi bağlantıdan güncel koşulları mutlaka kontrol et.",
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
    videos: [],
  },
  {
    slug: "gunluk-hayat",
    title: "Günlük Hayat Gerçekleri",
    summary: "Yeni Zelanda'da yaşamın gündelik gerçekleri — kimsenin anlatmadığı detaylar.",
    videos: [],
  },
];
