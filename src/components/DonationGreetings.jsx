import React from 'react'

function DonationGreetings({donation}) {
    let donationAmount = parseInt(donation[0]);

    console.log("donations is ",donationAmount);
    if(donationAmount < 1) {
        return <p>Donation is virtue</p>;
    }
    else if(donationAmount >= 1 && donationAmount < 5) {
        return <p>By donating £1, you can provide 2 hot drinks</p>;
    }
    else if(donationAmount >= 5 && donationAmount < 10) {
        return <p>By donating £5, you can provide a hot drink and a meal</p>;
    }
    else if(donationAmount >= 10 && donationAmount < 20) {
        return <p>By donating £10, you can provide a first aid kit</p>;
    }
    else if(donationAmount >= 20 && donationAmount < 50) {
        return <p>By donating £20, you can provide faminine hygine products, razors and baby wipes</p>;
    }
    else {
        return <p>By donating £50, you can provide socks and blankets</p>
    }
}

export default DonationGreetings
