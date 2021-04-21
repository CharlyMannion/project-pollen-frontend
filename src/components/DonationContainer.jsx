import React from 'react'

function DonationContainer({onChange, value}) {
    const map = {50 : "Fifty"};

    function handleClick(e) {
        onChange(25);
     }

    return (
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
    )
}

export default DonationContainer
