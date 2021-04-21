import React, { useState, useEffect } from "react";
import '../App.css';


function Slider() {
    const [value, onChange] = useState(0);
    const map = {50 : "Fifty"};
    useEffect(() => {
        const element = document.querySelector(".bubble");
        if(element) {
            element.style.left = `${Number(value / 4)}`;
        }
    });

    function handleClick(e) {
       console.log("button clicked ");
       onChange(25);
    }

    return (
        <div className="donation-selection">
            <div className="donation-card-title">
                <h2>Help us to make a difference.</h2>
            </div>
            <div className="donation-container">
                <div>
                    <p>Donation {map[value]} is virtue</p>
                </div>
                <button onClick= {handleClick}>click me</button>
                <div className="slider-parent">
                    <input 
                    type = 'range'
                    min = '0'
                    max = '100'
                    step = '5'
                    value = {value}
                    onChange = {({ target: {value: radius} }) =>{
                        onChange(radius);
                    }}
                    />
                    <div className="bubble"> {value} </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
