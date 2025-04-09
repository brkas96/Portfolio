// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            className="mx-auto py-20 px-6 text-white space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-4xl font-bold">Sobre mim</h2>
            <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                Olá! Eu sou o Bruno, desenvolvedor back-end apaixonado por transformar ideias em código. Desde que comecei a programar, me encantei pela lógica, automações e como pequenas soluções podem gerar grandes impactos.
            </motion.p>
            <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                Atualmente, estou focado em construir APIs eficientes, sistemas automatizados e aplicações robustas utilizando tecnologias como <span className="text-blue-400">Node.js</span>, <span className="text-blue-400">Python</span> e <span className="text-blue-400">Express</span>. Também curto explorar o front-end com <span className="text-blue-400">React</span> e experimentar designs limpos e funcionais.
            </motion.p>
            <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
            >
                Sou movido por desafios e estou sempre buscando aprender algo novo. Fora do código, gosto de games, música e entender como as coisas funcionam no detalhe.
            </motion.p>
            FALAR SOBRE COMO A IA ME AJUDA A PROGRAMAR
        </motion.div>
    );
}
