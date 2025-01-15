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
import aboutKa from "@/i18n/ka/about.json";
import aboutEn from "@/i18n/en/about.json";
import galleryKa from "@/i18n/ka/gallery.json";
import galleryEn from "@/i18n/en/gallery.json";
import quizKa from "@/i18n/ka/quiz.json";
import quizEn from "@/i18n/en/quiz.json";
import homeKa from "@/i18n/ka/home.json";
import homeEn from "@/i18n/en/home.json";
import weatherKa from "@/i18n/ka/weather.json";
import weatherEn from "@/i18n/en/weather.json";
import toursKa from "@/i18n/ka/tours.json";
import toursEn from "@/i18n/en/tours.json";

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
          about: aboutKa,
          gallery: galleryKa,
          quiz: quizKa,
          home: homeKa,
          weather: weatherKa,
          tour: toursKa,
        },
      },
      en: {
        translation: {
          header: headerEn,
          footer: footerEn,
          login: loginEn,
          register: registerEn,
          settings: settingsEn,
          about: aboutEn,
          gallery: galleryEn,
          quiz: quizEn,
          home: homeEn,
          weather: weatherEn,
          tour: toursEn,
        },
      },
    },
    lng: getInitialLanguage(),

    interpolation: {
      escapeValue: false,
    },
  });
