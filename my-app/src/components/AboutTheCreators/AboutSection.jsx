import React from 'react';
import './AboutSection.css';

const creators = [
    { name: 'Ahana', imageUrl: '/path-to-ahana-image.jpg' },
    { name: 'Gia', imageUrl: '/path-to-gia-image.jpg' },
    { name: 'Mimi', imageUrl: '/path-to-mimi-image.jpg' },
    { name: 'Ellie', imageUrl: '/path-to-ellie-image.jpg' },
];

const AboutSection = () => {
    return (
        <section id="creators" className="about-section">
            <h2 className="section-title">About the Creators</h2>
            <p className="creator-names">Ahana, Gia, Mimi, Ellie</p>
            
            <div className="about-content">
                <div className="why-readly">
                    <h3>Why Readly?</h3>
                    <p>We created Readly to make staying informed easier, more intuitive and more efficient, giving readers the essential news without the overwhelm.</p>
                </div>
                
                <div className="our-interests">
                    <h3>Our Interests</h3>
                    <p>We're passionate about technology, innovation, and finding creative solutions to everyday problems. We also love exploring topics like sustainability, design, and the intersection of tech and daily life.</p>
                </div>
            </div>

            <div className="creator-grid">
                {creators.map((creator) => (
                    <div key={creator.name} className="creator-card">
                        <img src={creator.imageUrl} alt={creator.name} />
                        <p>{creator.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;