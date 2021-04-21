import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Fade from "react-reveal/Fade";
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutUs from './pages/AbousUs'
import ContactUs from './pages/ContactUs'
import StoryList from './pages/StoryList'
import SingleStory from './pages/SingleStory'
import axios from "axios";

class App extends Component {

  componentDidMount() {
    axios.get('https://project-pollen-backend.herokuapp.com/api/stories')
    .then(({data}) => {
      console.log(data[0], "DATA")
    })
  }

  render() {
    return(
      <Fade>
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
      </Fade>
    )
  }
}

export default App;
