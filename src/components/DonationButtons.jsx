import React from 'react'

function DonationButtons({handleClick}) {
    return (
        <div>
            <button value ="1" onClick={handleClick}>£1</button>
            <button value="5" onClick={handleClick}>£5</button>
            <button value="10" onClick={handleClick}>£10</button>
            <button value="50" onClick={handleClick}>£50</button>
            <button value="100" onClick={handleClick}>£100</button>
        </div>
    )
}

export default DonationButtons