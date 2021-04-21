import React, { Component } from 'react';
import {Link} from '@reach/router';
import StyledButton from '../styledComponents/StyledButton';
import Fade from "react-reveal/Fade";
import logo from "../images/pollen_logo.png";

class NavBar extends Component {
    state = {
        categories: ['About Us', 'Contact Us', 'Stories']
    }

    render() {
        const {categories} = this.state
        return (
            <Fade>
            <nav>
                <div className="container">
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                        <div className="logo-container">
                            <img src={logo} alt="company logo" className="logo"></img>
                            <h1 className="logo-text">Pollen</h1>
                        </div>
                    </Link>
                    <ul>
                        <li>
                            {categories.map(category => {
                                return <Link to ={`/${category.toLowerCase().replace(/\s/g, "")}`} key={category} className="nav-link">{category}</Link>
                            })}
                        </li>
                    </ul>
                    <StyledButton>Donate</StyledButton>
                </div>
            </nav>
           </Fade>
        );
    }
}

export default NavBar;