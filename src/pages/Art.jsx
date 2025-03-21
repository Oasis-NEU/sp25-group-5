import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Art = () => {
    return (
        <div className="art-page">
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
                    <h1 className="section-title">Art</h1>

                    {/* News Articles */}
                    <div className="articles-container">
                        {/* First Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/ART 1.png"
                                    alt="Four gloved hands mounting an allegedly forged Basquiat painting to a wall"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    A Trove of ‘Lost Basquiats’ Led to a Splashy Exhibition. Then the FBI Showed Up.
                                </h2>
                                <p className="source">The Atlantic</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        The Orlando Museum of Art’s Basquiat exhibition was shut down by the FBI after it was revealed that many of the showcased paintings were likely forgeries. This highlights the deep challenges of identifying authenticity in the art world.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Second Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/ART 2.png"
                                    alt="02 Maurizio Cattelan Blenheim Palace FILE"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    8 artworks that made us question the value of art
                                </h2>
                                <p className="source">CNN</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        The article explores controversial artworks that have challenged traditional notions of artistic value, sparking debates about authenticity, worth, and the role of art in society.
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

export default Art;


