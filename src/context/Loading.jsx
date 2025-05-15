import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Incrementa a barra de progresso até 100% em 2.2s
        const interval = setInterval(() => {
            setProgress((old) => {
                if (old >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return old + 2;
            });
        }, 44);

        // Esconde a tela após 2.2s
        const timeout = setTimeout(() => setIsVisible(false), 2200);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Texto com glitch agressivo */}
                    <motion.h1
                        className="relative text-purple-400 text-5xl md:text-7xl font-mono font-bold tracking-wide select-none"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        BRUNO DEV

                        {/* Efeitos glitch: flashes, cortes e distorções */}
                        <motion.span
                            aria-hidden="true"
                            className="absolute top-0 left-0 w-full h-full text-purple-600"
                            style={{ clipPath: "inset(0 0 60% 0)", position: "absolute" }}
                            animate={{
                                opacity: [
                                    1, 0, 1, 0.4, 1, 0, 1, 1, 0, 1,
                                ],
                                x: [0, -3, 3, -3, 3, 0, 0, -2, 2, 0],
                                skewX: [0, 20, -20, 20, -20, 0, 0, 10, -10, 0],
                            }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            BRUNO DEV
                        </motion.span>

                        <motion.span
                            aria-hidden="true"
                            className="absolute top-0 left-0 w-full h-full text-pink-600"
                            style={{ clipPath: "inset(60% 0 0 0)", position: "absolute" }}
                            animate={{
                                opacity: [
                                    0, 1, 0, 1, 0.5, 1, 0, 1, 0, 1,
                                ],
                                x: [0, 4, -4, 4, -4, 0, 0, 3, -3, 0],
                                skewX: [0, -20, 20, -20, 20, 0, 0, -10, 10, 0],
                            }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            BRUNO DEV
                        </motion.span>
                    </motion.h1>

                    {/* Barra de loading */}
                    <div className="w-80 max-w-full h-2 bg-purple-900 rounded mt-8 overflow-hidden">
                        <motion.div
                            className="h-full bg-purple-500 rounded"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
