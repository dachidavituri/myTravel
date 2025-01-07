import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import headerKa from "@/i18n/ka/header.json";
import headerEn from "@/i18n/en/header.json";
const options = {
  order: ["path"],
  lookupFromPathIndex: 0,
};
const lngDetector = new LanguageDetector();
const getInitialLanguage = () => {
  const pathLanguage = window.location.pathname.split("/")[1] || "ka";
  return pathLanguage === "ka" ? "ka" : "en";
};

i18n
  .use(lngDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      ka: {
        translation: { header: headerKa },
      },
      en: {
        translation: { header: headerEn },
      },
    },
    lng: getInitialLanguage(),

    interpolation: {
      escapeValue: false,
    },
  });
