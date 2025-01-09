import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import headerKa from "@/i18n/ka/header.json";
import headerEn from "@/i18n/en/header.json";
import footerKa from "@/i18n/ka/footer.json";
import footerEn from "@/i18n/en/footer.json";
import loginKa from "@/i18n/ka/login.json";
import loginEn from "@/i18n/en/login.json";
import registerKa from "@/i18n/ka/register.json";
import registerEn from "@/i18n/en/register.json";
import settingsKa from "@/i18n/ka/settings.json";
import settingsEn from "@/i18n/en/settings.json";
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
        translation: {
          header: headerKa,
          footer: footerKa,
          login: loginKa,
          register: registerKa,
          settings: settingsKa,
        },
      },
      en: {
        translation: {
          header: headerEn,
          footer: footerEn,
          login: loginEn,
          register: registerEn,
          settings: settingsEn,
        },
      },
    },
    lng: getInitialLanguage(),

    interpolation: {
      escapeValue: false,
    },
  });
