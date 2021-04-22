import React from 'react';
import logo from "../images/pollen_logo.png";

const Footer = () => {
   
    return (
        <footer className="App-footer">
            <div className="footer-container flex">
                <div className="logo-container">
                    <img src={logo} alt="company logo" className="logo"></img>
                    <h1 className="logo-text">Pollen</h1>
                </div>
                <div>
                    <ul style={{listStyle: 'none', display: 'flex'}}>
                        <li>
                           <a href="/">Home</a>
                        </li>
                        <li>
                           <a href="/aboutus">About Us</a>
                        </li>
                        <li>
                           <a href="/contactus">Contact Us</a>
                        </li>
                        <li>
                           <a href="/stories">Stories</a>
                        </li>
                    </ul>
                </div>
                <p>Registered Charity: XXXX XXXX</p>
            </div>
            
        </footer>
    )
}

export default Footer;