import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import headerKa from "@/i18n/ka/header.json";
import headerEn from "@/i18n/en/header.json";
import footerKa from "@/i18n/ka/footer.json";
import footerEn from "@/i18n/en/footer.json";
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
        translation: { header: headerKa, footer: footerKa },
      },
      en: {
        translation: { header: headerEn, footer: footerEn },
      },
    },
    lng: getInitialLanguage(),

    interpolation: {
      escapeValue: false,
    },
  });
