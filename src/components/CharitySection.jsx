import React from "react";
import StyledButton from '../styledComponents/StyledButton';
import image1 from '../images/icons/1.png';
import image2 from '../images/icons/2.png'
import image3 from '../images/icons/3.png'
import image4 from '../images/icons/4.png'
import image5 from '../images/icons/5.png'

const CharitySection = ()=> {
    return (
        <section className="charity-section container">
            <h2>The Charity</h2>
            <p>Your donations go directly to Manchester Homeless Charity, an evening and weekend service, offering the following to those who need it most:</p>
            <div className="charity-container">
                <div className="icon-container">
                    <img src={image1} className="charity-icon" alt=""/>
                    <p>Hot Meals</p>
                </div>
                <div className="icon-container">
                    <img src={image2} className="charity-icon" alt=""/>
                    <p>Showers</p>
                </div>
                <div className="icon-container">
                    <img src={image3} className="charity-icon" alt=""/>
                    <p>Beds</p>
                </div>
                <div className="icon-container">
                    <img src={image4} className="charity-icon" alt=""/>
                    <p>Signposting</p>
                </div>
                <div className="icon-container">
                    <img src={image5} className="charity-icon" alt=""/>
                    <p>Medical Support</p>
                </div>
            </div>
            <StyledButton>Visit their Website</StyledButton>
            
        </section>
    );
}

export default CharitySection;