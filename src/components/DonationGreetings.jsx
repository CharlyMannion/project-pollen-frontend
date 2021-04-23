import React from 'react'

function DonationGreetings({donation}) {
    let donationAmount = parseFloat(donation[0]);

    console.log("donations is ",donationAmount);
    if(donationAmount < 3.4) {
        return <p>Donation is virtue</p>;
    }
    else if(donationAmount >= 3.4 && donationAmount < 14.3) {
        return <p>By donating £1, you can provide 2 hot drinks</p>;
    }
    else if(donationAmount >= 14.3 && donationAmount < 25) {
        return <p>By donating £5, you can provide a hot drink and a meal</p>;
    }
    else if(donationAmount >= 25 && donationAmount < 35.9) {
        return <p>By donating £10, you can provide a first aid kit</p>;
    }
    else if(donationAmount >= 35.9 && donationAmount < 46.7) {
        return <p>By donating £20, you can provide faminine hygine products, razors and baby wipes</p>;
    }
    else {
        return <p>By donating £50, you can provide socks and blankets</p>
    }
}

export default DonationGreetings
