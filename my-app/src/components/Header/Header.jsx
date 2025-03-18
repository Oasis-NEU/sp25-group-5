import React from 'react';
import './Header.css';
import Logo from './Logo';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <nav className="nav">
                <a href="/news">News</a>
                <a href="/creators">Creators</a>
                <a href="/sources">Sources</a>
                <a href="/requests">Requests</a>
            </nav>
        </header>
    );
};

export default Header;