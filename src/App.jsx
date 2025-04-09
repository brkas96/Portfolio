import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Navbar from "../src/pages/Navbar.jsx";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Projects from "../src/pages/Projects.jsx";
import Contact from "../src/pages/Contact.jsx";
import Servicos from "./pages/Serviços.jsx";
import ConditionalHomeInfos from "./components/Conditional_Infos.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col flex-1 overflow-y-auto h-screen md:w-1/3">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/servicos" element={<Servicos />} />
            </Routes>

          </div>
          <div className="md:w-2/3">
            <ConditionalHomeInfos />
          </div>
        </div>


      </HashRouter >


    </>


  );
}

export default App;
