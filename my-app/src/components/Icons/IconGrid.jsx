import React from 'react';
import './IconGrid.css';

const icons = [
    { id: 1, icon: '🐺', label: '' },  // Wolf
    { id: 2, icon: '🏛️', label: '' },  // Building
    { id: 3, icon: '🎵', label: '' },  // Music
    { id: 4, icon: '👨‍🍳', label: '' }, // Chef
    { id: 5, icon: '⚛️', label: '' },  // Atom
    { id: 6, icon: '☀️', label: '' },  // Sun
    { id: 7, icon: '🌍', label: '' },  // Globe
    { id: 8, icon: '🧠', label: '' },  // Brain
    { id: 9, icon: '🎸', label: '' },  // Guitar
    { id: 10, icon: '📈', label: '' }, // Graph
    { id: 11, icon: '🎥', label: '' }, // Camera
    { id: 12, icon: '🌙', label: '' }, // Moon
];

const IconGrid = () => {
    return (
        <div className="icon-grid">
            {icons.map((icon) => (
                <div key={icon.id} className="icon-item">
                    <span>{icon.icon}</span>
                    <p>{icon.label}</p>
                </div>
            ))}
        </div>
    );
};

export default IconGrid;