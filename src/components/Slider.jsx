import React, { useState, useEffect } from "react";
import DonationContainer from "./DonationContainer";
import '../App.css';


function Slider() {
    const [value, onChange] = useState(0);
    useEffect(() => {
        const element = document.querySelector(".bubble");
        if(element) {
            element.style.left = `${Number(value / 4)}`;
        }
    });

    return (
        <div className="donation-selection">
            <div className="donation-card-title">
                <h2>Help us to make a difference.</h2>
            </div>
            <DonationContainer 
            onChange = {onChange}
            value = {value}
            />
        </div>
    )
}

export default Slider
