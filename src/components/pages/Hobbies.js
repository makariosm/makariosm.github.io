import React, { useEffect } from "react";
import '../../App.css';
import HobbiesHeader from "../hobbies_stuff/HobbiesHeader";
import HobbyItems from "../hobbies_stuff/HobbyItems";

export default function Hobbies() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

    return (
        <>
            <HobbiesHeader />
            <HobbyItems />
        </>
    )
}
