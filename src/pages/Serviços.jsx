// src/components/FloatNavbar.jsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


export default function Servicos() {


    const location = useLocation();

    return (
        <div className="left-cards bg-transparent text-white">
            <h1 className="text-4xl font-bold">Services</h1>
            <p className="mt-4 text-xl">Check out some of the services I've ofer!</p>
        </div>


    );
}


