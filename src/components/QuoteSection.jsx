import React from 'react';
import image from "../images/william-mccue-1jZbU_XuyvU-unsplash.jpg";

const QuoteSection = () => {
    return (
        <section className="quote-section">
            <img src={image} alt="" />
            <div className="quote-container">
                <h3>Manchester has the highest number of deaths of homeless people</h3>
                <p>(THE GUARDIAN, 2019)</p>
            </div>
        </section>
    )
}

export default QuoteSection;