// src/components/FloatNavbar.jsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function Servicos() {


    const location = useLocation();

    const {t} = useTranslation();

    return (
        <div className="left-cards bg-transparent text-white">
            <h1 className="text-5xl font-bold">{t("Services")}</h1>
            <p className="mt-4 text-xl">{t("Check out some of the services I've offer!")}</p>
        </div>


    );
}


