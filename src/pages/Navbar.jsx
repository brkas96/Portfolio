import { Moon, Sun } from "lucide-react"; // Ícones para claro e escuro
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="space-x-4">
                <Link to="/" className="hover:text-gray-400">Home</Link>
                <Link to="/about" className="hover:text-gray-400">About</Link>
                <Link to="/projects" className="hover:text-gray-400">Projects</Link>
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                <Link to="/servicos" className="hover:text-gray-400">Services</Link>

                {/* Botão de Modo Escuro/Claro 
                <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-gray-700">
                    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>*/}
            </div>


        </nav>
    );
}
