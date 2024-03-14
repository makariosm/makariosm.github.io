import React, { useEffect } from 'react';
import '../../App.css';
import HeroSection from '../home_stuff/HeroSection';
import Footer from '../Footer';
import AboutMe from '../home_stuff/AboutMe';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <>
            <HeroSection />
            <AboutMe />
            <Footer />
        </>
    );
}

export default Home;
