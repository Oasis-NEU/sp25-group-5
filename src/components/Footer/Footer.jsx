import React from 'react';
import './Footer.css';

const tools = [
    { id: 1, name: 'React', icon: '/tools/react.png' },
    { id: 2, name: 'VS Code', icon: '/tools/vs.png' },
    { id: 3, name: 'JavaScript', icon: '/tools/javascript.png' },
    { id: 4, name: 'Python', icon: '/tools/python.png' },
    { id: 5, name: 'HTML', icon: '/tools/html.png' },
    { id: 6, name: 'Figma', icon: '/tools/figma.png' },
    // Duplicate items multiple times to ensure full coverage
    { id: 7, name: 'React', icon: '/tools/react.png' },
    { id: 8, name: 'VS Code', icon: '/tools/vs.png' },
    { id: 9, name: 'JavaScript', icon: '/tools/javascript.png' },
    { id: 10, name: 'Python', icon: '/tools/python.png' },
    { id: 11, name: 'HTML', icon: '/tools/html.png' },
    { id: 12, name: 'Figma', icon: '/tools/figma.png' },
    // Add a third set to ensure no gaps
    { id: 13, name: 'React', icon: '/tools/react.png' },
    { id: 14, name: 'VS Code', icon: '/tools/vs.png' },
    { id: 15, name: 'JavaScript', icon: '/tools/javascript.png' },
    { id: 16, name: 'Python', icon: '/tools/python.png' },
    { id: 17, name: 'HTML', icon: '/tools/html.png' },
    { id: 18, name: 'Figma', icon: '/tools/figma.png' },
    // 
    { id: 19, name: 'React', icon: '/tools/react.png' },
    { id: 20, name: 'VS Code', icon: '/tools/vs.png' },
    { id: 21, name: 'JavaScript', icon: '/tools/javascript.png' },
    { id: 22, name: 'Python', icon: '/tools/python.png' },
    { id: 23, name: 'HTML', icon: '/tools/html.png' },
    { id: 24, name: 'Figma', icon: '/tools/figma.png' },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="frontend-platforms">
                <h3>Tools</h3>
                <div className="scroll-container">
                    <div className="scroll-content">
                        {tools.map((tool) => (
                            <div key={tool.id} className="tool-item">
                                <img src={tool.icon} alt={tool.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
