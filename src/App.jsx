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
import EfeitoFloco from "./context/Efeito_Floco.jsx";
import EfeitoMatrix from "./context/Efeito_Matrix.jsx";
import EfeitoScan from "./context/Efeito_Scan.jsx";
import EfeitoLinhas from "./context/Efeito_Linhas.jsx";
import LoadingScreen from "./context/Loading.jsx";
import Terminal from "./context/Terminal.jsx";
import Mascot from "./context/Mascot.jsx";
import GtagPageTracker from "./context/G_Analytics.jsx";
import "./i18n/i18n.js"
import Translation from "./i18n/LanguageSelector.jsx";

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
    <>
      <LoadingScreen />
      <Translation />
      <HashRouter>
        <div className="">
          <EfeitoLinhas />

          <FloatNavbar />
          
          <div className="">
            <AnimatedRoutes />
            <GtagPageTracker />
          </div>

          {/* Infos laterais */}
          <div className="flex h-screen justify-center text-center">
            <ConditionalHomeInfos />
          </div>
        </div>
      </HashRouter>
    </>

  );
}
