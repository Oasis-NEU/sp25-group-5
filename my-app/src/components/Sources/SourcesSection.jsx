import React from 'react';
import './SourcesSection.css';

const sources = [
    { name: 'CNN', logoUrl: '/path-to-cnn-logo.png' },
    { name: 'NGN', logoUrl: '/path-to-ngn-logo.png' },
    { name: 'National Geographic', logoUrl: '/path-to-natgeo-logo.png' },
    { name: 'NASA', logoUrl: '/path-to-nasa-logo.png' },
    { name: 'Fox News', logoUrl: '/path-to-fox-logo.png' },
    { name: 'Business Insider', logoUrl: '/path-to-bi-logo.png' },
    { name: 'BBC News', logoUrl: '/path-to-bbc-logo.png' },
    { name: 'Atlantic', logoUrl: '/path-to-atlantic-logo.png' }
];

const SourcesSection = () => {
    return (
        <section id="sources" className="sources-section">
            <h2>Sources</h2>
            <div className="sources-grid">
                {sources.map((source) => (
                    <img 
                        key={source.name} 
                        src={source.logoUrl} 
                        alt={source.name}
                        className="source-logo"
                    />
                ))}
            </div>
        </section>
    );
};

export default SourcesSection;