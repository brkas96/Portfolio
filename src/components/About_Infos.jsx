// src/pages/About.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
    const {t} = useTranslation();

    return (
        <motion.div
            className="mx-auto py-20 px-6 text-white space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-4xl font-bold">{t("About Me")}</h2>
            <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                {t("Hi! I'm Bruno, a back-end developer passionate about turning ideas into code. Ever since I started programming, I’ve been fascinated by logic, automation, and how small solutions can create a big impact.")}
            </motion.p>
            <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                {t("Currently, I'm focused on building efficient APIs, automated systems, and robust applications using technologies like")} <span className="text-blue-400">Node.js</span>, <span className="text-blue-400">Python</span> {t("and")} <span className="text-blue-400">Express</span>. {t("I also enjoy exploring the front-end with")} <span className="text-blue-400">React</span> {t("and experimenting with clean, functional designs.")}
            </motion.p>
            <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
            >
               {t("Artificial Intelligence has also become a great ally in my daily routine as a developer. With strong technical skills and hands-on experience, I use AI as a tool to quickly understand how libraries and frameworks work—saving time and avoiding hours of reading documentation. This allows me to focus on logic, structure, and building my projects more efficiently.")}
            </motion.p>
            <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
            >
                {t("I'm driven by challenges and always looking to learn something new. Outside of coding, I enjoy gaming, music, and understanding how things work in detail.")}            </motion.p>
        </motion.div>
    );
}
