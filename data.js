// Site içeriğinin tek kaynağı: yeni konu başlığı eklemek için buraya bir obje eklemen yeterli.
// Çevrilebilir metinler { tr, en } formatında; L() fonksiyonu (i18n.js) mevcut dile göre seçer.
const SITE = {
  channelUrl: "https://www.youtube.com/@zelandalıyoruk",
  instagramUrl: "https://www.instagram.com/zelandaliyoruk",
  tiktokUrl: "https://www.tiktok.com/@zelandaliyoruk",
};

const TOPICS = [
  {
    slug: "nasil-gelinir",
    title: { tr: "Yeni Zelanda'ya Nasıl Gelinir", en: "How to Come to New Zealand" },
    summary: {
      tr: "Yeni Zelanda'ya gelmenin yasal yolları: sponsorlu çalışma vizesi, öğrenci vizesi ve diğer seçenekler.",
      en: "Legal ways to come to New Zealand: sponsored work visa, student visa and other options.",
    },
    intro: {
      tr: "Türkiye'den Yeni Zelanda'ya gelmek isteyenler için en sık sorulan soru budur: hangi yol yasal ve gerçekçi? Bu sayfada çalışma tatili vizesinden öğrenci vizesine, sponsorlu iş vizesinden partner vizesine kadar Yeni Zelanda'ya gelmenin farklı yasal yollarını videolarla ve resmi kaynaklarla birlikte bulabilirsin. Amaç seni yönlendirmek değil, hangi seçeneklerin var olduğunu net şekilde göstermek.",
      en: "For anyone thinking about moving from Turkey to New Zealand, the first question is always the same: which path is legal and realistic? On this page you'll find the different legal ways to come to New Zealand, from the working holiday visa to student visas, sponsored work visas to partner visas, explained through videos and linked directly to official sources. The goal isn't to tell you what to do, but to show you clearly what your options are.",
    },
    videos: [
      { id: "Z2fB2UyX0F4", title: "Yeni Zelanda'ya Nasıl Gelinir 6 Yasal Yol!", uploadDate: "2026-02-24T04:49:21-08:00", duration: "PT8M45S" },
    ],
  },
  {
    slug: "vize-sureclari",
    title: { tr: "Vize Türleri & Resmi Süreçler", en: "Visa Types & Official Processes" },
    summary: {
      tr: "Türkiye'den Yeni Zelanda'ya gelmek için ihtiyacın olan resmi bilgiler tek yerde. Başlığa tıkla, doğrudan resmi kaynağa git. Bu sayfa danışmanlık değildir.",
      en: "Everything official you need to come to New Zealand from Turkey, in one place. Click a heading to go straight to the official source. This page is not advice.",
    },
    intro: {
      tr: "Yeni Zelanda vize sistemi, özellikle Türkiye'den başvuranlar için kafa karıştırıcı olabilir: onlarca vize kategorisi, her biri farklı şartlara sahip. Bu sayfa kendi yorumumuzu eklemeden, doğrudan Immigration New Zealand'ın güncel sayfalarına bağlanan bir rehber niteliğinde: Türkiye'ye özel çalışma tatili anlaşmasından tutun, en çok aranan vize türlerine ve başvuru için gereken belgelere kadar.",
      en: "New Zealand's visa system can feel overwhelming, especially for applicants coming from Turkey: dozens of categories, each with its own requirements. This page works as a guide without adding our own interpretation, linking straight to Immigration New Zealand's current pages, from the special Turkey working holiday agreement to the most searched visa types and the documents required to apply.",
    },
    inzWatch: true,
    accordion: [
      {
        label: { tr: "🇹🇷 Türkiye'den Gelenler İçin Özel Bilgiler", en: "🇹🇷 Special Information for People from Turkey" },
        open: true,
        items: [
          {
            label: {
              tr: "Türkiye Çalışma Tatili Vizesi (18-30 yaş arası için özel anlaşma)",
              en: "Turkey Working Holiday Visa (special agreement for ages 18-30)",
            },
            url: "https://www.immigration.govt.nz/visas/turkey-working-holiday-visa/",
          },
          {
            label: {
              tr: "Türkiye vize muafiyeti listesinde değil: NZeTA yetmez, Ziyaretçi Vizesi gerekir",
              en: "Turkey is not on the visa waiver list: NZeTA is not enough, a Visitor Visa is required",
            },
            url: "https://www.immigration.govt.nz/visit/what-you-need-to-visit-new-zealand/visa-waiver-countries-and-territories/",
          },
        ],
      },
      {
        label: { tr: "En Çok Aranan Vize Türleri", en: "Most Searched Visa Types" },
        items: [
          { label: { tr: "Ziyaretçi Vizesi (Visitor Visa)", en: "Visitor Visa" }, url: "https://www.immigration.govt.nz/visas/visitor-visa/" },
          { label: { tr: "Akredite İşveren Çalışma Vizesi (Accredited Employer Work Visa)", en: "Accredited Employer Work Visa" }, url: "https://www.immigration.govt.nz/visas/accredited-employer-work-visa/" },
          { label: { tr: "Nitelikli Göçmen Kalıcı Oturum Vizesi (Skilled Migrant Category)", en: "Skilled Migrant Category Resident Visa" }, url: "https://www.immigration.govt.nz/visas/skilled-migrant-category-resident-visa/" },
          { label: { tr: "Öğrenci Vizesi (Fee Paying Student Visa)", en: "Fee Paying Student Visa" }, url: "https://www.immigration.govt.nz/visas/fee-paying-student-visa/" },
          { label: { tr: "Partner Vizesi (New Zealand vatandaşı/residenti ile)", en: "Partner Visa (with a New Zealand citizen/resident)" }, url: "https://www.immigration.govt.nz/visas/partner-of-a-new-zealander-resident-visa/" },
        ],
      },
      {
        label: { tr: "Çalışma Vizesi Kategorileri (Immigration NZ'nin Tam Listesi)", en: "Work Visa Categories (Immigration NZ's Full List)" },
        items: [
          { label: { tr: "Akredite İşveren Çalışma Vizeleri", en: "Accredited employer work visas" }, url: "https://immigration.govt.nz/visas/accredited-employer-work-visa" },
          { label: { tr: "Ülkeye Özel Çalışma Vizeleri (Çin, Japonya, Kore, Vietnam vb.)", en: "Country-specific work visas (China, Japan, Korea, Vietnam etc.)" }, url: "https://www.immigration.govt.nz/work/visas-for-working-in-new-zealand/" },
          { label: { tr: "Ev İçi Çalışan Vizesi (Diplomat Personeli)", en: "Domestic worker visa (diplomatic staff)" }, url: "https://immigration.govt.nz/visas/domestic-staff-of-a-diplomat-work-visa" },
          { label: { tr: "Sanatçı, Yetenek veya Özel Amaçlı Çalışma Vizeleri", en: "Entertainers, talent or specific purpose work visas" }, url: "https://immigration.govt.nz/visas/entertainers-work-visa" },
          { label: { tr: "Balıkçı Mürettebatı Çalışma Vizesi", en: "Fishing worker visa" }, url: "https://immigration.govt.nz/visas/fishing-crew-work-visa" },
          { label: { tr: "Partner Çalışma Vizeleri", en: "Partner work visas" }, url: "https://immigration.govt.nz/visas/partner-of-a-new-zealander-work-visa" },
          { label: { tr: "Dini Görevli Çalışma Vizeleri", en: "Religious worker visas" }, url: "https://immigration.govt.nz/visas/religious-worker-work-visa" },
          { label: { tr: "Mevsimlik Çalışma Vizeleri (RSE)", en: "Seasonal work visas (RSE)" }, url: "https://immigration.govt.nz/visas/recognised-seasonal-employer-limited-visa" },
          { label: { tr: "Stajyer Çalışma Vizesi", en: "Trainee work visa" }, url: "https://immigration.govt.nz/visas/student-and-trainee-work-visa" },
          { label: { tr: "İş Değişim Programı Vizesi (Work Exchange)", en: "Work exchange visa" }, url: "https://immigration.govt.nz/visas/work-exchange-scheme-work-visa" },
          { label: { tr: "Sömürüye veya Kötü Muameleye Uğrayanlar İçin Çalışma Vizesi", en: "Work visa for people who have been exploited or mistreated" }, url: "https://immigration.govt.nz/visas/migrant-exploitation-protection-work-visa" },
          { label: { tr: "Eğitimi Bitirdikten Sonra Çalışma Vizesi", en: "Working after you finish study" }, url: "https://immigration.govt.nz/visas/post-study-work-visa" },
          { label: { tr: "Kendi İşinde Çalışma Vizesi (Yatırımcı)", en: "Working in your own business (investor)" }, url: "https://www.immigration.govt.nz/visas/business-investor-work-visa" },
        ],
      },
      {
        label: { tr: "Genel Kategori Sayfaları (tüm alt seçenekler)", en: "General Category Pages (all sub-options)" },
        items: [
          { label: { tr: "Çalışma Vizeleri: tüm seçenekler", en: "Work visas: all options" }, url: "https://www.immigration.govt.nz/work/visas-for-working-in-new-zealand/" },
          { label: { tr: "Öğrenci Vizeleri: tüm seçenekler", en: "Student visas: all options" }, url: "https://www.immigration.govt.nz/study/study-visas/" },
          { label: { tr: "Ziyaretçi Vizeleri: tüm seçenekler", en: "Visitor visas: all options" }, url: "https://www.immigration.govt.nz/visit/" },
          { label: { tr: "Oturum Vizeleri: tüm seçenekler", en: "Resident visas: all options" }, url: "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/" },
        ],
      },
      {
        label: { tr: "Başvuru İçin Hazırlık: Belgeler ve Kanıtlar", en: "Preparing to Apply: Documents & Evidence" },
        items: [
          { label: { tr: "Başvuruda İstenen Belgeler ve Kanıtlar (genel bakış)", en: "Evidence and documents required (overview)" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/" },
          { label: { tr: "Destekleyici Belgelerin İngilizce Tercümesi", en: "Providing English translations of supporting documents" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/providing-english-translations-of-supporting-documents/" },
          { label: { tr: "Sağlık Şartları", en: "Health requirements" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/health-requirements/" },
          { label: { tr: "Ziyaret veya Çalışma İçin Gerçek Niyet Şartı", en: "Genuine intentions to visit or work in New Zealand" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/genuine-intentions-to-visit-or-work-in-new-zealand/" },
          { label: { tr: "Eğitim İçin Gerçek Niyet Şartı", en: "Genuine intentions to study in New Zealand" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/genuine-intentions-to-study-in-new-zealand/" },
          { label: { tr: "Karakter Şartları, Üçüncü Taraf Kontrolleri ve Adli Sicil Kaydı", en: "Character requirements, third party checks and police certificates" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/character-requirements-third-party-checks-and-police-certificates/" },
          { label: { tr: "İngilizce Dil Şartları", en: "English language requirements" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/english-language-requirements/" },
          { label: { tr: "Yatırımcı ve Emeklilik Vizeleri İçin Kabul Edilebilir Yatırımlar", en: "Acceptable investments for investor and retirement visas" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/acceptable-investments-for-investor-and-retirement-visas/" },
          { label: { tr: "Öğrenci Bütçe/Fon Şartları", en: "Student fund requirements" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/student-fund-requirements/" },
          { label: { tr: "Kimlik Bilgileri", en: "Identity information" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/identity-information/" },
          { label: { tr: "Başvuruda Yanlış veya Yanıltıcı Bilgi Vermenin Sonuçları", en: "Giving false or misleading information in your application" }, url: "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/giving-false-or-misleading-information-in-your-application/" },
        ],
      },
    ],
    videos: [],
  },
  {
    slug: "maas-vergi",
    title: { tr: "Maaş & Vergi Sistemi", en: "Salary & Tax System" },
    summary: {
      tr: "Yeni Zelanda'da maaşlar, vergi sistemi ve çalışma hayatı hakkında gerçekler.",
      en: "The realities of salaries, the tax system and working life in New Zealand.",
    },
    intro: {
      tr: "Yeni Zelanda'da ne kadar kazanılır, vergi sistemi nasıl işler, eline geçen maaş beklediğinden ne kadar farklı olur? Bu sayfada, Türkiye'den gelen birinin gözünden Yeni Zelanda'daki maaş ve vergi düzenine dair gerçekçi bir bakış bulacaksın.",
      en: "How much do people actually earn in New Zealand, how does the tax system work, and how different is your take-home pay from what you expect? This page offers a realistic look at salaries and taxes in New Zealand, from the perspective of someone who moved there from Turkey.",
    },
    videos: [
      { id: "gZIgX_0Ny9g", title: "Yeni Zelanda'da Çalışma Hayatı Maaşlar ve Vergi Sistemi!", uploadDate: "2026-01-21T04:10:27-08:00", duration: "PT4M37S" },
    ],
  },
  {
    slug: "gunluk-hayat",
    title: { tr: "Günlük Hayat Gerçekleri", en: "Everyday Life Realities" },
    summary: {
      tr: "Yeni Zelanda'da yaşamın gündelik gerçekleri: kimsenin anlatmadığı detaylar.",
      en: "The everyday realities of life in New Zealand: the details nobody tells you.",
    },
    intro: {
      tr: "Vize ve maaş kadar önemli ama çok daha az konuşulan bir konu var: Yeni Zelanda'da günlük hayat gerçekten nasıl? Ev bulmaktan markete, kültürel farklardan beklenmedik zorluklara kadar, kimsenin sosyal medyada göstermediği ama herkesin bir noktada karşılaştığı gerçekleri bu sayfada bulabilirsin.",
      en: "As important as visas and salaries, but far less talked about: what is everyday life in New Zealand actually like? From finding a home to grocery shopping, cultural differences to unexpected challenges, this page covers the realities nobody shows on social media but everyone eventually runs into.",
    },
    videos: [
      { id: "-PftP3IlhOs", title: "Yeni Zelanda'da Hayat Nasıl? (Yeni Zelanda Gerçekleri)", uploadDate: "2026-01-16T09:30:00-08:00", duration: "PT17M59S" },
      { id: "q0rccS7Rdek", title: "Yeni Zelanda'da Ev Bulma: Gerçek Süreç ve Hatalar (1. Bölüm)", uploadDate: "2026-03-13T06:40:21-07:00", duration: "PT4M11S" },
      { id: "fGgNF-I6zYc", title: "Yeni Zelanda'da Ramazan Atmosferi (Türklerle Karşılaştık)", uploadDate: "2026-02-16T19:45:08-08:00", duration: "PT7M20S" },
    ],
  },
  {
    slug: "isci-haklari",
    title: { tr: "İşçi Hakları", en: "Worker Rights" },
    summary: {
      tr: "Yeni Zelanda'da çalışma vizesiyle çalışırken haklarını ve işvereninin sorumluluklarını bil. Başlığa tıkla, altındaki konulardan resmi sayfaya git.",
      en: "Know your rights and your employer's responsibilities while working in New Zealand on a work visa. Click the heading, then any topic to go to the official page.",
    },
    intro: {
      tr: "Çalışma vizesiyle Yeni Zelanda'da çalışmaya başladığında, işverenin sana karşı yasal sorumlulukları var, ve senin de bilmen gereken haklar var. Bu sayfa, göçmen işçilerin haklarını ve olası sorun durumlarında nereye başvurulacağını doğrudan resmi kaynaklarla anlatıyor.",
      en: "Once you start working in New Zealand on a work visa, your employer has legal responsibilities toward you, and there are rights you should know about. This page explains migrant workers' rights and where to turn if something goes wrong, linking directly to official sources.",
    },
    accordion: [
      {
        label: { tr: "İşçi Hakları Konuları", en: "Worker Rights Topics" },
        open: true,
        items: [
          {
            label: { tr: "Kurallar: Yurt Dışından Gelen Çalışan Olarak Haklarınız", en: "Rules: Your Rights as a Worker from Overseas" },
            url: "https://www.immigration.govt.nz/work/worker-rights/your-rights-as-a-worker-from-overseas/",
          },
          {
            label: { tr: "Çalışma Sorumluluğu: İşvereniniz AEWV'de Ne Yapmalı", en: "Employer Responsibility: What Your Employer Must Do on an AEWV" },
            url: "https://www.immigration.govt.nz/work/worker-rights/what-your-employer-must-do-when-they-hire-you-on-an-aewv/",
          },
          {
            label: { tr: "Çalışan Hakları ve Sorumlulukları", en: "Employee Rights and Responsibilities" },
            url: "https://www.employment.govt.nz/starting-employment/rights-and-responsibilities/employee-rights-and-responsibilities",
          },
          {
            label: { tr: "İhmaller: İş Yerinde Destek ve Sorun Bildirme", en: "Problems: Support in the Workplace and Reporting Issues" },
            url: "https://www.immigration.govt.nz/work/worker-rights/support-in-the-workplace/",
          },
          {
            label: { tr: "Göçmen Sömürüsü", en: "Migrant Exploitation" },
            url: "https://www.employment.govt.nz/resolving-problems/migrant-exploitation",
          },
          {
            label: { tr: "Göçmen Sömürüsünden Korunma Çalışma Vizesi", en: "Migrant Exploitation Protection Work Visa" },
            url: "https://www.immigration.govt.nz/visas/migrant-exploitation-protection-work-visa",
          },
        ],
      },
    ],
    videos: [],
  },
  {
    slug: "gezi-kesif",
    title: { tr: "Gezi & Keşif", en: "Travel & Exploration" },
    summary: {
      tr: "Yeni Zelanda'nın doğası ve gezilecek yerleri: kanaldaki keşif videoları.",
      en: "New Zealand's nature and places to visit: exploration videos from the channel.",
    },
    intro: {
      tr: "Yeni Zelanda sadece vize ve iş süreçlerinden ibaret değil, dünyanın en etkileyici doğal manzaralarından bazılarına da ev sahipliği yapıyor. Bu sayfada kanaldaki gezi ve keşif videolarını bulabilir, ülkenin bu tarafını da tanıyabilirsin.",
      en: "New Zealand isn't just about visas and work, it's also home to some of the most striking natural landscapes in the world. This page brings together the channel's travel and exploration videos, so you can get to know this side of the country too.",
    },
    videos: [
      { id: "C0Nbab1mtu8", title: "Yeni Zelanda Waitomo Mağaraları: Karanlığın İçindeki Işıklar!", uploadDate: "2026-02-07T13:38:46-08:00", duration: "PT6M23S" },
      { id: "krkUb7Lgorg", title: "Yeni Zelanda'da Sessizliğin İçinde 🐦 | Katikati Bird Gardens", uploadDate: "2026-02-22T06:22:15-08:00", duration: "PT5M34S" },
    ],
  },
  {
    slug: "dolandiriciliklardan-korunma",
    title: { tr: "Yeni Zelanda'da Dolandırılmamak İçin Rehber", en: "Guide to Avoiding Scams in New Zealand" },
    summary: {
      tr: "Göçmenlik dolandırıcılığı Yeni Zelanda'da gerçek bir tehdit. İş teklifi, vize vaadi veya danışman seçiminde dikkat etmen gereken temel noktalar burada.",
      en: "Immigration scams are a real threat in New Zealand. Here are the key things to watch for with job offers, visa promises, or choosing an adviser.",
    },
    intro: {
      tr: "Yeni Zelanda'ya yeni gelenler, dolandırıcılar için kolay hedef haline gelebiliyor: sahte iş teklifleri, yetkisiz danışmanlar, sahte web siteleri. Bu sayfa, en sık karşılaşılan dolandırıcılık türlerini ve kendini nasıl koruyacağını, gerçek örneklerle anlatıyor.",
      en: "Newcomers to New Zealand can easily become targets for scammers: fake job offers, unlicensed advisers, fraudulent websites. This page walks through the most common types of scams and how to protect yourself, with real examples.",
    },
    accordion: [
      {
        label: { tr: "🚩 İş İlanları ve İşveren Dolandırıcılıkları", en: "🚩 Job Listing and Employer Scams" },
        open: true,
        items: [
          {
            label: { tr: "İş için ücret veya komisyon istenmesi yasadışıdır", en: "Asking for a fee or commission for a job is illegal" },
            content: {
              tr: "Yeni Zelanda'da işverenler, bir iş teklifi karşılığında senden hiçbir şekilde ücret, komisyon veya 'yerleştirme bedeli' alamaz. Böyle bir talepte bulunan biri varsa büyük ihtimalle bir dolandırıcıyla karşı karşıyasın.",
              en: "In New Zealand, employers cannot legally charge you a fee, commission, or 'placement charge' in exchange for a job offer. If someone asks for this, you're most likely dealing with a scammer.",
            },
          },
          {
            label: { tr: "\"Bağlantılarım var, başvurunu hızlandırırım\" tuzağı", en: "The \"I have connections, I'll speed up your application\" trap" },
            content: {
              tr: "Immigration New Zealand hiçbir kişiye veya ajansa öncelikli işlem yetkisi tanımaz. \"İçeride adamım var\" ya da \"sistemi bilirim, vizeni hızlandırırım\" diyen biriyse ya yalan söylüyor ya da dolandırıcı.",
              en: "Immigration New Zealand does not give any person or agency priority-processing authority. Anyone who says \"I have a contact inside\" or \"I know the system, I'll fast-track your visa\" is either lying or scamming you.",
            },
          },
          {
            label: { tr: "Konaklama dahil 'paket' tekliflere dikkat", en: "Be careful with 'package' offers that include accommodation" },
            content: {
              tr: "Bazı dolandırıcılar iş + konaklama paketleri sunarak fahiş konaklama ücreti keser. İşverenin konaklama sağlaması mümkündür; ancak bu ücretin piyasa rayicini aşmaması ve maaşından kesintinin şeffaf olması gerekir. Şüpheli teklifleri doğrulamadan kabul etme.",
              en: "Some scammers offer job + accommodation packages and then charge excessive accommodation fees. An employer can provide accommodation, but the cost must not exceed market rate and any deduction from your pay must be transparent. Don't accept suspicious offers without verifying them.",
            },
          },
        ],
      },
      {
        label: { tr: "🚩 Danışman ve Acente Dolandırıcılıkları", en: "🚩 Adviser and Agent Scams" },
        items: [
          {
            label: { tr: "Sana yalan söylemeni isteyen danışmandan uzak dur", en: "Stay away from an adviser who asks you to lie" },
            content: {
              tr: "Başvuru formunda gerçek dışı bilgi vermenizi ya da belge sahte göstermenizi isteyen bir göçmenlik danışmanı veya acentesiyle çalışmak hem sana hem onlara ciddi hukuki sonuçlar doğurur. Bu yasa dışıdır.",
              en: "Working with an immigration adviser or agent who asks you to give false information on your application, or to falsify documents, carries serious legal consequences for both you and them. This is illegal.",
            },
          },
          {
            label: { tr: "Oturum izni garantisi vaat edenler", en: "Anyone who guarantees you residence" },
            content: {
              tr: "Hiçbir danışman ya da acente sana residence (kalıcı oturum izni) garantisi veremez. Böyle bir vaat eden biri kötü niyetle hareket ediyordur; para ödersen kaybetme ihtimalin yüksektir.",
              en: "No adviser or agent can guarantee you residence. Anyone who makes this promise is acting in bad faith. If you pay them, you're likely to lose your money.",
            },
          },
          {
            label: { tr: "Danışman kullanmak zorunlu değildir; ama kullanacaksan lisanslı biri olsun", en: "Using an adviser isn't mandatory, but if you do, make sure they're licensed" },
            content: {
              tr: "Vize başvurunu kendin yapabilirsin. Yardım alacaksan mutlaka Yeni Zelanda'da lisanslı göçmenlik danışmanı (Licensed Immigration Adviser – LIA) veya sertifikalı bir avukat seç. Lisansını Immigration Advisers Authority (IAA) üzerinden doğrulayabilirsin.",
              en: "You can apply for your visa yourself. If you want help, always choose a Licensed Immigration Adviser (LIA) or a qualified lawyer in New Zealand. You can verify their licence through the Immigration Advisers Authority (IAA).",
            },
            url: "https://www.iaa.govt.nz/for-migrants/working-with-a-licensed-immigration-adviser/",
          },
        ],
      },
      {
        label: { tr: "🚩 Sahte Web Siteleri ve Ödeme Dolandırıcılıkları", en: "🚩 Fake Websites and Payment Scams" },
        items: [
          {
            label: { tr: "Resmi Immigration NZ adresi nedir?", en: "What is the official Immigration NZ address?" },
            content: {
              tr: "Immigration New Zealand'a ait her resmi sayfa mutlaka \".immigration.govt.nz\" ile biter. Başka alan adları kullanan siteler sahte olabilir; e-posta adreslerine de dikkat et.",
              en: "Every official Immigration New Zealand page ends in \".immigration.govt.nz\". Sites using other domains may be fake. Pay attention to email addresses too.",
            },
          },
          {
            label: { tr: "Banka havalesiyle ödeme isteği asla resmi değildir", en: "A request for bank transfer payment is never official" },
            content: {
              tr: "Vize başvurusu, sağlık muayenesi veya herhangi bir resmi işlem için senden banka hesabına havale istenmesi kesinlikle resmi bir süreç değildir. Resmi ödemeler yalnızca Immigration NZ'nin kendi sistemi üzerinden kredi/banka kartıyla veya onaylı klinikler aracılığıyla yapılır.",
              en: "Being asked to transfer money to a bank account for a visa application, medical exam, or any official process is never a legitimate procedure. Official payments are only made through Immigration NZ's own system by credit/debit card, or through approved clinics.",
            },
          },
        ],
      },
      {
        label: { tr: "✅ Haklarını Bil, Doğrudan Başvur", en: "✅ Know Your Rights, Apply Directly" },
        items: [
          {
            label: { tr: "Göçmenler de yerel çalışanlarla aynı haklara sahiptir", en: "Migrants have the same rights as local workers" },
            content: {
              tr: "Yeni Zelanda'da çalışma vizesiyle çalışan göçmenler; asgari ücret, ücretli yıllık izin, hastalık izni ve diğer temel işçi hakları bakımından Yeni Zelandalı çalışanlarla eşit haklara sahiptir. Haklarını kimse elinden alamaz.",
              en: "Migrants working in New Zealand on a work visa have the same rights as New Zealand workers when it comes to minimum wage, paid annual leave, sick leave, and other basic employment rights. Nobody can take these rights away from you.",
            },
          },
          {
            label: { tr: "Şüpheleniyorsan doğrudan yetkililere başvur", en: "If you suspect something, go straight to the authorities" },
            content: {
              tr: "Dolandırıldığını veya şüpheli bir durumla karşılaştığını düşünüyorsan Immigration New Zealand ile doğrudan iletişime geç ya da consumerprotection.govt.nz/scams adresinden bildiri yap.",
              en: "If you think you've been scammed or have encountered something suspicious, contact Immigration New Zealand directly, or report it at consumerprotection.govt.nz/scams.",
            },
            url: "https://www.consumerprotection.govt.nz/scams",
          },
          {
            label: { tr: "📎 Kaynak: Immigration New Zealand – Göçmenlik Dolandırıcılıklarından Korunma", en: "📎 Source: Immigration New Zealand – Protecting Yourself from Immigration Scams" },
            url: "https://www.immigration.govt.nz/work/protecting-yourself-from-immigration-scams/",
          },
        ],
      },
    ],
    videos: [],
  },
];
