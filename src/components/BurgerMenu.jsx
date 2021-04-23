import React, { Component } from 'react';

class BurgerMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {toggled: false};

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
    
  // }
  
  render () {
    return (
      <div className="burger-menu" onClick={() => {
        this.setState = (state => ({
          toggled: true
        }));
      }}>
        <span className={this.state.toggled ? 'burger-span-1' : ''}></span>
        <span className={this.state.toggled ? 'burger-span-2' : ''}></span>
        <span className={this.state.toggled ? 'burger-span-3' : ''}></span>
    </div>
    )
    
  }
};

export default BurgerMenu;