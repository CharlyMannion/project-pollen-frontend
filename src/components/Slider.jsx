import React, { useState } from "react";
import '../App.css';
import BigSlider from "./BigSlider";


function Slider() {
    const [donation, onChange] = useState([0]);
    return (
        <div className="donation-selection">
            <div className="donation-card-title">
                <h2>Help us to make a difference.</h2>
            </div>
            <div className="donation-container">
                <div className="donation-details">
                    <p>Donation {donation} is virtue</p>
                </div>
                <BigSlider donation={donation} onChange={onChange} />     
            </div>
        </div>
    )
}

export default Slider
