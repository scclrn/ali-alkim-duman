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
        bioHeading: "Biyografi",
        bioTeaser:
          "Selam, ben Ali Alkım Duman. Ama insanlar bana kısaca Zeki Demirkubuz derler.",
        latestFilmsHeading: "Son Filmler",
        videoHeading: "Öne Çıkan Video",
      },
      photos: { heading: "Fotoğraflar" },
      bio: { heading: "Biyografi" },
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
        bioHeading: "Biography",
        bioTeaser:
          "Hello, I am Ali Alkım Duman. But people briefly call me Zeki Demirkubuz.",
        latestFilmsHeading: "Latest Films",
        videoHeading: "Featured Video",
      },
      photos: { heading: "Photos" },
      bio: { heading: "Biography" },
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
