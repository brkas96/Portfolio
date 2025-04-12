import { motion } from "framer-motion";

export default function IntroSection() {
    return (
        <motion.div
            className="flex flex-col h-screen items-center justify-center max-w-2xl px-4 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Turning ideas into code 💡💻
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl max-w-xl text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                I'm Bruno, a back-end developer passionate about building.
            </motion.p>

            <motion.a
                href="/Portfolio/curriculo.pdf"
                download
                className="bg-white text-black font-semibold hover:bg-black hover:text-white px-6 py-3 rounded-lg transition duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
                Download Resume
            </motion.a>
        </motion.div>
    );
}
