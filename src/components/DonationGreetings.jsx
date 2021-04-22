import React from 'react'

function DonationGreetings({donation}) {
    let donationAmount = parseInt(donation[0]);

    console.log("donations is ",donationAmount);
    if(donationAmount < 1) {
        return <p>Donation is virtue</p>;
    }
    else if(donationAmount >= 1 && donationAmount < 5) {
        return <p>Donation is virtue1</p>;
    }
    else if(donationAmount >= 5 && donationAmount < 10) {
        return <p>Donation is virtue5</p>;
    }
    else if(donationAmount >= 10 && donationAmount < 50) {
        return <p>Donation is virtue10</p>;
    }
    else if(donationAmount >= 50 && donationAmount < 100) {
        return <p>Donation is virtue50</p>;
    }
    else {
        return <p>Donation is virtue100</p>
    }
}

export default DonationGreetings
