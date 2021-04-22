import React from 'react'

function DonationButtons({handleClick}) {
    
    return (
        <div className= "donation-buttons">
            <button value ="3.4" onClick={handleClick}>£1</button>
            <button value="14.3" onClick={handleClick}>£5</button>
            <button value="25" onClick={handleClick}>£10</button>
            <button value="35.9" onClick={handleClick}>£20</button>
            <button value="46.7" onClick={handleClick}>£50</button>
        </div>
    )
}

export default DonationButtons
