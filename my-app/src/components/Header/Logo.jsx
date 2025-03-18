import React from 'react';
import './Header.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <div className="book-logo">
                <img src="/readly-book-logo.png" alt="Readly Book Logo" />
            </div>
            <div className="text-container">
                <h1 className="logo">readly.</h1>
                <p className="tagline">we put the neu in news</p>
            </div>
        </div>
    );
};

export default Logo;