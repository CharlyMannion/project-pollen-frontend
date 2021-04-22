import React, { useState } from "react";
import '../App.css';
import BigSlider from "./BigSlider";
import DonationButtons from "./DonationButtons";
import DonationGreetings from "./DonationGreetings";
import StyledButton from '../styledComponents/StyledButton';


function Slider() {
    const [donation, onChange] = useState([0]);

    function handleClick(e) {
        onChange([e.target.value]);
    }
    return (
        <div className="donation-selection">
            <div className="donation-card-title">
                <h2>Help us to make a difference.</h2>
            </div>
            <div className="donation-container">
            <div className="donation-greetings">
                <DonationGreetings donation={donation}/>
            </div>
                <DonationButtons handleClick={handleClick}/>
                <BigSlider donation={donation} onChange={onChange} />
                <div className="other-amount">
                    <a href="#" > OTHER AMOUNT </a>
                <StyledButton style={{display: "block", margin: "auto"}}>Donate</StyledButton>
                </div>   
            </div>
        </div>
    )
}

export default Slider
