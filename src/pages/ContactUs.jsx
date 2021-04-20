import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class ContactUs extends Component {
    render() {
        return (
          <Fade>
          <body>
            <h1> Contact Us</h1>
            <p>
              <strong> Online Advice Team Number: </strong>
              03454 501865.
            </p>
            <p>
              <strong> Email Enquiries: </strong>
              <a href="online@projectpollen.co.uk">online@projectpollen.co.uk</a>
            </p>
          </body>
          </Fade>
        );
      }
}

export default ContactUs;