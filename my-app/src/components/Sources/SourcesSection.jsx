import React from 'react';
import './SourcesSection.css';

const sources = [
    { 
        name: 'CNN', 
        logoUrl: 'https://1000logos.net/wp-content/uploads/2021/04/CNN-logo.png'
    },
    { 
        name: 'NGN', 
        logoUrl: 'https://news.northeastern.edu/wp-content/uploads/2023/07/NGN_Black_Icon.png'
    },
    { 
        name: 'National Geographic', 
        logoUrl: 'https://1000logos.net/wp-content/uploads/2021/04/National-Geographic-logo.png'
    },
    { 
        name: 'NASA', 
        logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7cyiblt27C0oBPY7_380M2xNSNuWkX0PJA&s'
    },
    { 
        name: 'Fox News', 
        logoUrl: 'https://1000logos.net/wp-content/uploads/2020/09/Fox-News-Logo.png'
    },
    { 
        name: 'Business Insider', 
        logoUrl: 'https://images.squarespace-cdn.com/content/v1/5bbb7c1bca525b7d8aa66d29/1718830913407-Y0TI55U1IGGCPX65LJ0S/BI-PrimaryLogo-Black.jpg?format=2500w'
    },
    { 
        name: 'BBC News', 
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/BBC_News_2022_%28Alt%29.svg/1200px-BBC_News_2022_%28Alt%29.svg.png'
    },
    { 
        name: 'Atlantic', 
        logoUrl: 'https://www.poynter.org/wp-content/uploads/2011/01/atlantic_logo_M_1col6CE497_sm.jpeg'
    }
];

const SourcesSection = () => {
    return (
        <section id="sources" className="sources-section">
            <h2>Sources</h2>
            <div className="sources-grid">
                <a href="https://www.cnn.com/" className="source-item" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={sources[0].logoUrl} 
                        alt={sources[0].name}
                        className="source-logo"
                    />
                </a>
                <a href="https://news.northeastern.edu/" className="source-item" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={sources[1].logoUrl} 
                        alt={sources[1].name}
                        className="source-logo"
                    />
                </a>
                <a href="https://www.nationalgeographic.com/" className="source-item" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={sources[2].logoUrl} 
                        alt={sources[2].name}
                        className="source-logo"
                    />
                </a>
                <a href="https://www.nasa.gov/" className="source-item" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={sources[3].logoUrl} 
                        alt={sources[3].name}
                        className="source-logo"
                    />
                </a>
                <a href="https://www.foxnews.com/" className="source-item" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={sources[4].logoUrl} 
                        alt={sources[4].name}
                        className="source-logo"
                    />
                </a>
                <a href="https://www.businessinsider.com/" className="source-item" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={sources[5].logoUrl} 
                        alt={sources[5].name}
                        className="source-logo"
                    />
                </a>
                <a href="https://www.bbc.com/news" className="source-item" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={sources[6].logoUrl} 
                        alt={sources[6].name}
                        className="source-logo"
                    />
                </a>
                <a href="https://www.theatlantic.com/" className="source-item" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={sources[7].logoUrl} 
                        alt={sources[7].name}
                        className="source-logo"
                    />
                </a>
            </div>
        </section>
    );
};

export default SourcesSection;