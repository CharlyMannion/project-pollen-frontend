import React from 'react'

function DonationButtons({handleClick}) {
    
    return (
        <div className= "donation-buttons">
            <button value ="3" onClick={handleClick}>£1</button>
            <button value="14" onClick={handleClick}>£5</button>
            <button value="25" onClick={handleClick}>£10</button>
            <button value="36" onClick={handleClick}>£20</button>
            <button value="47" onClick={handleClick}>£50</button>
        </div>
    )
}

export default DonationButtons
