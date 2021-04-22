import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Fade from "react-reveal/Fade";
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import StoryList from './pages/StoryList';
import SingleStory from './pages/SingleStory';


class App extends Component {

  render() {
    return(
      <Fade>
      <div>
        <Header />
        <Router>
          <Landing path='/' />
          <AboutUs path='/aboutus' />
          <ContactUs path='/contactus' />
          <StoryList path='/stories' />
          <SingleStory path="/story/:id" />
        </Router>
        <Footer />
      </div>
      </Fade>
    )
  }
}

export default App;
