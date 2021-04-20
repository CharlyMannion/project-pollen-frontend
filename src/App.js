import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutUs from './pages/AbousUs'
import ContactUs from './pages/ContactUs'
import StoryList from './pages/StoryList'
import SingleStory from './pages/SingleStory'

class App extends Component {

  render() {
    return(
      <div>
        <Header />
        <NavBar />
        <Router>
          <AboutUs path='/aboutus'/>
          <ContactUs path='/contactus'/>
          <StoryList path='/stories'/>
          <SingleStory path="/story/:name" />
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
