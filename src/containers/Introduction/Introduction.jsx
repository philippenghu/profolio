import React from "react";
import { introduction } from "../../PortfolioData";
import ProfileIcons from "../../components/ProfileIcons/ProfileIcons";
import Button from "../../utils/Button/Button";
import "./Introduction.scss";

const Introduction = () => {

    return (
     
            <div className="introduction-container">
                <div className="about">
                    <h1 className="greeting-text">
                        Hi, I am {introduction.firstName}
                    </h1>
                    <p className="greeting-text-p subTitle-intro"> 
                        {introduction.introductionText}
                    </p>
                    <ProfileIcons />
                    <div className="contact-button-div">
                        <Button text={introduction.contactButtonText} href="#contact" />
                        <Button text={introduction.resumeButtonText} href={introduction.resumeLink} newTab={true} />
                    </div>
                </div> 
            </div>
 

    );

}

export default Introduction;