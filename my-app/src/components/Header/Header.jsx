import React from 'react';
import './Header.css';
import Logo from './Logo';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="header">
            <Logo />
            <nav className="nav">
                <a href="#news" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('news');
                }}>News</a>
                <a href="#creators" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('creators');
                }}>Creators</a>
                <a href="#sources" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('sources');
                }}>Sources</a>
                <a href="#requests" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('requests');
                }}>Requests</a>
            </nav>
        </header>
    );
};

export default Header;