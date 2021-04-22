import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import HeroSection from '../components/HeroSection';
import StoryCarousel from '../components/StoryCarousel';
import QuoteSection from '../components/QuoteSection';
import CharitySection from '../components/CharitySection';


class Landing extends Component {
    render() {
        return (
          <Fade>
              <HeroSection />
              <StoryCarousel />
              <QuoteSection />
              <CharitySection />
          </Fade>
        );
      }
}

export default Landing;