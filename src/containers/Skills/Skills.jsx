import React from "react";
import { Fade } from "react-reveal";
import SoftwareSkills from "../../components/SoftwareSkills/SoftwareSkills";
import { skillsToShow } from "../../PortfolioData";
import "./Skills.scss";

const Skills = () =>{
    
    return (
        <div id="skills" className="skills-container">
          
            <Fade right duration={1000} > 
                <div className="skills-text-container">
                    <h1 className="skills-heading">
                        {skillsToShow.skillTitle}
                    </h1>
                    <h3 className="skills-subheading">
                        {skillsToShow.skillSubtitle}
                    </h3>
                    <div className="software-skills-skill">
                        <SoftwareSkills />
                    </div>
                    <ul className="skills-list">
                        {
                            skillsToShow.skillList.map((skillItem,index) => 
                                <li key={index}>
                                    {skillItem}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;