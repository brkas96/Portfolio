import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const setLang = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <div className="hidden sm:block fixed top-4 right-4 z-50">
            <button onClick={() => setLang("en")} className="mr-2">EN</button>
            <button onClick={() => setLang("pt")}>PT</button>
        </div>
    );
}
