import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import FloatNavbar from "./pages/FloatNavbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Servicos from "./pages/Serviços.jsx";
import ConditionalHomeInfos from "./components/Conditional_Infos.jsx";

// Função para aplicar transições
const withTransition = (Component) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="p-4 md:p-8 w-full"
  >
    <Component />
  </motion.div>
);

// Componente que trata rotas animadas
const AnimatedRoutes = () => {
  const location = useLocation();

  // Scroll to top a cada troca de rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={withTransition(Home)} />
        <Route path="/about" element={withTransition(About)} />
        <Route path="/projects" element={withTransition(Projects)} />
        <Route path="/contact" element={withTransition(Contact)} />
        <Route path="/servicos" element={withTransition(Servicos)} />
      </Routes>
    </AnimatePresence>
  );
};

// Componente principal
export default function App() {
  return (
    <HashRouter>
      <div className="">
        <FloatNavbar />

        <div className="">
          <AnimatedRoutes />
        </div>

        {/* Infos laterais */}
        <div className="flex h-screen justify-center text-center mb-20">
          <ConditionalHomeInfos />
        </div>
      </div>
    </HashRouter>
  );
}
