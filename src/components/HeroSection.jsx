import React from 'react';
import StyledButton from '../styledComponents/StyledButton';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container hero-text">
                <div className="hero-text-container">
                    <h2>1 in 154 people in Manchester are homeless</h2>
                    <p>(SHELTER, 2019)</p>
                    <StyledButton theme='orange'>Stories</StyledButton>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;