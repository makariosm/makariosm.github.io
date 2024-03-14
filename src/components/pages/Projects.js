import React, { useEffect } from "react";
import '../../App.css';
import Cards from "../projects_stuff/ProjectCards";
import ProjectsHeader from "../projects_stuff/ProjectsHeader";
import Footer from "../Footer";

export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <>
            <ProjectsHeader />
            <Cards />
            <Footer />
        </>
    );
}
