import { useEffect, useRef } from "react";

export default function VerticalScanSubtle() {
    const canvasRef = useRef(null);
    const scanPos = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scanWidth = 80;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // fundo transparente para deixar o gradiente visível
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // gradiente roxo escuro sutil, com transparências para suavizar
            const gradient = ctx.createLinearGradient(scanPos.current, 0, scanPos.current + scanWidth, 0);
            gradient.addColorStop(0, "rgba(58, 48, 97, 0)");    // roxo escuro transparente
            gradient.addColorStop(0.4, "rgba(94, 75, 150, 0.35)");  // roxo médio com transparência
            gradient.addColorStop(0.5, "rgba(111, 92, 171, 0.5)");  // roxo suave
            gradient.addColorStop(0.6, "rgba(94, 75, 150, 0.35)");  // roxo médio com transparência
            gradient.addColorStop(1, "rgba(58, 48, 97, 0)");    // roxo escuro transparente

            ctx.fillStyle = gradient;
            ctx.fillRect(scanPos.current, 0, scanWidth, canvas.height);

            // brilho muito suave
            ctx.shadowColor = "rgba(111, 92, 171, 0.2)";
            ctx.shadowBlur = 6;
            ctx.fillRect(scanPos.current, 0, scanWidth, canvas.height);

            scanPos.current += 2;
            if (scanPos.current > canvas.width) scanPos.current = -scanWidth;
        };

        const interval = setInterval(draw, 25);
        return () => clearInterval(interval);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
        />
    );
}
