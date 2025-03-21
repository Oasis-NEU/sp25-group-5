import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Space = () => {
    return (
        <div className="space-page">
            {/* Navigation Header */}
            <nav className="nav-header">
                <Link to="/" className="logo-link">
                    <img
                        src="/readly-book-logo.png"
                        alt="Readly Logo"
                        className="logo-image"
                    />
                </Link>
                <div className="nav-links">
                    <Link to="/news">News</Link>
                    <Link to="/creators">Creators</Link>
                    <Link to="/sources">Sources</Link>
                    <Link to="/requests">Requests</Link>
                </div>
            </nav>

            {/* Main Content */}
            <section className="news-section">
                <div className="news-container">
                    <h1 className="section-title">Space</h1>

                    {/* News Articles */}
                    <div className="articles-container">
                        {/* First Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/SPACE 1.png"
                                    alt="Space exploration"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    Sunset on the moon seen in spectacular images taken by Blue Ghost lander
                                </h2>
                                <p className="source">CBS News</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        Firefly Aerospace's Blue Ghost Mission 1 successfully landed on the Moon on March 2, 2025, delivering NASA payloads and capturing images of the lunar sunset and solar eclipse. The mission transmitted 119 gigabytes of data and conducted key scientific demonstrations.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Second Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/SPACE 2.png"
                                    alt="Space technology"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    NASA astronauts return after unexpected nine months in space
                                </h2>
                                <p className="source">NASA</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        NASA astronauts Suni Williams and Butch Wilmore returned to Earth after spending over nine months at the International Space Station, originally intended for a one-week mission. They splashed down off Florida alongside astronauts Nick Hague and Aleksandr Gorbunov, closing a dramatic chapter in spaceflight history.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <h2>we put the neu in news.</h2>
                <p>read all about it.</p>
            </footer>
        </div>
    );
};

export default Space;
