import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

class SideBar extends React.Component {

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu width={ 350 }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/aboutus">About Us</a>
        <a id="contact" className="menu-item" href="/contactus">Contact Us</a>
        <a id="stories" className="menu-item" href="/stories">Stories</a>
      </Menu>
    );
  }
}

export default SideBar;