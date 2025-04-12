import { useLocation } from "react-router-dom";
import HomeInfos from "../components/Home_Infos";
import AboutInfos from "../components/About_Infos";
import ProjectsInfos from "../components/Projects_Infos";
import ContactInfos from "../components/Contact_Infos";
import ServicosInfos from "./Serviços_Infos";

export default function ConditionalHomeInfos() {
    const location = useLocation();

    const wrapperStyle = "text-center";

    switch (location.pathname) {
        case "/":
            return (
                <div className={wrapperStyle}>
                    <HomeInfos />
                </div>
            );
        case "/about":
            return (
                <div className={wrapperStyle}>
                    <AboutInfos />
                </div>
            );
        case "/projects":
            return (
                <div className={wrapperStyle}>
                    <ProjectsInfos />
                </div>
            );
        case "/contact":
            return (
                <div className={wrapperStyle}>
                    <ContactInfos />

                </div>
            )
        case "/servicos":
            return (
                <div className={wrapperStyle}>
                    <ServicosInfos />

                </div>
            )
        default:
            return null;
    }
}
