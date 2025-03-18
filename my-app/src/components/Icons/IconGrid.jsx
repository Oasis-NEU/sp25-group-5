import React from 'react';
import './IconGrid.css';

const icons = [
    { id: 1, icon: '/icons/husky.jpg', label: 'Husky' },
    { id: 2, icon: '/icons/government.png', label: 'Campus' },
    { id: 3, icon: '/icons/music.png', label: 'Music' },
    { id: 4, icon: '/icons/cooking.png', label: 'Food' },
    { id: 5, icon: '/icons/science.png', label: 'Science' },
    { id: 6, icon: '/icons/weather.png', label: 'Weather' },
    { id: 7, icon: '/icons/globe.png', label: 'World' },
    { id: 8, icon: '/icons/sports.png', label: 'Sports' },
    { id: 9, icon: '/icons/art.png', label: 'Arts' },
    { id: 10, icon: '/icons/graph.png', label: 'Business' },
    { id: 11, icon: '/icons/camera.png', label: 'Entertainment' },
    { id: 12, icon: '/icons/space.png', label: 'Space' }
];

const IconGrid = () => {
    return (
        <div className="hero-section">
            <div className="brand-content">
                <h1 className="brand-title">readly.</h1>
                <p className="brand-tagline">we put the neu in news</p>
            </div>
            
            <div className="icon-grid-container">
                <div className="icon-grid">
                    {icons.map((icon) => (
                        <div key={icon.id} className="icon-item">
                            <img src={icon.icon} alt={icon.label} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconGrid;