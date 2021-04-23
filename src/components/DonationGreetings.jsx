import React from 'react'

function DonationGreetings({donation}) {
    let donationAmount = parseFloat(donation[0]);

    console.log("donations is ",donationAmount);
    if(donationAmount < 2.4) {
        return <p>Donation is virtue</p>;
    }
    else if(donationAmount >= 2.4 && donationAmount < 13.7) {
        return <p>By donating £1, you can provide 2 hot drinks</p>;
    }
    else if(donationAmount >= 13.7 && donationAmount < 24.9) {
        return <p>By donating £5, you can provide a hot drink and a meal</p>;
    }
    else if(donationAmount >= 24.9 && donationAmount < 36.3) {
        return <p>By donating £10, you can provide a first aid kit</p>;
    }
    else if(donationAmount >= 36.3 && donationAmount < 47.6) {
        return <p>By donating £20, you can provide faminine hygine products, razors and baby wipes</p>;
    }
    else {
        return <p>By donating £50, you can provide socks and blankets</p>
    }
}

export default DonationGreetings
