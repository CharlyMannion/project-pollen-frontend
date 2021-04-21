import React, { useState } from "react";
import '../App.css';
import BigSlider from "./BigSlider";


function Slider() {
    const [donation, onChange] = useState([0]);
    const msg = () => {console.log('Current donation ' , donation);}
    return (
        <div className="donation-selection">
            <div className="donation-card-title">
                <h2>Help us to make a difference.</h2>
            </div>
            <BigSlider msg={msg} donation={donation} onChange={onChange} />     
        </div>
    )
}

export default Slider
