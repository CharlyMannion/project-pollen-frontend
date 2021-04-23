import React, { Component } from 'react';

class BurgerMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {toggled: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState = (state => ({
      toggled: !state.toggled
    }));
  }
  
  render () {
    return (
      <div className="burger-menu" onClick={this.handleClick}>
        <span className={this.state.toggled ? 'burger-span-1' : ''}></span>
        <span className={this.state.toggled ? 'burger-span-2' : ''}></span>
        <span className={this.state.toggled ? 'burger-span-3' : ''}></span>
    </div>
    )
    
  }
};

export default BurgerMenu;