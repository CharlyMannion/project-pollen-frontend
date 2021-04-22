import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import HeroSection from '../components/HeroSection';
import StoryCarousel from '../components/StoryCarousel';
import QuoteSection from '../components/QuoteSection';
import ArtistSection from '../components/ArtistSection';
import CharitySection from '../components/CharitySection';
import BigSlider from '../components/BigSlider';
import Slider from '../components/Slider';


class Landing extends Component {
    render() {
        return (
          <Fade>
              <HeroSection />
              <StoryCarousel />
              <QuoteSection />
              <Slider />
              <ArtistSection />
              <CharitySection />
          </Fade>
        );
    }
}

export default Landing;