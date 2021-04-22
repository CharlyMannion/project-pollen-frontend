import React, { useState } from "react";
import '../App.css';
import BigSlider from "./BigSlider";
import StyledButton from '../styledComponents/StyledButton';


function Slider() {
    const [donation, onChange] = useState([0]);

    function handleClick(e) {
        console.log("hello");
        onChange([5]);
    }
    return (
        <div className="donation-selection">
            <div className="donation-card-title">
                <h2>Help us to make a difference.</h2>
            </div>
            <div className="donation-container">
                <div className="donation-details">
                    <p>Donation {donation} is virtue</p>
                </div>
                <div className="row">
                    <button onClick= {handleClick}>£1</button>
                    <button>£5</button>
                    <button>£10</button>
                </div>
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
