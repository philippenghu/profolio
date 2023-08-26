import RenderLottie from "../../components/RenderLottie/RenderLottie";
import ProficientLottie from "../../assets/lottie/Proficiency-lottie.json";

import "./Proficiency.scss"
const Proficiency = () => {
    return (
        <div id="proficiency" className="prof-container">
     
            <div className="prof-lottie">
                <div className="lottie-wrapper">
                    <RenderLottie animationJSON={ProficientLottie} />
                </div>
            </div>
        </div>
    );
}

export default Proficiency;