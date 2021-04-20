import React, { Component } from 'react';
import {Link} from '@reach/router';

class NavBar extends Component {
    state = {
        categories: ['About Us', 'Contact Us', 'Stories']
    }

    render() {
        const {categories} = this.state
        return (
            <nav>
                {categories.map(category => {
                    return <Link to ={`/sections/?category=${category}`} key={category}><button>{category}</button></Link>
                })}
            </nav>
        );
    }
}

export default NavBar;