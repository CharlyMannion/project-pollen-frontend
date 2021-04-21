import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Fade from "react-reveal/Fade";
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutUs from './pages/AbousUs'
import ContactUs from './pages/ContactUs'
import StoryList from './pages/StoryList'
import SingleStory from './pages/SingleStory'

class App extends Component {

  render() {
    return(
      <Fade>
      <div>
        <Header />
        <Router>
          <AboutUs path='/aboutus'/>
          <ContactUs path='/contactus'/>
          <StoryList path='/stories'/>
          <SingleStory path="/story/:name" />
        </Router>
        <HeroSection />
        <Footer />
      </div>
      </Fade>
    )
  }
}

export default App;
