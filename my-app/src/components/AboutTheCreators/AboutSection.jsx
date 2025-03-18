import React from 'react';
import './AboutSection.css';

const creators = [
    { name: 'Ahana', imageUrl: '../../../public/ourfaces/ahana.png' },
    { name: 'Gia', imageUrl: '../../../public/ourfaces/gia.png' },
    { name: 'Mimi', imageUrl: '../../../public/ourfaces/mimi.png' },
    { name: 'Ellie', imageUrl: '../../../public/ourfaces/ellie.png' },
];

const AboutSection = () => {
    return (
        <section id="creators" className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2 className="section-title">About the Creators</h2>
                    <p className="creator-names">Ahana, Gia, Mimi, Ellie</p>

                    <div className="about-content">
                        <div className="why-readly">
                            <h3>Why Readly?</h3>
                            <p>We created Readly to make staying informed easier and more efficient, giving readers the essential news without the overwhelm.</p>
                        </div>

                        <div className="our-interests">
                            <h3>Our Interests</h3>
                            <p>We're passionate about technology, innovation, and finding creative solutions to everyday problems. We also love exploring topics like sustainability, design, and the intersection of tech and daily life.</p>
                        </div>
                    </div>
                </div>

                <div className="creator-grid">
                    {creators.map((creator) => (
                        <div key={creator.name} className="creator-card">
                            <div className="image-container">
                                <img src={creator.imageUrl} alt={`${creator.name}`} />
                            </div>
                            <p>{creator.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;