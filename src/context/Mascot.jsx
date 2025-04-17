import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import mascotImg from "../assets/avatar.png";

export default function Mascot() {
  const mascotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mascot = mascotRef.current;
      if (!mascot) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPercent = (clientX / innerWidth - 0.5) * 30;
      const yPercent = (clientY / innerHeight - 0.5) * 30;

      mascot.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 pointer-events-none"
      initial={{ scale: 0, rotate: -15 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <img
        ref={mascotRef}
        src={mascotImg}
        alt="Mascote"
        className="w-28 h-auto select-none"
      />
    </motion.div>
  );
}
