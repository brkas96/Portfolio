import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Bot de Automação",
        category: "Automação",
        description: "Automatiza conclusão de tarefas no Microsoft Rewards.",
        image: "/Portfolio/perfil.jpeg",
        techs: ["Python", "Selenium"],
        github: "https://github.com/brkas96/MicrosoftRewards",
        demo: "https://youtube.com/demo",
    },
    {
        title: "Portfólio React",
        category: "Frontend",
        description: "Portfólio de ferramentas interativas com React (Repositorio privado com site de ferramentas em React. Somente com a exibição no pages público)",
        image: "/Portfolio/perfil.jpeg",
        techs: ["React", "Tailwind", "Framer Motion"],
        github: "https://github.com/brkas96/portfolio",
        demo: "https://brkas.dev",
    },
    {
        title: "API de Produtos",
        category: "Backend",
        description: "REST API com Node.js, Express e MongoDB.",
        image: "/Portfolio/perfil.jpeg",
        techs: ["Node.js", "MongoDB"],
        github: "https://github.com/brkas96/products-api",
        demo: "https://products-api-demo.vercel.app",
    },
];

const categories = ["Todos", "Frontend", "Backend", "Automação"];

export default function FeaturedProjects() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredProjects = selectedCategory === "Todos"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className="max-w-6xl mx-auto px-6 text-white mt-10">

            <div className="flex flex-col">
                <h2 className="text-4xl font-bold text-center mb-10 alling-center">Projetos em Destaque</h2>
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full border ${selectedCategory === cat
                                ? "bg-blue-600 border-blue-500 text-white"
                                : "bg-slate-700 border-slate-600 text-gray-300"
                                } hover:bg-blue-500 transition`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="grid md:grid-cols-2 gap-8 mb-20 items-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl w-full shadow-xl border border-slate-700"
                            />
                            <div>
                                <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-slate-300 mb-4">{project.description}</p>
                                <div className="flex gap-2 flex-wrap mb-4">
                                    {project.techs.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-slate-700 px-3 py-1 rounded-full text-sm text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        <Github size={18} /> GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        <ExternalLink size={18} /> Testar
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

            </div>


        </div>
    );
}
