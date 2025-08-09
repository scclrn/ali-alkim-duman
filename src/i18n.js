import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      siteTitle: "Yönetmen Portföyü",
      nav: {
        home: "Ana Sayfa",
        bio: "Biyografi",
        films: "Filmler",
        contact: "İletişim",
      },
      lang: { label: "Dil", tr: "Türkçe", en: "İngilizce" },
      home: { heading: "Hoş geldiniz", subtitle: "Portföyü inceleyin" },
      bio: { heading: "Biyografi" },
      films: { heading: "Filmler" },
      contact: { heading: "İletişim" },
    },
  },
  en: {
    translation: {
      siteTitle: "Director Portfolio",
      nav: {
        home: "Home",
        bio: "Biography",
        films: "Films",
        contact: "Contact",
      },
      lang: { label: "Language", tr: "Turkish", en: "English" },
      home: { heading: "Welcome", subtitle: "Explore the portfolio" },
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
