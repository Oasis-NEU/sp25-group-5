import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Sports = () => {
    return (
        <div className="sports-page">
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
                    <h1 className="section-title">Sports</h1>

                    {/* News Articles */}
                    <div className="articles-container">
                        {/* First Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/SPORTS 1.png"
                                    alt="Sports event"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    CNN Sport's top stories of 2023
                                </h2>
                                <p className="source">CNN</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        This article highlights the most significant sports stories of 2023, including events like the Women's World Cup in Australia and New Zealand, the rise of the Saudi Pro League, and the challenging Barkley Marathon.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Second Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/SPORTS 2.png"
                                    alt="Sports achievement"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    What were the 10 biggest storylines in sports in February?
                                </h2>
                                <p className="source">Fox News</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        This piece recaps the top ten sports storylines from February, covering topics such as Patrick Reed's hole-in-one at LIV Golf Adelaide, Auburn and Duke's impressive basketball performances, and Lionel Messi's continued excellence in MLS.
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

export default Sports;
