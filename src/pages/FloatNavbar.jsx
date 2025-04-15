import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    { to: "/servicos", label: "Services" },

];

export default function FloatNavbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar flutuante - apenas em telas grandes (md+) */}
            <motion.nav
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="hidden md:flex fixed top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-md shadow-lg p-4 rounded-2xl space-y-4 z-50 flex-col"
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

            {/* Navbar para telas pequenas (mobile) */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-black/80 p-4 z-50">
                <div className="flex items-center justify-between">
                    <h1 className="text-white font-bold text-lg">Bruno.dev</h1>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-2"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`block px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${location.pathname === link.to
                                    ? "bg-white text-black shadow"
                                    : "text-white hover:bg-white/20"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </div>
        </>
    );
}
