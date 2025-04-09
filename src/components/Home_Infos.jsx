import { motion } from "framer-motion";

export default function IntroSection() {
    return (
        <motion.div
            className="mx-auto py-20 px-6 items-center justify-center text-center 
            text-white space-y-"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}

        >
            <motion.div className="flex flex-col p-25 flex-1 items-center justify-center text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Turning ideas into code 💡💻
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl max-w-xl pb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    I'm Bruno, a back-end developer passionate about building
                </motion.p>

                <motion.a
                    href="/curriculo.pdf"
                    download
                    className="bg-white hover:bg-black text-white px-6 py-3 rounded-lg transition"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    Download Resume
                </motion.a>

            </motion.div>

        </motion.div>
    );
}
