import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Configuração das partículas
        const particlesCount = 60;
        const maxDistance = 150;
        const particles = [];

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        // Inicializa partículas
        for (let i = 0; i < particlesCount; i++) {
            particles.push({
                x: random(0, width),
                y: random(0, height),
                vx: random(-0.5, 0.5),
                vy: random(-0.5, 0.5),
                radius: 2,
            });
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);

            // Fundo transparente para mostrar seu gradiente
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, width, height);

            // Desenha partículas
            ctx.fillStyle = "rgba(138, 43, 226, 0.8)"; // roxo forte
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Desenha linhas entre partículas próximas
            for (let i = 0; i < particlesCount; i++) {
                for (let j = i + 1; j < particlesCount; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                    if (dist < maxDistance) {
                        ctx.strokeStyle = `rgba(138, 43, 226, ${(1 - dist / maxDistance) * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Atualiza posição das partículas
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx = -p.vx;
                if (p.y < 0 || p.y > height) p.vy = -p.vy;
            });

            requestAnimationFrame(draw);
        }

        draw();

        // Atualiza tamanho do canvas ao redimensionar
        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
        />
    );
}
