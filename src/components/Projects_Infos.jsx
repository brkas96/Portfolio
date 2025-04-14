import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Web Automation Bot",
        category: "Automation",
        description: "Automate the completion of missions in Microsoft Rewards by redeeming the points.",
        image: "/Portfolio/projeto1.png",
        techs: ["Python", "Selenium"],
        github: "https://github.com/brkas96/MicrosoftRewardsAuto",
        demo: "https://github.com/brkas96/MicrosoftRewardsAuto/raw/refs/heads/main/dist/Microsoft%20Rewards%20Auto.exe", /*Linkg para baixar o exe no repositorio ou então um video 
        demonstrarivo de como fazer pra funcionar */
    },
    {
        title: "Portfólio React",
        category: "Frontend",
        description: "Portfolio of interactive online tools made with ReactJS.",
        image: "/Portfolio/projeto2.png",
        techs: ["React", "Tailwind", "Framer Motion", "Axios"],
        github: "https://youtilities.vercel.app/",
        demo: "https://youtilities.vercel.app/",
    },
    {
        title: "Product APIs",
        category: "Backend",
        description: "REST API with Node.js, Express and MongoDB.",
        image: "/Portfolio/projeto3.png",
        techs: ["Node.js", "MongoDB"],
        github: "https://github.com/brkas96/products-api",
        demo: "https://products-api-demo.vercel.app",
    },
];

const categories = ["All", "Frontend", "Backend", "Automation"];

export default function FeaturedProjects() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className="max-w-6xl mx-auto px-6 text-white mt-10">

            <div className="flex flex-col">
                <h2 className="text-4xl font-bold text-center mb-10 alling-center">Featured Projects</h2>
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
                                <div className="flex justify-center gap-2 flex-wrap mb-4">
                                    {project.techs.map((tech, i) => (
                                        <span
                                            key={i}
                                            className=" bg-slate-700 px-3 py-1 rounded-full text-sm text-white"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-4">
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
                                        className="flex items-center gap-2 bg-white hover:bg-black text-white px-4 py-2 rounded-lg transition"
                                    >
                                        <ExternalLink size={18} /> Test
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
