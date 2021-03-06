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
                <DonationButtons donation={donation} handleClick={handleClick}/>
                <div className="donation-slider">
                    <BigSlider donation={donation} onChange={onChange} />
                </div>
                <div className="other-amount">
                    <p> OTHER AMOUNT </p>
                </div>
                <div>
                    <StyledButton style={{marginBottom: "5px", boxShadow: "3px 3px black"}}>Donate</StyledButton>
                </div>
            </div>
        </div>
    )
}

export default Slider
