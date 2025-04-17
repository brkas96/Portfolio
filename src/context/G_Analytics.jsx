// src/GtagPageTracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GtagPageTracker = () => {
    const location = useLocation();

    useEffect(() => {
        const pagePath = window.location.hash.replace("#", "") || "/";

        if (typeof window.gtag === "function") {
            window.gtag("config", "G-B2NR3SKRRK", {
                page_path: pagePath,
            });
        }
    }, [location]);

    return null;
};

export default GtagPageTracker;
