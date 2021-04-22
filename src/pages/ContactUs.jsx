import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ContactForm from '../components/ContactForm'

class ContactUs extends Component {
  render() {
    return (
      <Fade>
      <body className="text-page">
        <h1> Contact Us</h1>
        <br/>
        <p>
          <strong> Online Advice Team Number: </strong>
          03454 501865.
        </p>
        <br/>
        <p>
          <strong> Email Enquiries: </strong>
          <a href="online@projectpollen.co.uk">online@projectpollen.co.uk</a>
        </p>
        <br/>
        <ContactForm />
      </body>
      </Fade>
    );
  }
}

export default ContactUs;