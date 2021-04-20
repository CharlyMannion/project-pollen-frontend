import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

class App extends Component {

  render() {
    return(
      <div>
        <Header />
        <NavBar />

        <Router>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
