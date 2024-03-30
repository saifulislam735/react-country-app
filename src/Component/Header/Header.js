import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <a href="/menu">Menu</a>
                <a href="/contact">Contact</a>
                <a href="/others">Others</a>
            </nav>
        </div>
    );
};

export default Header;