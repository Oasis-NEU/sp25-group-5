import React from 'react';
import './Footer.css';

const tools = [
    { id: 1, name: 'React', icon: '/tools/react.png' },
    { id: 2, name: 'VS Code', icon: '/tools/vs.png' },
    { id: 3, name: 'JavaScript', icon: '/tools/javascript.png' },
    { id: 4, name: 'TypeScript', icon: '/tools/ts.png' },
    { id: 5, name: 'HTML', icon: '/tools/html.png' },
    { id: 6, name: 'Figma', icon: '/tools/figma.png' },
    { id: 7, name: 'Vite', icon: '/tools/vite.png' },
    { id: 8, name: 'Git', icon: '/tools/git.png' },
    // Duplicate items multiple times to ensure full coverage
    { id: 9, name: 'React', icon: '/tools/react.png' },
    { id: 10, name: 'VS Code', icon: '/tools/vs.png' },
    { id: 11, name: 'JavaScript', icon: '/tools/javascript.png' },
    { id: 12, name: 'TypeScript', icon: '/tools/ts.png' },
    { id: 13, name: 'HTML', icon: '/tools/html.png' },
    { id: 14, name: 'Figma', icon: '/tools/figma.png' },
    { id: 15, name: 'Vite', icon: '/tools/vite.png' },
    { id: 16, name: 'Git', icon: '/tools/git.png' },
    // Add a third set to ensure no gaps
    { id: 17, name: 'React', icon: '/tools/react.png' },
    { id: 18, name: 'VS Code', icon: '/tools/vs.png' },
    { id: 19, name: 'JavaScript', icon: '/tools/javascript.png' },
    { id: 20, name: 'TypeScript', icon: '/tools/ts.png' },
    { id: 21, name: 'HTML', icon: '/tools/html.png' },
    { id: 22, name: 'Figma', icon: '/tools/figma.png' },
    { id: 23, name: 'Vite', icon: '/tools/vite.png' },
    { id: 24, name: 'Git', icon: '/tools/git.png' },
    // 
    { id: 25, name: 'React', icon: '/tools/react.png' },
    { id: 26, name: 'VS Code', icon: '/tools/vs.png' },
    { id: 27, name: 'JavaScript', icon: '/tools/javascript.png' },
    { id: 28, name: 'TypeScript', icon: '/tools/ts.png' },
    { id: 29, name: 'HTML', icon: '/tools/html.png' },
    { id: 30, name: 'Figma', icon: '/tools/figma.png' },
    { id: 31, name: 'Vite', icon: '/tools/vite.png' },
    { id: 32, name: 'Git', icon: '/tools/git.png' },
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
