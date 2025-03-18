import React from 'react';
import './IconGrid.css';

const icons = [
<<<<<<< HEAD
    { id: 1, icon: '/src/IconImages/Husky.png', label: '' },
    { id: 2, icon: '/src/IconImages/Politics.png', label: '' },
    { id: 3, icon: '/src/IconImages/Music.png', label: '' },
    { id: 4, icon: '/src/IconImages/Cooking.png', label: '' },
    { id: 5, icon: '/src/IconImages/Science.png', label: '' },
    { id: 6, icon: '/src/IconImages/Weather.png', label: '' },
    { id: 7, icon: '/src/IconImages/WWNews.png', label: '' },
    { id: 8, icon: '/src/IconImages/Sports.png', label: '' },
    { id: 9, icon: '/src/IconImages/Arts.png', label: '' },
    { id: 10, icon: '/src/IconImages/Finance.png', label: '' },
    { id: 11, icon: '/src/IconImages/Film.png', label: '' },
    { id: 12, icon: '/src/IconImages/Astrology.png', label: '' },
=======
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
>>>>>>> 0ce3ec32799cdfe787317cf2300dbdccd9acd507
];

const IconGrid = () => {
    return (
<<<<<<< HEAD
        <div className="icon-grid">
            {icons.map((icon) => (
                <div key={icon.id} className="icon-item">
                    <img src={icon.icon} alt={icon.label} />
                    <p>{icon.label}</p>
=======
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
>>>>>>> 0ce3ec32799cdfe787317cf2300dbdccd9acd507
                </div>
            </div>
        </div>
    );
};

export default IconGrid;