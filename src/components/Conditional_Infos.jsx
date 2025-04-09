import { useLocation } from "react-router-dom";
import HomeInfos from "../components/Home_Infos";
import AboutInfos from "../components/About_Infos";
import ProjectsInfos from "../components/Projects_Infos";
import ContactInfos from "../components/Contact_Infos";

export default function ConditionalHomeInfos() {
    const location = useLocation();

    const wrapperStyle = "flex flex-col h-screen";

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
        default:
            return null;
    }
}
