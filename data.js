// Site içeriğinin tek kaynağı: yeni konu başlığı eklemek için buraya bir obje eklemen yeterli.
// Çevrilebilir metinler { tr, en } formatında; L() fonksiyonu (i18n.js) mevcut dile göre seçer.
const SITE = {
  channelUrl: "https://www.youtube.com/@zelandalıyoruk",
  instagramUrl: "https://www.instagram.com/zelandaliyoruk",
  tiktokUrl: "https://www.tiktok.com/@zelandaliyoruk",
  // Rehber içeriği (data.js) her önemli güncellemede bu tarihi de güncelle.
  // Konu sayfalarında "Son güncelleme" olarak gösterilir.
  contentUpdated: "2026-08-30",
};

const TOPICS = [
  {
    slug: "nasil-gelinir",
    title: { tr: "Yeni Zelanda'ya Nasıl Gelinir", en: "How to Come to New Zealand" },
    summary: {
      tr: "Yeni Zelanda'ya gelmenin yasal yolları: sponsorlu çalışma vizesi, öğrenci vizesi ve diğer seçenekler.",
      en: "Legal ways to come to New Zealand from Turkey: sponsored work visa, student visa, partner visa and other realistic options explained.",
    },
    intro: {
      tr: `Türkiye'den Yeni Zelanda'ya gelmek isteyenler için en sık sorulan soru budur: hangi yol yasal ve gerçekçi? Genel olarak dört ana yol var.<br><br><strong>Çalışma Tatili Vizesi:</strong> Türkiye ile Yeni Zelanda arasında özel bir anlaşma var. 18-30 yaş arasındakiler bu vizeyle bir yıla kadar çalışıp seyahat edebiliyor.<br><br><strong>Öğrenci Vizesi:</strong> Yeni Zelanda'da tanınan bir okula kayıt olarak alınıyor. Bazı öğrenci vizeleri sınırlı çalışma hakkı da tanıyor, mezuniyetten sonra çalışma vizesine geçiş yolu da var.<br><br><strong>Sponsorlu Çalışma Vizesi (AEWV):</strong> Yeni Zelanda'da akredite olmuş bir işverenden iş teklifi alarak başvurulan yol. İşveren sponsorluğu şart.<br><br><strong>Partner Vizesi:</strong> Yeni Zelanda vatandaşı veya kalıcı oturum sahibi biriyle ciddi ve kanıtlanabilir bir ilişkisi olanlar için.<br><br>Her yolun kendi belgeleri ve şartları var. Hangisinin sana uyduğunu görmek için <a href="/t/vize-sureclari.html">Vize Türleri ve Resmi Süreçler</a> sayfasına bakabilirsin, orada her yol için resmi kaynaklara da ulaşırsın. Amaç seni belirli bir yola yönlendirmek değil, hangi seçeneklerin var olduğunu net şekilde göstermek. Nihai ve güncel şartlar için her zaman Immigration New Zealand'ın resmi sayfaları esas alınmalı.`,
      en: `For anyone thinking about moving from Turkey to New Zealand, the first question is always the same: which path is legal and realistic? Broadly, there are four main paths.<br><br><strong>Working Holiday Visa:</strong> Turkey has a special agreement with New Zealand. People aged 18-30 can work and travel on this visa for up to a year.<br><br><strong>Student Visa:</strong> Obtained by enrolling at a recognised New Zealand school. Some student visas also allow limited work rights, with a pathway to a work visa after graduation.<br><br><strong>Sponsored Work Visa (AEWV):</strong> Applied for with a job offer from an accredited employer in New Zealand. Employer sponsorship is required.<br><br><strong>Partner Visa:</strong> For people in a genuine, evidenced relationship with a New Zealand citizen or resident.<br><br>Each route has its own documents and requirements. Below you'll find more detail on each path, along with official sources. The goal isn't to steer you toward one path, but to show clearly what options exist. For final, up-to-date requirements, always check Immigration New Zealand's official pages.`,
    },
    accordion: [
      {
        label: { tr: "🎒 Çalışma Tatili Vizesi (Working Holiday)", en: "🎒 Working Holiday Visa" },
        open: true,
        items: [
          {
            label: { tr: "Kimler başvurabilir?", en: "Who can apply?" },
            content: {
              tr: "Türkiye Çalışma Tatili Vizesi, 18-30 yaş arasındaki Türk vatandaşları için ayrılmış özel bir kota kapsamında sunuluyor. Yılda belirli sayıda kontenjan açılıyor ve başvurular buna göre değerlendiriliyor; güncel kontenjan ve başvuru dönemini resmi sayfadan kontrol etmen gerekir.",
              en: "The Turkey Working Holiday Visa is offered under a special annual quota reserved for Turkish citizens aged 18-30. A limited number of places open each year and applications are assessed accordingly; check the official page for the current quota and application window.",
            },
          },
          {
            label: { tr: "Bu vizeyle ne yapabilirsin?", en: "What can you do on this visa?" },
            content: {
              tr: "Bu vizeyle Yeni Zelanda'da bir işverene bağlı kalmadan çalışabilir, seyahat edebilir ve genelde 3 aya kadar kısa süreli bir eğitim/kurs alabilirsin. Vizenin süresi ve tam koşulları resmi sayfada belirtiliyor, bu koşullar zamanla değişebilir.",
              en: "On this visa you can work in New Zealand without being tied to one employer, travel freely, and generally study a short course of up to 3 months. The exact duration and conditions are listed on the official page and can change over time.",
            },
          },
          {
            label: { tr: "Sonrasında ne olur?", en: "What happens afterwards?" },
            content: {
              tr: "Çalışma Tatili Vizesi kalıcı bir yol değildir, süresi dolunca ülkeden ayrılman gerekir. Yeni Zelanda'da kalmayı düşünüyorsan bu süre içinde bir işveren bulup sponsorlu çalışma vizesine (AEWV) geçiş yapmayı ya da öğrenci vizesiyle devam etmeyi değerlendirebilirsin.",
              en: "The Working Holiday Visa isn't a permanent pathway, you need to leave once it expires. If you're considering staying longer, you can use this time to find an employer and transition to a sponsored work visa (AEWV), or continue on a student visa.",
            },
            url: "https://www.immigration.govt.nz/visas/turkey-working-holiday-visa/",
          },
        ],
      },
      {
        label: { tr: "🎓 Öğrenci Vizesi", en: "🎓 Student Visa" },
        items: [
          {
            label: { tr: "Tanınan bir okula kayıt şartı", en: "Requirement to enrol at a recognised school" },
            content: {
              tr: "Öğrenci vizesi almak için Yeni Zelanda'da NZQA onaylı, tanınan bir eğitim kurumundan kabul almış olman gerekiyor. Kurs süresi, okulun türü (üniversite, politeknik, dil okulu) ve masraf gösterme şartı vize koşullarını doğrudan etkiliyor.",
              en: "To get a student visa you need an offer of place from an NZQA-approved, recognised education provider in New Zealand. Course length, the type of institution (university, polytechnic, language school), and proof-of-funds requirements all directly affect your visa conditions.",
            },
          },
          {
            label: { tr: "Çalışma hakkı sınırlı olabilir", en: "Work rights may be limited" },
            content: {
              tr: "Bazı öğrenci vizeleri haftada belirli saate kadar çalışma izni tanır, bazı kısa kurslarda ise çalışma hakkı hiç yoktur. Bu tamamen kayıtlı olduğun kursun türüne ve seviyesine bağlıdır, başvurmadan önce mutlaka kendi durumun için resmi sayfadan kontrol et.",
              en: "Some student visas allow work up to a set number of hours per week, while some short courses carry no work rights at all. This depends entirely on the type and level of course you're enrolled in, always check the official page for your specific situation before applying.",
            },
          },
          {
            label: { tr: "Mezuniyet sonrası çalışma yolu", en: "Post-study work pathway" },
            content: {
              tr: "Belirli seviyedeki bir programı tamamladıktan sonra Post-Study Work Visa'ya başvurarak Yeni Zelanda'da çalışmaya devam edebilirsin. Bu, öğrenci vizesinden sponsorlu çalışma vizesine geçişte en sık kullanılan köprülerden biri.",
              en: "After completing a qualifying programme at a certain level, you can apply for a Post-Study Work Visa to continue working in New Zealand. This is one of the most common bridges from a student visa to a sponsored work visa.",
            },
            url: "https://www.immigration.govt.nz/visas/post-study-work-visa",
          },
          {
            label: { tr: "📎 Kaynak: Öğrenci Vizeleri (Immigration NZ)", en: "📎 Source: Study Visas (Immigration NZ)" },
            url: "https://www.immigration.govt.nz/study/study-visas/",
          },
        ],
      },
      {
        label: { tr: "💼 Sponsorlu Çalışma Vizesi (AEWV)", en: "💼 Sponsored Work Visa (AEWV)" },
        items: [
          {
            label: { tr: "Süreç üç aşamalıdır", en: "The process has three stages" },
            content: {
              tr: "AEWV başvurusu üç ayrı aşamadan oluşur: önce işveren Immigration NZ nezdinde akredite olur, sonra pozisyon için bir \"job check\" yapılır, en son sen kendi başvurunu yaparsın. Yani bu vizeye sadece sen başvuramazsın, işverenin de kendi tarafındaki adımları tamamlamış olması gerekir.",
              en: "An AEWV application has three separate stages: first the employer becomes accredited with Immigration NZ, then the role goes through a \"job check\", and finally you submit your own application. You can't apply for this visa alone, your employer also has to complete their side of the process.",
            },
          },
          {
            label: { tr: "İşverenin akredite olması şart", en: "The employer must be accredited" },
            content: {
              tr: "Sana iş teklifi yapan işverenin Immigration NZ tarafından akredite edilmiş olması gerekiyor. Bir işverenin akreditasyonu olup olmadığını başvurmadan önce doğrulaman, olası dolandırıcılık veya usulsüz teklifleri elemede önemli bir adım.",
              en: "The employer offering you a job needs to be accredited with Immigration NZ. Verifying an employer's accreditation status before you apply is an important step in filtering out scams or non-compliant offers.",
            },
            url: "https://www.immigration.govt.nz/work/worker-rights/what-your-employer-must-do-when-they-hire-you-on-an-aewv/",
          },
          {
            label: { tr: "Maaş eşiği zamanla değişir", en: "The pay threshold changes over time" },
            content: {
              tr: "AEWV'nin belirli bir asgari maaş eşiğinin üzerinde ödeme yapılmasını şart koştuğu roller var. Bu eşik zaman zaman güncellendiği için burada kesin bir rakam vermek yanıltıcı olur, güncel eşiği her zaman resmi sayfadan kontrol et.",
              en: "Some AEWV roles require pay above a set minimum threshold. Because this threshold is updated from time to time, quoting an exact figure here would be misleading, always check the current threshold on the official page.",
            },
            url: "https://immigration.govt.nz/visas/accredited-employer-work-visa",
          },
        ],
      },
      {
        label: { tr: "❤️ Partner Vizesi", en: "❤️ Partner Visa" },
        items: [
          {
            label: { tr: "İlişkinin \"gerçek ve istikrarlı\" olduğunu kanıtlaman gerekir", en: "You need to prove the relationship is \"genuine and stable\"" },
            content: {
              tr: "Bu vize, Yeni Zelanda vatandaşı veya kalıcı oturum sahibi biriyle evli, sivil birlikte ya da fiilen birlikte yaşayan (de facto) bir ilişkin varsa değerlendirilir. Immigration NZ, ilişkinin gerçekliğini ortak kira sözleşmesi, banka hesabı, fotoğraflar, tanıklık mektupları gibi somut kanıtlarla değerlendirir.",
              en: "This visa is considered if you're married to, in a civil union with, or in a de facto relationship with a New Zealand citizen or resident. Immigration NZ assesses the genuineness of the relationship using concrete evidence like a joint tenancy agreement, shared bank account, photos, and letters of support.",
            },
          },
          {
            label: { tr: "Çalışma ve oturum izni versiyonları var", en: "There are both work and resident visa versions" },
            content: {
              tr: "Partner vizesi hem geçici bir çalışma vizesi hem de kalıcı oturum izni (residence) olarak sunulabiliyor, hangisine uygun olduğun ilişkinin süresine ve durumuna göre değişir. İkisinin de kendi belge ve kanıt şartları var.",
              en: "A partner visa can be either a temporary work visa or a permanent residence visa, which one you qualify for depends on the length and status of your relationship. Each has its own document and evidence requirements.",
            },
            url: "https://www.immigration.govt.nz/visas/partner-of-a-new-zealander-resident-visa/",
          },
        ],
      },
      {
        label: { tr: "✅ Hangi Yol Sana Uygun Olabilir?", en: "✅ Which Path Might Suit You?" },
        items: [
          {
            label: { tr: "Kısa süreli deneyimlemek istiyorsan", en: "If you want a short-term experience first" },
            content: {
              tr: "18-30 yaş arasındaysan ve önce ülkeyi görüp deneyimlemek istiyorsan Çalışma Tatili Vizesi en hızlı ve en az bağlayıcı yoldur, iş bulmak için işveren sponsorluğu beklemene gerek yoktur.",
              en: "If you're 18-30 and want to see and experience the country first, the Working Holiday Visa is the fastest and least binding route, you don't need to wait for employer sponsorship to find work.",
            },
          },
          {
            label: { tr: "Belirli bir mesleğe geçiş planlıyorsan", en: "If you're planning a career-focused transition" },
            content: {
              tr: "Yeni Zelanda'da tanınan bir alanda eğitim almak ve mezuniyet sonrası kalıcı bir çalışma yoluna geçmek istiyorsan, Öğrenci Vizesi → Post-Study Work Visa → AEWV/residence zinciri en yaygın izlenen yoldur.",
              en: "If you want to study in a recognised field in New Zealand and move toward a lasting work pathway after graduating, the Student Visa → Post-Study Work Visa → AEWV/residence chain is the most commonly followed route.",
            },
          },
          {
            label: { tr: "Zaten bir iş teklifin varsa", en: "If you already have a job offer" },
            content: {
              tr: "Akredite bir işverenden somut bir iş teklifin varsa AEWV en doğrudan yoldur. Teklifi kabul etmeden önce işverenin gerçekten akredite olduğunu ve senden hiçbir ücret istemediğini mutlaka doğrula.",
              en: "If you already have a concrete job offer from an accredited employer, the AEWV is the most direct route. Before accepting, always verify the employer is genuinely accredited and isn't asking you for any fee.",
            },
          },
          {
            label: { tr: "Bu sayfa bir tavsiye değildir", en: "This page is not advice" },
            content: {
              tr: "Yukarıdakiler genel bir yönlendirme amaçlıdır, senin özel durumun için resmi ve güncel şartları her zaman Immigration New Zealand'ın kendi sayfalarından teyit et. Ciddi bir belirsizlik varsa lisanslı bir göçmenlik danışmanına danış.",
              en: "The above is general orientation only, always confirm the official and current requirements for your specific situation on Immigration New Zealand's own pages. If there's serious uncertainty, consult a Licensed Immigration Adviser.",
            },
            url: "https://www.iaa.govt.nz/for-migrants/working-with-a-licensed-immigration-adviser/",
          },
        ],
      },
    ],
    videos: [],
    related: ["vize-sureclari", "maas-vergi", "gunluk-hayat"],
  },
  {
    slug: "vize-sureclari",
    title: { tr: "Vize Türleri & Resmi Süreçler", en: "Visa Types & Official Processes" },
    summary: {
      tr: "Türkiye'den Yeni Zelanda'ya gelmek için ihtiyacın olan resmi bilgiler tek yerde. Başlığa tıkla, resmi kaynağa git. Bu sayfa danışmanlık değildir.",
      en: "Everything official you need to come to New Zealand from Turkey, in one place. Click a heading to go straight to the official source.",
    },
    intro: {
      tr: `Yeni Zelanda vize sistemi kafa karıştırıcı olabilir, onlarca kategori var ve her birinin şartı farklı. Bu sayfa kendi yorumumuzu eklemeden, doğrudan Immigration New Zealand'ın güncel sayfalarına bağlanıyor. Hangi yolun sana uygun olabileceğine dair kısa bir özet istersen önce <a href="/t/nasil-gelinir.html">Yeni Zelanda'ya Nasıl Gelinir</a> sayfasına bakabilirsin.`,
      en: `New Zealand's visa system can feel overwhelming, there are dozens of categories, each with its own requirements. This page doesn't add our own interpretation, it links straight to Immigration New Zealand's current pages. For a short overview of which path might suit you, check the <a href="/en/t/nasil-gelinir.html">How to Come to New Zealand</a> page first.`,
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
    related: ["nasil-gelinir", "isci-haklari", "dolandiriciliklardan-korunma"],
  },
  {
    slug: "maas-vergi",
    title: { tr: "Maaş & Vergi Sistemi", en: "Salary & Tax System" },
    summary: {
      tr: "Yeni Zelanda'da maaşlar, gelir vergisi dilimleri, ACC ve KiwiSaver kesintileri nasıl işler? Gerçek rakamlarla, hesap makineli anlatım.",
      en: "How do salaries, income tax brackets, ACC and KiwiSaver deductions actually work in New Zealand? Real numbers, with a built-in calculator.",
    },
    intro: {
      tr: `Yeni Zelanda'da ne kadar kazanılır, vergi sistemi nasıl işler, eline geçen maaş beklediğinden ne kadar farklı olur? Burada üç şey maaşından otomatik olarak kesilir.<br><br><strong>Gelir vergisi (PAYE):</strong> İşveren, vergiyi maaşından kaynağında keser, sen ayrıca bir şey yapmazsın. Sistem dilimlidir, yani tüm kazancına en yüksek oran uygulanmaz, sadece o dilime giren kısma uygulanır. IRD'nin güncel resmi dilimleri (2025-2026): 15.600 NZD'ye kadar %10.5, 15.600-53.500 NZD arası %17.5, 53.500-78.100 NZD arası %30, 78.100-180.000 NZD arası %33, 180.000 NZD üzeri %39.<br><br><strong>ACC işçi primi:</strong> İş kazası sigortası için maaşından %1.75 daha kesilir (belirli bir tavana kadar).<br><br><strong>KiwiSaver:</strong> Çoğu çalışanın maaşından %3, %4, %6, %8 veya %10 oranında (kendi seçtiğin) bir emeklilik tasarrufu kesilir. Bu para kaybolmuyor, kendi KiwiSaver hesabına gidiyor, istersen katılmayabilirsin.<br><br>Aşağıdaki hesap makinesiyle brüt maaşını girip net eline ne geçeceğini tahmini olarak görebilirsin. Güncel oranları ve asgari ücreti resmi kaynaklardan da kontrol edebilirsin. İşe başladığında haklarını bilmek de en az maaş kadar önemli, bunun için <a href="/t/isci-haklari.html">İşçi Hakları</a> sayfasına bakabilirsin.`,
      en: `How much do people actually earn in New Zealand, how does the tax system work, and how different is your take-home pay from what you expect? Three things get deducted from your pay automatically.<br><br><strong>Income tax (PAYE):</strong> Your employer deducts tax at source, you don't need to do anything yourself. The system is progressive, meaning the highest rate doesn't apply to your whole income, only to the portion that falls in that bracket. IRD's current official brackets (2025-2026): up to $15,600 at 10.5%, $15,600-$53,500 at 17.5%, $53,500-$78,100 at 30%, $78,100-$180,000 at 33%, over $180,000 at 39%.<br><br><strong>ACC earner levy:</strong> Another 1.75% is deducted for workplace accident insurance (up to a certain cap).<br><br><strong>KiwiSaver:</strong> Most employees have a retirement savings amount deducted from their pay, at a rate you choose: 3%, 4%, 6%, 8% or 10%. This money isn't lost, it goes into your own KiwiSaver account, and you can opt out if you want.<br><br>Use the calculator below to enter your gross salary and see an estimate of your take-home pay. You can also check current rates and the minimum wage from the official sources. Knowing your rights once you start working matters just as much as your pay, see the <a href="/en/t/isci-haklari.html">Worker Rights</a> page.`,
    },
    calculator: "salary-nz",
    accordion: [
      {
        label: { tr: "Resmi Kaynaklar", en: "Official Sources" },
        open: true,
        items: [
          { label: { tr: "Güncel Gelir Vergisi Oranları (IRD)", en: "Current Income Tax Rates (IRD)" }, url: "https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals" },
          { label: { tr: "Güncel Asgari Ücret", en: "Current Minimum Wage" }, url: "https://www.employment.govt.nz/pay-and-hours/pay-and-wages/minimum-wage" },
          { label: { tr: "KiwiSaver Nedir (emeklilik tasarrufu)", en: "What KiwiSaver Is (retirement savings)" }, url: "https://www.ird.govt.nz/kiwisaver" },
          { label: { tr: "Maaş Bordronu Nasıl Okursun (payslip)", en: "How to Read Your Payslip" }, url: "https://www.employment.govt.nz/pay-and-hours/pay-and-wages/payslips" },
        ],
      },
    ],
    videos: [],
    related: ["isci-haklari", "gunluk-hayat", "vize-sureclari"],
  },
  {
    slug: "gunluk-hayat",
    title: { tr: "Günlük Hayat Gerçekleri", en: "Everyday Life Realities" },
    summary: {
      tr: "Yeni Zelanda'da yaşamın gündelik gerçekleri: ev bulma, market fiyatları, kültürel farklar ve kimsenin sosyal medyada anlatmadığı detaylar.",
      en: "The everyday realities of life in New Zealand: finding a home, grocery prices, cultural differences and the details nobody shows on social media.",
    },
    intro: {
      tr: `Vize ve maaş kadar önemli ama çok daha az konuşulan bir konu var: Yeni Zelanda'da günlük hayat gerçekten nasıl? Ev bulmaktan markete, kültürel farklardan beklenmedik zorluklara kadar, kimsenin sosyal medyada göstermediği ama herkesin bir noktada karşılaştığı gerçekleri bu sayfada bulabilirsin. Yerleştikten sonra ülkeyi biraz da gezip keşfetmek istersen <a href="/t/gezi-kesif.html">Gezi ve Keşif</a> sayfasına göz atabilirsin.`,
      en: `As important as visas and salaries, but far less talked about: what is everyday life in New Zealand actually like? From finding a home to grocery shopping, cultural differences to unexpected challenges, this page covers the realities nobody shows on social media but everyone eventually runs into. Once you've settled in and want to explore the country a bit, check out the <a href="/en/t/gezi-kesif.html">Travel and Exploration</a> page.`,
    },
    videos: [],
    related: ["maas-vergi", "gezi-kesif", "isci-haklari"],
  },
  {
    slug: "isci-haklari",
    title: { tr: "İşçi Hakları", en: "Worker Rights" },
    summary: {
      tr: "Yeni Zelanda'da çalışma vizesiyle çalışırken haklarını ve işvereninin sorumluluklarını bil. Başlığa tıkla, resmi kaynağa git.",
      en: "Know your rights and your employer's responsibilities while working in New Zealand on a work visa, with links straight to official pages.",
    },
    intro: {
      tr: `Çalışma vizesiyle Yeni Zelanda'da çalışmaya başladığında, işverenin sana karşı yasal sorumlulukları var, senin de bilmen gereken haklar var. Bu sayfa, göçmen işçilerin haklarını ve olası sorun durumlarında nereye başvurulacağını doğrudan resmi kaynaklarla anlatıyor. İş teklifi karşılığında senden para isteyen ya da sana garanti veren biri varsa, <a href="/t/dolandiriciliklardan-korunma.html">Dolandırılmamak İçin Rehber</a> sayfasına bak.`,
      en: `Once you start working in New Zealand on a work visa, your employer has legal responsibilities toward you, and there are rights you should know about. This page explains migrant workers' rights and where to turn if something goes wrong, linking directly to official sources. If someone asks you for money in exchange for a job offer, or promises you a guarantee, check the <a href="/en/t/dolandiriciliklardan-korunma.html">Guide to Avoiding Scams</a> page.`,
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
    related: ["vize-sureclari", "maas-vergi", "dolandiriciliklardan-korunma"],
  },
  {
    slug: "gezi-kesif",
    title: { tr: "Gezi & Keşif", en: "Travel & Exploration" },
    summary: {
      tr: "Yeni Zelanda'nın doğası ve gezilecek yerleri hakkında genel bir bakış: bilinen rotalar, Yüzüklerin Efendisi çekim yerleri ve hafta sonu gezileri.",
      en: "A general look at New Zealand's nature and places worth visiting: well-known routes, Lord of the Rings filming spots and weekend trip ideas.",
    },
    intro: {
      tr: `Yeni Zelanda sadece vize ve iş süreçlerinden ibaret değil, dünyanın en etkileyici doğal manzaralarından bazılarına da ev sahipliği yapıyor. Aşağıda, ilk kez gidecekler için bilinen ve gerçek yerlerin kısa bir listesi var. Yerleştikten sonra hafta sonları keşfetmek için iyi bir başlangıç noktası olabilir.`,
      en: `New Zealand isn't just about visas and work, it's also home to some of the most striking natural landscapes in the world. Below is a short list of well-known, real places for a first visit. It can be a good starting point for weekend trips once you've settled in.`,
    },
    accordion: [
      {
        label: { tr: "Kuzey Adası", en: "North Island" },
        open: true,
        items: [
          { label: { tr: "Auckland (Yelkenler Şehri)", en: "Auckland (City of Sails)" } },
          { label: { tr: "Waiheke Island (Şarap bağları ve plajlar)", en: "Waiheke Island (vineyards and beaches)" } },
          { label: { tr: "Waitomo Glowworm Caves (Işıldayan solucan mağaraları)", en: "Waitomo Glowworm Caves (glowing worm caves)" } },
          { label: { tr: "Rotorua (Kükürt havuzları, gayzerler ve Maori kültürü)", en: "Rotorua (sulphur pools, geysers and Maori culture)" } },
          { label: { tr: "Wai-O-Tapu Thermal Wonderland (Renkli jeotermal park)", en: "Wai-O-Tapu Thermal Wonderland (colourful geothermal park)" } },
          { label: { tr: "Lake Taupo (Ülkenin en büyük gölü)", en: "Lake Taupo (the country's largest lake)" } },
          { label: { tr: "Huka Falls (Gürleyen turkuaz şelale)", en: "Huka Falls (roaring turquoise waterfall)" } },
          { label: { tr: "Tongariro Alpine Crossing (Tongariro Ulusal Parkı'ndaki ünlü yürüyüş parkuru)", en: "Tongariro Alpine Crossing (the famous hike in Tongariro National Park)" } },
          { label: { tr: "Bay of Islands (Paihia ve Russell tarihi sahil kasabaları)", en: "Bay of Islands (the historic coastal towns of Paihia and Russell)" } },
          { label: { tr: "Cape Reinga (Tasman Denizi ile Pasifik Okyanusu'nun birleştiği en kuzey uç)", en: "Cape Reinga (the northernmost tip, where the Tasman Sea meets the Pacific Ocean)" } },
          { label: { tr: "Coromandel Peninsula (Cathedral Cove ve Hot Water Beach)", en: "Coromandel Peninsula (Cathedral Cove and Hot Water Beach)" } },
          { label: { tr: "Wellington (Kültür, sanat ve kahve başkenti)", en: "Wellington (capital of culture, art and coffee)" } },
          { label: { tr: "Te Papa Tongarewa Müzesi (Wellington)", en: "Te Papa Tongarewa Museum (Wellington)" } },
          { label: { tr: "Mount Taranaki / Egmont National Park (Mükemmel simetrik volkanik dağ)", en: "Mount Taranaki / Egmont National Park (a near-perfectly symmetrical volcano)" } },
          { label: { tr: "Napier (Art Deco mimarisiyle ünlü şehir)", en: "Napier (a city famous for its Art Deco architecture)" } },
          { label: { tr: "Hawke's Bay (Şarap ve gurme rotası)", en: "Hawke's Bay (wine and food trail)" } },
          { label: { tr: "Piha Beach (Siyah kumlu sörf plajı)", en: "Piha Beach (black-sand surf beach)" } },
          { label: { tr: "Rangitoto Island (Auckland açıklarındaki volkanik ada)", en: "Rangitoto Island (a volcanic island off Auckland)" } },
        ],
      },
      {
        label: { tr: "Güney Adası", en: "South Island" },
        items: [
          { label: { tr: "Queenstown (Dünyanın macera ve ekstrem sporlar başkenti)", en: "Queenstown (the world's adventure and extreme sports capital)" } },
          { label: { tr: "Milford Sound / Piopiotahi (Dünyanın sekizinci harikası olarak bilinen fiyort)", en: "Milford Sound / Piopiotahi (a fiord often called the eighth wonder of the world)" } },
          { label: { tr: "Doubtful Sound (Daha el değmemiş ve sessiz devasa fiyort)", en: "Doubtful Sound (a more untouched, quiet, and vast fiord)" } },
          { label: { tr: "Fiordland National Park (Görkemli dağlar ve yürüyüş yolları)", en: "Fiordland National Park (dramatic mountains and hiking trails)" } },
          { label: { tr: "Lake Tekapo (Turkuaz göl ve The Church of the Good Shepherd kilisesi)", en: "Lake Tekapo (turquoise lake and the Church of the Good Shepherd)" } },
          { label: { tr: "Lake Pukaki (Mount Cook manzaralı parlak mavi göl)", en: "Lake Pukaki (a bright blue lake with Mount Cook views)" } },
          { label: { tr: "Aoraki / Mount Cook National Park (Yeni Zelanda'nın en yüksek zirvesi ve Hooker Valley parkuru)", en: "Aoraki / Mount Cook National Park (New Zealand's highest peak and the Hooker Valley track)" } },
          { label: { tr: "Wanaka (Gölün içindeki ünlü \"That Wanaka Tree\" ağacı ve Roys Peak zirvesi)", en: "Wanaka (the famous \"That Wanaka Tree\" in the lake and Roys Peak)" } },
          { label: { tr: "Abel Tasman National Park (Altın sarısı plajlar ve kano rotaları)", en: "Abel Tasman National Park (golden beaches and kayaking routes)" } },
          { label: { tr: "Franz Josef Glacier (Helikopterle yürüyüş yapılabilen buzul)", en: "Franz Josef Glacier (a glacier you can hike via helicopter)" } },
          { label: { tr: "Fox Glacier (Batı kıyısındaki ikonik buzul gölgesi)", en: "Fox Glacier (an iconic glacier on the West Coast)" } },
          { label: { tr: "Christchurch (Bahçeler şehri ve yeniden doğan modern merkez)", en: "Christchurch (the Garden City and a reborn modern centre)" } },
          { label: { tr: "Akaroa (Fransız esintili tarihi sahil kasabası)", en: "Akaroa (a historic coastal town with French influence)" } },
          { label: { tr: "Kaikoura (Yıl boyu balina, yunus ve fok gözlem noktası)", en: "Kaikoura (year-round whale, dolphin and seal watching)" } },
          { label: { tr: "Marlborough Sounds (Fiyort benzeri körfezler ve dünyaca ünlü Sauvignon Blanc bağları)", en: "Marlborough Sounds (fiord-like bays and world-famous Sauvignon Blanc vineyards)" } },
          { label: { tr: "Nelson (Sanatçı toplulukları ve güneşli sahiller)", en: "Nelson (artist communities and sunny beaches)" } },
          { label: { tr: "Punakaiki Pancake Rocks (Katmanlı kireçtaşından oluşan kumsal kayaları)", en: "Punakaiki Pancake Rocks (layered limestone rock formations)" } },
          { label: { tr: "Hokitika Gorge (Buzul sularından gelen yoğun masmavi nehir yatağı)", en: "Hokitika Gorge (a vivid blue riverbed fed by glacial water)" } },
          { label: { tr: "Moeraki Boulders (Sahildeki devasa küresel gizemli kayalar)", en: "Moeraki Boulders (giant, mysterious spherical boulders on the beach)" } },
          { label: { tr: "Dunedin (Viktorya dönemi mimarisi ve Otago Yarımadası vahşi yaşamı)", en: "Dunedin (Victorian-era architecture and Otago Peninsula wildlife)" } },
          { label: { tr: "Larnach Castle (Yeni Zelanda'nın tek kalesi)", en: "Larnach Castle (New Zealand's only castle)" } },
          { label: { tr: "Catlins Coast (Nugget Point Deniz Feneri ve penguen gözlem alanları)", en: "Catlins Coast (Nugget Point Lighthouse and penguin watching areas)" } },
          { label: { tr: "Stewart Island / Rakiura (En güneydeki ada, vahşi Kiwi kuşlarının doğal yaşam alanı)", en: "Stewart Island / Rakiura (the southernmost island, home to wild kiwi birds)" } },
        ],
      },
    ],
    pinned: [
      {
        tr: `<a href="https://www.linz.govt.nz/our-work/new-zealand-geographic-board/place-name-stories/new-zealands-first-world-war-place-names/army-commanders/ataturk-memorial-wellington" target="_blank" rel="noopener">ATATÜRK ANITI — WELLINGTON</a><p>Wellington'ın güney kıyısında, Tarakena Bay üzerindeki sırtta yer alır (Breaker Bay bölgesi). 1990'da açılan anıt; Atatürk büstü, mermer bir hilal ve Anzac Koyu'ndan getirilen toprağı içeriyor. Yer, Anzac Koyu'nun coğrafyasına benzerliği ve 1914'te Wellington Piyade Taburu'nun buradan yola çıkmasından dolayı seçilmiş.</p>`,
        en: `<a href="https://www.linz.govt.nz/our-work/new-zealand-geographic-board/place-name-stories/new-zealands-first-world-war-place-names/army-commanders/ataturk-memorial-wellington" target="_blank" rel="noopener">ATATÜRK MEMORIAL — WELLINGTON</a><p>Located on the ridge above Tarakena Bay on Wellington's south coast (Breaker Bay area). Unveiled in 1990, the memorial features a bust of Atatürk, a marble crescent, and soil brought from Anzac Cove. The site was chosen for its resemblance to the Anzac Cove landscape and because it was where the Wellington Infantry Battalion trained before departing in 1914.</p>`,
      },
      {
        tone: "light",
        tr: `<span class="pinned-highlight-title">YÜZÜKLERİN EFENDİSİ &amp; HOBBİT ÇEKİM YERLERİ</span><p>Yeni Zelanda'nın dünya çapında en çok tanınan yönü sinema — üçlemenin çoğu burada, gerçek doğal lokasyonlarda çekildi. En bilinen 5 nokta:</p><ul><li><strong>Hobbiton</strong> (Matamata) — filmler için inşa edilen Hobbit köyü, bir çiftlik arazisinde hâlâ duruyor, rehberli turlarla gezilebiliyor, Yeşil Ejder Hanı dahil</li><li><strong>Tongariro Ulusal Parkı</strong> — Mount Doom sahneleri için kullanılan Mount Ngauruhoe (hâlâ aktif bir yanardağ), Tongariro Alpine Crossing yürüyüşünden görülebiliyor</li><li><strong>Kaitoke Regional Park</strong> (Wellington yakını) — Elflerin diyarı Rivendell burada çekildi, set kalmadı ama orman hâlâ yürüyüşe açık</li><li><strong>Glenorchy / Paradise</strong> (Queenstown yakını) — Isengard ve Lothlórien sahnelerinin çekildiği yer, bugün at biniciliği ve doğa yürüyüşleriyle ünlü</li><li><strong>Mount Sunday</strong> (Canterbury) — Rohan'ın başkenti Edoras'ın çekildiği tek başına duran tepe; set 9 ayda kuruldu, bugün hiçbir iz kalmadı, ama tepeye ~90 dakikalık bir yürüyüşle çıkılabiliyor</li></ul>`,
        en: `<span class="pinned-highlight-title">LORD OF THE RINGS &amp; HOBBIT FILMING LOCATIONS</span><p>New Zealand's most globally recognised side is cinema — most of the trilogy was filmed here, on real natural locations. The 5 best-known spots:</p><ul><li><strong>Hobbiton</strong> (Matamata) — the Hobbit village built for the films still stands on a working farm, open for guided tours, including the Green Dragon Inn</li><li><strong>Tongariro National Park</strong> — Mount Ngauruhoe (still an active volcano) was used for the Mount Doom scenes, visible from the Tongariro Alpine Crossing hike</li><li><strong>Kaitoke Regional Park</strong> (near Wellington) — the elven realm of Rivendell was filmed here; no set remains, but the forest is still open for walking</li><li><strong>Glenorchy / Paradise</strong> (near Queenstown) — where the Isengard and Lothlórien scenes were shot, now known for horse riding and nature walks</li><li><strong>Mount Sunday</strong> (Canterbury) — the standalone hill where Edoras, capital of Rohan, was filmed; the set took 9 months to build and nothing remains today, but you can walk to the summit in about 90 minutes return</li></ul>`,
      },
    ],
    videos: [],
    related: ["gunluk-hayat", "nasil-gelinir", "vize-sureclari"],
  },
  {
    slug: "dolandiriciliklardan-korunma",
    title: { tr: "Yeni Zelanda'da Dolandırılmamak İçin Rehber", en: "Guide to Avoiding Scams in New Zealand" },
    summary: {
      tr: "Yeni Zelanda'da dolandırıcılık gerçek bir tehdit. İş teklifi, vize vaadi, ev ilanı veya danışman seçiminde dikkat etmen gereken noktalar.",
      en: "Scams are a real threat in New Zealand. Here are the key things to watch for with job offers, visa promises, rental listings, or choosing an adviser.",
    },
    intro: {
      tr: `Yeni Zelanda'ya yeni gelenler, dolandırıcılar için kolay hedef haline gelebiliyor: sahte iş teklifleri, yetkisiz danışmanlar, sahte web siteleri, hatta sahte ev ilanları. Bu sayfa, en sık karşılaşılan dolandırıcılık türlerini ve kendini nasıl koruyacağını anlatıyor. Bir bilginin resmi olup olmadığından emin değilsen, her zaman <a href="/t/vize-sureclari.html">Vize Türleri ve Resmi Süreçler</a> sayfasındaki resmi kaynaklarla karşılaştır.`,
      en: `Newcomers to New Zealand can easily become targets for scammers: fake job offers, unlicensed advisers, fraudulent websites, even fake rental listings. This page walks through the most common types of scams and how to protect yourself. If you're not sure whether something official is real, always compare it against the official sources on the <a href="/en/t/vize-sureclari.html">Visa Types and Official Processes</a> page.`,
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
        label: { tr: "🚩 Ev İlanı ve İkinci El Eşya Dolandırıcılıkları", en: "🚩 Rental Listing and Marketplace Scams" },
        items: [
          {
            label: { tr: "Görmeden veya görüntülü görüşmeden asla ön ödeme yapma", en: "Never pay a deposit before viewing in person or on a video call" },
            content: {
              tr: "Trade Me veya Facebook Marketplace'te \"yurt dışındayım, anahtarı kargolamadan önce bond/depozito yatır\" diyen ilanlar klasik bir dolandırıcılık yöntemidir. Evi bizzat veya en azından görüntülü görüşmeyle görmeden, ilan sahibiyle yüz yüze/görüntülü doğrulama yapmadan hiçbir ödeme yapma.",
              en: "Listings on Trade Me or Facebook Marketplace saying \"I'm overseas, pay the bond before I courier the keys\" are a classic scam pattern. Never pay anything before viewing the property in person or at least on a video call, and verifying the lister is real.",
            },
          },
          {
            label: { tr: "Bond, resmi sistemde (Bond Hub) kayıtlı olmalı", en: "The bond must be lodged in the official system (Bond Hub)" },
            content: {
              tr: "Yeni Zelanda'da alınan bond (depozito), ev sahibi tarafından yasal olarak Tenancy Services'in Bond Hub sistemine yatırılmak zorundadır. Sana \"bana elden/IBAN'a gönder\" diyen ve resmi makbuz vermeyen bir ev sahibi büyük risk taşır; bond'unun kayıtlı olup olmadığını kendi Bond Hub hesabından kontrol edebilirsin.",
              en: "In New Zealand, a bond a landlord collects must legally be lodged with Tenancy Services' Bond Hub system. A landlord who asks you to send it \"directly to my account\" without an official receipt is a major red flag; you can check whether your bond was actually lodged through your own Bond Hub account.",
            },
            url: "https://www.tenancy.govt.nz/rent-bond-and-bills/bond/",
          },
          {
            label: { tr: "Yazılı kira sözleşmesi zorunludur", en: "A written tenancy agreement is required" },
            content: {
              tr: "Yeni Zelanda'da her kiralık ev için yazılı bir tenancy agreement (kira sözleşmesi) olması gerekir. Sözleşme imzalamadan, şartları okumadan ve bir kopyasını almadan taşınma veya ödeme yapma.",
              en: "Every rental in New Zealand is required to have a written tenancy agreement. Don't move in or pay anything before signing an agreement, reading its terms, and getting your own copy.",
            },
            url: "https://www.tenancy.govt.nz/starting-a-tenancy/tenancy-agreements/",
          },
          {
            label: { tr: "Piyasanın çok altındaki fiyata dikkat", en: "Watch for prices far below market rate" },
            content: {
              tr: "Aynı bölgedeki benzer ilanlardan belirgin şekilde ucuz bir kira veya satış ilanı, dikkat çekmek için kasıtlı olarak düşük tutulmuş bir tuzak olabilir. Fiyatı bölgedeki diğer ilanlarla karşılaştır, aşırı cazip görünen teklifin gerçek olma ihtimaline şüpheyle yaklaş.",
              en: "A rental or sale price noticeably below similar listings in the same area may be deliberately lowballed bait. Compare it against other listings in the area, and be sceptical of an offer that seems too good to be true.",
            },
          },
          {
            label: { tr: "Facebook Marketplace'te ikinci el eşya alırken", en: "When buying second-hand items on Facebook Marketplace" },
            content: {
              tr: "Mümkünse eşyayı görüp kontrol ettikten sonra, halka açık ve güvenli bir yerde nakit veya anlık transferle öde. Görmediğin bir eşya için tanımadığın birine önceden havale yapma, özellikle satıcı \"kargoyla göndereceğim\" deyip önce ödeme istiyorsa uzak dur.",
              en: "Where possible, pay in a public, safe location after seeing and checking the item, using cash or an instant transfer. Don't wire money in advance to a stranger for an item you haven't seen, especially if the seller insists on payment before promising to \"post it\" to you.",
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
    related: ["vize-sureclari", "isci-haklari", "nasil-gelinir"],
  },
];
