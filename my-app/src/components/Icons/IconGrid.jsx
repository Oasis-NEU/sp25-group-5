import React from 'react';
import './IconGrid.css';

const icons = [
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
];

const IconGrid = () => {
    return (
        <div className="icon-grid">
            {icons.map((icon) => (
                <div key={icon.id} className="icon-item">
                    <img src={icon.icon} alt={icon.label} />
                    <p>{icon.label}</p>
                </div>
            ))}
        </div>
    );
};

export default IconGrid;