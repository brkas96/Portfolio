import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./pt.json";

const userLang =
    localStorage.getItem("lang") ||
    (navigator.language.startsWith("pt") ? "pt" : "en");

i18n.use(initReactI18next).init({
    resources: {
        pt: { translation: pt },
    },
    lng: userLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
