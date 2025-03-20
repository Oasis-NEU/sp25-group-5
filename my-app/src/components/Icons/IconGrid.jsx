import React, { useState, useEffect } from 'react';
import './IconGrid.css';
import { Link } from 'react-router-dom';

const TypeWriter = ({ text }) => {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (!isDeleting && currentText === text) {
            // Very short pause before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);
        } else if (isDeleting && currentText === '') {
            // Minimal pause before typing again
            timeout = setTimeout(() => {
                setIsDeleting(false);
            }, 400); // Reduced from 1500ms to 400ms
        } else {
            timeout = setTimeout(() => {
                setCurrentText(prev => {
                    if (isDeleting) {
                        return prev.slice(0, -1);
                    }
                    return text.slice(0, prev.length + 1);
                });
            }, isDeleting ? 50 : 100);
        }

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, text]);

    return <span className="typewriter">{currentText}</span>;
};

const icons = [
    { 
        id: 1, 
        icon: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/111.png',
        link: '/news'
    },
    { 
        id: 2, 
        icon: '/icons/government.png',
        link: '/politics'
    },
    { 
        id: 3, 
        icon: '/icons/music.png',
        link: '/music'
    },
    { 
        id: 4, 
        icon: '/icons/cooking.png',
        link: '/cooking'
    },
    { 
        id: 5, 
        icon: '/icons/science.png',
        link: '/science'
    },
    { 
        id: 6, 
        icon: '/icons/weather.png',
        link: '/weather'
    },
    { 
        id: 7, 
        icon: '/icons/globe.png',
        link: '/world'
    },
    { 
        id: 8, 
        icon: '/icons/sports.png',
        link: '/sports'
    },
    { 
        id: 9, 
        icon: '/icons/art.png',
        link: '/art'
    },
    { 
        id: 10, 
        icon: '/icons/graph.png',
        link: '/business'
    },
    { 
        id: 11, 
        icon: '/icons/camera.png',
        link: '/film'
    },
    { 
        id: 12, 
        icon: '/icons/space.png',
        link: '/space'
    }
];

const IconGrid = () => {
    return (
        <div className="hero-section">
            <div className="brand-content">
                <h1 className="brand-title">
                    <TypeWriter text="readly." />
                </h1>
                <p className="brand-tagline">we put the neu in news</p>
            </div>

            <div className="icon-grid-container">
                <div className="icon-grid">
                    {icons.map((icon) => (
                         icon.link ? (
                            <Link to={icon.link} key={icon.id}>
                                <div
                                    className="icon-item"
                                    role="button"
                                    tabIndex={0}
                                >
                                    <img src={icon.icon} alt="" />
                                </div>
                            </Link>
                        ) : (
                            <div
                                key={icon.id}
                                className="icon-item"
                                role="button"
                                tabIndex={0}
                            >
                                <img src={icon.icon} alt="" />
                            </div>
                        )
                        ))}
                </div>
            </div>
        </div>
    );
};

export default IconGrid;