const CHECKLIST = {
  tr: [
    {
      title: "1. Türkiye'de Hazırlık",
      desc: "Başvurudan önce halletmen gerekenler.",
      items: [
        { t: "Pasaportunun geçerlilik süresini kontrol et (en az 6 ay kalmış olmalı)" },
        { t: "Hangi vize türünün sana uygun olduğuna karar ver", link: ["Vize Türleri sayfası", "topic.html?t=vize-sureclari"] },
        { t: "Türkiye Çalışma Tatili Vizesi için yaş uygunluğunu kontrol et (18-30 yaş arası)", link: ["resmi sayfa", "https://www.immigration.govt.nz/visas/turkey-working-holiday-visa/"] },
        { t: "Sağlık sigortası araştır (bazı vize türlerinde istenir)" },
        { t: "Adli sicil kaydını (police certificate) çıkart" },
        { t: "Diploma / mesleki belgelerinin İngilizce tercümesi ve denklik durumunu araştır" },
      ],
    },
    {
      title: "2. Vize Başvurusu",
      desc: "Başvuru sürecinde dikkat edilmesi gerekenler.",
      items: [
        { t: "Başvuru için gerekli belge ve kanıtları hazırla", link: ["belge listesi", "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/"] },
        { t: "Başvuruyu yalnızca Immigration NZ'nin resmi sitesi üzerinden yap" },
        { t: "\"Bağlantım var, hızlandırırım\" diyen kimseye güvenme — böyle bir yetki kimsede yoktur", link: ["dolandırıcılık rehberi", "topic.html?t=dolandiriciliklardan-korunma"] },
        { t: "Danışman kullanacaksan mutlaka lisansını doğrula", link: ["IAA lisans doğrulama", "https://www.iaa.govt.nz/for-migrants/working-with-a-licensed-immigration-adviser/"] },
        { t: "Ücretleri sadece resmi sistem üzerinden öde — banka havalesi isteyen biri dolandırıcıdır" },
      ],
    },
    {
      title: "3. Gelmeden Önce",
      desc: "Uçuş öncesi son hazırlıklar.",
      items: [
        { t: "Uçak bileti ve ilk birkaç gecelik konaklama ayarla" },
        { t: "Yeni Zelanda'da banka hesabı açma sürecini araştır" },
        { t: "IRD numarası (vergi numarası) başvurusu için bilgi topla" },
        { t: "Eşyalarını göndermek istiyorsan kargo/nakliye seçeneklerini karşılaştır" },
        { t: "Yerel telefon hattı / SIM kart seçeneklerine bak" },
      ],
    },
    {
      title: "4. İlk Hafta",
      desc: "Yeni Zelanda'ya vardığında yapılacaklar.",
      items: [
        { t: "IRD numarası başvurusu yap" },
        { t: "Banka hesabı aç" },
        { t: "Geçici konaklama ayarla, kalıcı ev arayışına başla" },
        { t: "Yerel SIM kart al" },
      ],
    },
    {
      title: "5. İş Bulma",
      desc: "Çalışmaya başlamadan önce ve sonrasında.",
      items: [
        { t: "Vizenin çalışma koşullarını (saat sınırı, işveren bağımlılığı vb.) kontrol et" },
        { t: "İşe alım karşılığı senden ücret isteyen işveren yasa dışı iş yapıyordur, uzak dur" },
        { t: "Seek.co.nz gibi platformlarda iş ara" },
        { t: "İşe başladığında haklarını bil", link: ["İşçi Hakları sayfası", "topic.html?t=isci-haklari"] },
      ],
    },
    {
      title: "6. Uzun Vadeli",
      desc: "Yerleşme sürecinin devamı.",
      items: [
        { t: "Vize süren bitmeden önce uzatma/geçiş planını netleştir" },
        { t: "Oturum izni (residence) yollarını araştır", link: ["Vize Türleri sayfası", "topic.html?t=vize-sureclari"] },
      ],
    },
  ],
  en: [
    {
      title: "1. Preparing in Turkey",
      desc: "What to sort out before you apply.",
      items: [
        { t: "Check your passport's validity (at least 6 months remaining)" },
        { t: "Decide which visa type suits you", link: ["Visa Types page", "topic.html?t=vize-sureclari"] },
        { t: "Check the age requirement for the Turkey Working Holiday Visa (18-30 years old)", link: ["official page", "https://www.immigration.govt.nz/visas/turkey-working-holiday-visa/"] },
        { t: "Look into health insurance (required for some visa types)" },
        { t: "Get your police certificate" },
        { t: "Look into English translation and recognition of your diploma / professional qualifications" },
      ],
    },
    {
      title: "2. Visa Application",
      desc: "Things to watch for during the application process.",
      items: [
        { t: "Prepare the documents and evidence required for your application", link: ["document list", "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/"] },
        { t: "Only apply through Immigration NZ's official website" },
        { t: "Don't trust anyone who says \"I have connections, I'll speed it up\" — no one has that authority", link: ["scam prevention guide", "topic.html?t=dolandiriciliklardan-korunma"] },
        { t: "If you use an adviser, always verify their licence", link: ["IAA licence check", "https://www.iaa.govt.nz/for-migrants/working-with-a-licensed-immigration-adviser/"] },
        { t: "Only pay fees through the official system — anyone asking for a bank transfer is a scammer" },
      ],
    },
    {
      title: "3. Before You Leave",
      desc: "Final preparations before your flight.",
      items: [
        { t: "Book your flight and your first few nights of accommodation" },
        { t: "Look into opening a bank account in New Zealand" },
        { t: "Gather information for your IRD number (tax number) application" },
        { t: "Compare shipping/freight options if you want to send your belongings" },
        { t: "Look into local phone line / SIM card options" },
      ],
    },
    {
      title: "4. First Week",
      desc: "Things to do once you've arrived in New Zealand.",
      items: [
        { t: "Apply for your IRD number" },
        { t: "Open a bank account" },
        { t: "Arrange temporary accommodation and start looking for a permanent home" },
        { t: "Get a local SIM card" },
      ],
    },
    {
      title: "5. Finding Work",
      desc: "Before and after you start working.",
      items: [
        { t: "Check your visa's work conditions (hour limits, employer restrictions etc.)" },
        { t: "Any employer who asks you for money in exchange for hiring you is acting illegally — stay away" },
        { t: "Look for jobs on platforms like Seek.co.nz" },
        { t: "Know your rights once you start working", link: ["Worker Rights page", "topic.html?t=isci-haklari"] },
      ],
    },
    {
      title: "6. Long Term",
      desc: "Continuing your settlement journey.",
      items: [
        { t: "Clarify your extension/transition plan before your visa expires" },
        { t: "Research pathways to residence", link: ["Visa Types page", "topic.html?t=vize-sureclari"] },
      ],
    },
  ],
};
