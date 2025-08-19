// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      siteTitle: "Ali Alkım Duman",
      nav: {
        home: "Ana Sayfa",
        bio: "Biyografi",
        films: "Filmler",
        photos: "Fotoğraflar",
        contact: "İletişim",
      },
      lang: { label: "Dil", tr: "Türkçe", en: "İngilizce" },
      home: {
        heading: "Hoş geldiniz",
        subtitle: "Fall Down Seven Times, Stand Up Eight",
        bioHeading: "Hakkımda",
        // RESMÎ KISA ÖZET — kurum/bölüm açık yazılır, eser adı verilmez, ilgi alanları ve senaryo yazımı ekli
        bioTeaser:
          "2001 yılında Ankara’da doğdu. Dokuz Eylül Üniversitesi Güzel Sanatlar Fakültesi Film Tasarımı ve Yönetmenliği Bölümü’nden 2025 yılında bölüm birincisi olarak mezun oldu. Kısa film yönetimi ve yardımcı yönetmenlik alanlarında çalışmakta; fotoğraf üretimi ile görüntü ve kurgu süreçleriyle ilgilenmekte, ayrıca senaryo yazımı üzerine çalışmaktadır.",
        latestFilmsHeading: "Son Filmler",
        videoHeading: "Öne Çıkan Video",
        readBio: "Biyografiyi Gör",
      },
      photos: { heading: "Fotoğraflar" },
      bio: {
        heading: "Biyografi",
        content:
          "20 Ağustos 2001’de Ankara’da doğdum. Dokuz Eylül Üniversitesi Güzel Sanatlar Fakültesi Film Tasarımı ve Yönetmenliği Bölümü’nü 2025 Temmuz’da bölüm birincisi olarak tamamladım. HBO Max’in Saygı 2 ve Disney+’ın Atatürk dizilerinde reji departmanlarında staj yaptım. 2021’de Ercan Mehmet Erdem’in ‘İnce Düşünen Adam’ öyküsünden uyarladığım kısa filmle yönetmenliğe başladım. Ardından çektiğim *Bir İhtimal Daha* ile 30. Adana Altın Koza Film Festivali Ulusal Öğrenci kategorisinde finalist oldum. Işık Sanat ve City Voice sponsorluğunda çektiğim *Tiksinti*’yi 2025 Haziran’da tamamladık; galasını 2025 Nisan’da AKM Yeşilçam Sineması’nda yaptık ve festival sürecini başlattık. Kendi filmlerimin yanında okulda çeşitli kısa filmlerde yardımcı yönetmenlik yaptım. Ek olarak portre, sokak ve etkinlik fotoğrafçılığıyla ilgileniyorum. Şu sıralar Başka Sinema direktörü Armağan Lale’nin danışmanlığında, Esin Özalp Öztürk yapımcılığında *Katı Olan Her Şey Buharlaşıyor* adlı kısa filmimin hazırlıklarını sürdürüyorum.",
      },
      films: { heading: "Filmler" },
      contact: { heading: "İletişim" },
    },
  },
  en: {
    translation: {
      siteTitle: "Ali Alkım Duman",
      nav: {
        home: "Home",
        bio: "Biography",
        films: "Films",
        photos: "Photos",
        contact: "Contact",
      },
      lang: { label: "Language", tr: "Turkish", en: "English" },
      home: {
        heading: "Welcome",
        subtitle: "Fall Down Seven Times, Stand Up Eight",
        bioHeading: "About",
        // FORMAL SHORT BLURB — full institution names, interests instead of works, includes screenwriting
        bioTeaser:
          "Born in Ankara in 2001. Graduated first in class in 2025 from the Faculty of Fine Arts, Department of Film Design and Directing at Dokuz Eylul University. Works in short‑film directing and assistant directing; engaged with photography as well as image and editing workflows, and is also active in screenwriting.",
        latestFilmsHeading: "Latest Films",
        videoHeading: "Featured Video",
        readBio: "Read Biography",
      },
      photos: { heading: "Photos" },
      bio: {
        heading: "Biography",
        content:
          "I was born in Ankara on August 20, 2001. I graduated first in my class from Dokuz Eylul University’s Faculty of Fine Arts, Department of Film Design and Directing (July 2025). I interned in the assistant directing departments of HBO Max’s *Respect 2* and Disney+’s *Atatürk*. I started directing in 2021 with a short adapted from Ercan Mehmet Erdem’s story ‘The Considerate Man.’ My next film, *One More Possibility*, was a finalist in the National Student Competition at the 30th Adana Golden Boll Film Festival. With the support of Işık Sanat and City Voice, I completed *Repulsion* in June 2025; its gala was held at AKM Yeşilçam Cinema in April 2025 and we started the festival run. Alongside my own films, I have worked as an assistant director on various student shorts. I also shoot portraits, street and event photography. I’m currently developing the short *All That Is Solid Melts into Air*, advised by Başka Sinema’s director Armağan Lale and produced by Esin Özalp Öztürk.",
      },
      films: { heading: "Films" },
      contact: { heading: "Contact" },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "tr",
    supportedLngs: ["tr", "en"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
