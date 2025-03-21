import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Music = () => {
    return (
        <div className="music-page">
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
                    <h1 className="section-title">Music</h1>

                    {/* News Articles */}
                    <div className="articles-container">
                        {/* First Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/MUSIC 1.png"
                                    alt="Carole King December 2012"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    <a
                                        href="https://www.cnn.com/2024/04/20/economy/us-concert-spending-2024-predictions/index.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Can superstars still bank on fans splurging for concerts like Taylor Swift's Eras Tour?
                                    </a>
                                </h2>
                                <p className="source">CNN</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        This piece discusses the ongoing consumer spending on live music, noting that Americans are expected to continue attending concerts, albeit at a slower pace than the previous year.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Second Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/MUSIC 2.png"
                                    alt="Music industry"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    <a
                                        href="https://edition.cnn.com/2016/05/25/us/carole-king-fast-facts/index.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Carole King Fast Facts
                                    </a>
                                </h2>
                                <p className="source">CNN</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        This article highlights Carole King's album "Tapestry," which was the first by a female artist to be certified Diamond, selling over 15 million copies.
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

export default Music;
