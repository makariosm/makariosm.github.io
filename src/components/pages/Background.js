import React, { useEffect } from "react";
import '../../App.css';
import BackgroundHeader from "../background_stuff/BackgroundHeader";
import BackgroundContent from "../background_stuff/BackgroundContent";
import Footer from "../background_stuff/miscellaneous/Footer";

export default function Background() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <>
            <BackgroundHeader />
            <BackgroundContent />
            <Footer />
        </>
    )
}
