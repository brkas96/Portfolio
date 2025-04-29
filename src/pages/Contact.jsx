import { useTranslation } from "react-i18next";

export default function Contact() {
  const {t} = useTranslation();
  return (
    <div className="left-cards bg-transparent text-white">
      <h1 className="text-5xl font-bold">{t("Contact Me")}</h1>
      <p className="mt-4 text-xl">{t("Feel free to reach out!")}</p>
    </div>
  );
}
