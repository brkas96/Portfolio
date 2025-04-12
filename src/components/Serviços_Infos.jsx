// src/components/FloatNavbar.jsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


export default function Servicos() {
    const services = [
        {
            title: "Desenvolvimento Web",
            description: "Criação de sites responsivos, modernos e otimizados usando React, Tailwind e outras tecnologias.",
            icon: "🌐",
        },
        {
            title: "Automação com Python",
            description: "Criação de bots e scripts para automatizar tarefas repetitivas, scraping e integrações.",
            icon: "🤖",
        },
        {
            title: "APIs e Integrações",
            description: "Desenvolvimento e consumo de APIs RESTful, integração com sistemas externos e bancos de dados.",
            icon: "🔗",
        },
        {
            title: "Landing Pages e Portfólios",
            description: "Desenvolvimento de páginas para destacar marcas ou produtos, focando em performance e design.",
            icon: "📄",
        },
    ];

    const location = useLocation();

    return (

        services.map((service, idx) => (
            <motion.div
                key={idx}
                className="flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
                <motion.div
                    key={idx}
                    className="text-center bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 m-4 w-full md:w-[45%]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                    <h3 className="text-xl font-semibold mb-2">{service.icon} {service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>

                    <div className="mt-10 text-center">
                        <p className="text-lg">Tem interesse em algum desses serviços?</p>
                        <Link to="/contact" className="text-blue-500 hover:underline">Entre em contato</Link>
                    </div>
                </motion.div>
            </motion.div>

        ))

    );
}


