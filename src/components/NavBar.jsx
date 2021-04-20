import React, { Component } from 'react';
import {Link} from '@reach/router';
import StyledButton from '../styledComponents/StyledButton';

class NavBar extends Component {
    state = {
        categories: ['About Us', 'Contact Us', 'Stories']
    }

    render() {
        const {categories} = this.state
        return (
            <nav>
                {categories.map(category => {
                    return <Link to ={`/${category.toLowerCase().replace(/\s/g, "")}`} key={category}><StyledButton>{category}</StyledButton></Link>
                })}
            </nav>
        );
    }
}

export default NavBar;