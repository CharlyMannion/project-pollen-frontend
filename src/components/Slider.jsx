import React, { useState, useEffect } from "react";
import '../App.css';


function Slider() {
    const [value, onChange] = useState(1);

    useEffect(() => {
        const element = document.querySelector(".bubble");
        if(element) {
            element.style.left = `${Number(value / 4)}`;
        }
    });

    return (
        <div className="donation-selection">
            <div className="slider-parent">
                <input 
                type = 'range'
                min = '1'
                max = '100'
                value = {value}
                onChange = {({ target: {value: radius} }) =>{
                    onChange(radius);
                }}
                />
                <div className="bubble"> {value} </div>
            </div>
        </div>
    )
}

export default Slider
