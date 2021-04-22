import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class AboutUs extends Component {
  render() {
    return (
      <Fade>
      <body className="text-page">
        <h1> About Us</h1>
        <br/>
        <h2>
            Welcome to pollen - The Monzo of donating
        </h2>
        <br />
        <h2>An app that allows Mancunians to:</h2>
        <br />
        <ul class="bullet">
          <li>- Be cashless</li>
          <li>- Donate one off</li>
          <li>- Gain awareness of systemic issues</li>
          <li>- Connect with the stories of individuals</li>
          <li>- Control where their donation goes</li>
        </ul>
      </body>
      </Fade>
    );
  }
}

export default AboutUs;