import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class AboutUs extends Component {
  render() {
    return (
      <Fade>
      <body className="text-page">
        <h1> About Us</h1><br />
        <p>Pollen was created to change the way we think about homelessness and raise money for those who need it most.</p><br />
        <p>Look around Manchester's City Centre for artwork representing the homeless community. Within the artwork, you will find a QR Code - scan this on your phone, and each QR code will lead you to a different story.</p><br />
        <p>We have partnered up with Manchester Homeless Charity - all donations go directly to them to help fund their evening and weekend service to help Manchester's growing homeless community.</p><br />
      </body>
      </Fade>
    );
  }
}

export default AboutUs;