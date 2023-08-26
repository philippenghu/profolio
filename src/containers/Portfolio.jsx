import React, {useState, useEffect} from "react";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";


import Achievements from "./Achievements/Achievements";
import ContactMe from "./ContactMe/ContactMe";
const Portfolio = () =>{
    return (
        <div>
            <Navbar />
            <Introduction />
            <Skills />
            <Achievements />
            <ContactMe />
        </div>
    );
}

export default Portfolio;