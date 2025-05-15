import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "01";
        const fontSize = 16;
        const columns = Math.floor(canvas.width / (fontSize * 2)); // Menos colunas
        const drops = Array(columns).fill(1);

        const draw = () => {
            // Fundo transparente, sem tampar o background
            ctx.fillStyle = "rgba(0, 0, 0, 0.02)"; // Bem suave
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00ff00"; // Verde neon
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                const x = i * fontSize * 2; // Mais espaçado
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.95) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        return () => clearInterval(interval);
    }, []);


    return (
        <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none" />

    );
}
