import { useState } from "react";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";


export default function Home() {
    const [imgErro, setImgErro] = useState(false);
    const {t} = useTranslation();

    return (

        <div className="left-cards bg-transparent text-white 
        space-y-4">

            {imgErro ? (
                <User className="w-12 h-12 text-gray-400 bg-gray-100 rounded-full p-2" />
            ) : (
                <img
                    src="/Portfolio/perfil.jpeg"
                    alt="Eu"
                    className="w-40 h-40 rounded-full border"
                    onError={() => setImgErro(true)}
                />
            )}

            <h1 className="text-5xl font-bold mt-4 justify-center text-center">{t("Hello, I'm Bruno!")} 👋</h1>
            <p className="mt-4 text-xl">{t("Welcome to my portfolio.")}</p>

        </div>

    );
}
