// src/components/FloatNavbar.jsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    { to: "/servicos", label: "Services" },
];

export default function FloatNavbar() {
    const location = useLocation();

    return (
        <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-md shadow-lg p-4 rounded-2xl space-y-4 z-50"
        >
            {links.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${location.pathname === link.to
                            ? "bg-white text-black shadow"
                            : "text-white hover:bg-white/30"
                        }`}
                >
                    {link.label}
                </Link>
            ))}
        </motion.nav>
    );
}
