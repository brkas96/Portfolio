import { useTranslation } from "react-i18next";

export default function About() {
  const {t} = useTranslation();

  return (
    <div className="left-cards bg-transparent text-white">
      <h1 className="text-5xl font-bold">{t("About Me")}</h1>
      <p className="mt-4 text-xl">{t("I am a FullStack developer specializing in Python.")}</p>
    </div>

    /*<div className="left-cards bg-gradient-to-br 
      from-indigo-500 via-purple-500 to-pink-500 text-whitespace-y-4">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-xl">I am a web developer specializing in Python.</p>
    </div>*/
  );
}
