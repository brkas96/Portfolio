import { useTranslation } from "react-i18next";

export default function Projects() {
    const {t} = useTranslation();

    return (
        <div className="left-cards bg-transparent text-white">
            <h1 className="text-5xl font-bold">{t("My Projects")}</h1>
            <p className="mt-4 text-xl">{t("Check out some of the projects I've worked on!")}</p>
        </div>
    );
}
