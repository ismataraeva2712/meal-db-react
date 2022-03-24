import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div><h1>AaBaCaS restaurent</h1></div>
            <div>
                <a href="/home">Home</a><a href="/menue">Menue</a><a href="/order">Order</a><a href="/about">About</a>
            </div>

        </div>
    );
};

export default Header;