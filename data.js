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
        label: "Çalışma Vizesi Kategorileri (Immigration NZ'nin Tam Listesi)",
        items: [
          { label: "Akredite İşveren Çalışma Vizeleri", url: "https://immigration.govt.nz/visas/accredited-employer-work-visa" },
          { label: "Ülkeye Özel Çalışma Vizeleri (Çin, Japonya, Kore, Vietnam vb.)", url: "https://www.immigration.govt.nz/work/visas-for-working-in-new-zealand/" },
          { label: "Ev İçi Çalışan Vizesi (Diplomat Personeli)", url: "https://immigration.govt.nz/visas/domestic-staff-of-a-diplomat-work-visa" },
          { label: "Sanatçı, Yetenek veya Özel Amaçlı Çalışma Vizeleri", url: "https://immigration.govt.nz/visas/entertainers-work-visa" },
          { label: "Balıkçı Mürettebatı Çalışma Vizesi", url: "https://immigration.govt.nz/visas/fishing-crew-work-visa" },
          { label: "Partner Çalışma Vizeleri", url: "https://immigration.govt.nz/visas/partner-of-a-new-zealander-work-visa" },
          { label: "Dini Görevli Çalışma Vizeleri", url: "https://immigration.govt.nz/visas/religious-worker-work-visa" },
          { label: "Mevsimlik Çalışma Vizeleri (RSE)", url: "https://immigration.govt.nz/visas/recognised-seasonal-employer-limited-visa" },
          { label: "Stajyer Çalışma Vizesi", url: "https://immigration.govt.nz/visas/student-and-trainee-work-visa" },
          { label: "İş Değişim Programı Vizesi (Work Exchange)", url: "https://immigration.govt.nz/visas/work-exchange-scheme-work-visa" },
          { label: "Sömürüye veya Kötü Muameleye Uğrayanlar İçin Çalışma Vizesi", url: "https://immigration.govt.nz/visas/migrant-exploitation-protection-work-visa" },
          { label: "Eğitimi Bitirdikten Sonra Çalışma Vizesi", url: "https://immigration.govt.nz/visas/post-study-work-visa" },
          { label: "Kendi İşinde Çalışma Vizesi (Yatırımcı)", url: "https://www.immigration.govt.nz/visas/business-investor-work-visa" },
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
  {
    slug: "dolandiriciliklardan-korunma",
    title: "Yeni Zelanda'da Dolandırılmamak İçin Rehber",
    summary: "Göçmenlik dolandırıcılığı Yeni Zelanda'da gerçek bir tehdit. İş teklifi, vize vaadi veya danışman seçiminde dikkat etmen gereken temel noktalar burada.",
    accordion: [
      {
        label: "🚩 İş İlanları ve İşveren Dolandırıcılıkları",
        open: true,
        items: [
          {
            label: "İş için ücret veya komisyon istenmesi yasadışıdır",
            content: "Yeni Zelanda'da işverenler, bir iş teklifi karşılığında senden hiçbir şekilde ücret, komisyon veya 'yerleştirme bedeli' alamaz. Böyle bir talepte bulunan biri varsa büyük ihtimalle bir dolandırıcıyla karşı karşıyasın.",
          },
          {
            label: "\"Bağlantılarım var, başvurunu hızlandırırım\" tuzağı",
            content: "Immigration New Zealand hiçbir kişiye veya ajansa öncelikli işlem yetkisi tanımaz. \"İçeride adamım var\" ya da \"sistemi bilirim, vizeni hızlandırırım\" diyen biriyse ya yalan söylüyor ya da dolandırıcı.",
          },
          {
            label: "Konaklama dahil 'paket' tekliflere dikkat",
            content: "Bazı dolandırıcılar iş + konaklama paketleri sunarak fahiş konaklama ücreti keser. İşverenin konaklama sağlaması mümkündür; ancak bu ücretin piyasa rayicini aşmaması ve maaşından kesintinin şeffaf olması gerekir. Şüpheli teklifleri doğrulamadan kabul etme.",
          },
        ],
      },
      {
        label: "🚩 Danışman ve Acente Dolandırıcılıkları",
        items: [
          {
            label: "Sana yalan söylemeni isteyen danışmandan uzak dur",
            content: "Başvuru formunda gerçek dışı bilgi vermenizi ya da belge sahte göstermenizi isteyen bir göçmenlik danışmanı veya acentesiyle çalışmak hem sana hem onlara ciddi hukuki sonuçlar doğurur. Bu yasa dışıdır.",
          },
          {
            label: "Oturum izni garantisi vaat edenler",
            content: "Hiçbir danışman ya da acente sana residence (kalıcı oturum izni) garantisi veremez. Böyle bir vaat eden biri kötü niyetle hareket ediyordur; para ödersen kaybetme ihtimalin yüksektir.",
          },
          {
            label: "Danışman kullanmak zorunlu değildir; ama kullanacaksan lisanslı biri olsun",
            content: "Vize başvurunu kendin yapabilirsin. Yardım alacaksan mutlaka Yeni Zelanda'da lisanslı göçmenlik danışmanı (Licensed Immigration Adviser – LIA) veya sertifikalı bir avukat seç. Lisans sorgulamak için: immigration.govt.nz/tools/immigration-adviser-search",
            url: "https://www.immigration.govt.nz/tools/immigration-adviser-search",
          },
        ],
      },
      {
        label: "🚩 Sahte Web Siteleri ve Ödeme Dolandırıcılıkları",
        items: [
          {
            label: "Resmi Immigration NZ adresi nedir?",
            content: "Immigration New Zealand'a ait her resmi sayfa mutlaka \".immigration.govt.nz\" ile biter. Başka alan adları kullanan siteler sahte olabilir; e-posta adreslerine de dikkat et.",
          },
          {
            label: "Banka havalesiyle ödeme isteği asla resmi değildir",
            content: "Vize başvurusu, sağlık muayenesi veya herhangi bir resmi işlem için senden banka hesabına havale istenmesi kesinlikle resmi bir süreç değildir. Resmi ödemeler yalnızca Immigration NZ'nin kendi sistemi üzerinden kredi/banka kartıyla veya onaylı klinikler aracılığıyla yapılır.",
          },
        ],
      },
      {
        label: "✅ Haklarını Bil, Doğrudan Başvur",
        items: [
          {
            label: "Göçmenler de yerel çalışanlarla aynı haklara sahiptir",
            content: "Yeni Zelanda'da çalışma vizesiyle çalışan göçmenler; asgari ücret, ücretli yıllık izin, hastalık izni ve diğer temel işçi hakları bakımından Yeni Zelandalı çalışanlarla eşit haklara sahiptir. Haklarını kimse elinden alamaz.",
          },
          {
            label: "Şüpheleniyorsan doğrudan yetkililere başvur",
            content: "Dolandırıldığını veya şüpheli bir durumla karşılaştığını düşünüyorsan Immigration New Zealand ile doğrudan iletişime geç ya da consumerprotection.govt.nz/scams adresinden bildiri yap.",
            url: "https://www.consumerprotection.govt.nz/scams",
          },
          {
            label: "📎 Kaynak: Immigration New Zealand – Göçmenlik Dolandırıcılıklarından Korunma",
            url: "https://www.immigration.govt.nz/work/protecting-yourself-from-immigration-scams/",
          },
        ],
      },
    ],
    videos: [],
  },
];
