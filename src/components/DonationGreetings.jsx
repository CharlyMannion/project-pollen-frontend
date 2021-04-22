import React from 'react'

function DonationGreetings({donation, onChange}) {
    let donationAmount = parseInt(donation[0]);

    console.log("donations is ",donationAmount);
    switch(donationAmount) {

        case 1 <= donationAmount < 5: 
            return <p>Donation is virtue1</p>;

        case "5": 
            return <p>hello5</p>

        case "10": 
            return <p>hello10</p>

        case "50": 
            return <p>hello50</p>

        case "100": 
            return <p>hello100</p>

        default:
            return <p>Donation is virtue</p>

    }
    
    return (
        <div>
        </div>
    )
}

export default DonationGreetings
