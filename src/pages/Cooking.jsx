import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Cooking = () => {
    return (
        <div className="cooking-page">
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
                    <h1 className="section-title">Cooking</h1>

                    {/* News Articles */}
                    <div className="articles-container">
                        {/* First Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/COOKING 1.png"
                                    alt="Guy Fieri burger"
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    <a
                                        href="https://www.businessinsider.com/guy-fieri-perfect-burger-recipe"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        I made Guy Fieri's 'perfect' burger, and his special trick for melting the cheese made it restaurant-worthy
                                    </a>
                                </h2>
                                <p className="source">Business Insider</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        This article shares the author's experience recreating Guy Fieri's burger recipe, highlighting a unique cheese-melting technique that resulted in a juicy,
                                        flavorful, and restaurant-quality burger.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Second Article */}
                        <article className="news-article">
                            <div className="image-container">
                                <img
                                    src="/icons/COOKING 2.png"
                                    alt="Engel in London offers a hot dog trolley of German sausages with toppings like truffle mayo, gruyere, fig jam, and crispy onions."
                                />
                            </div>
                            <div className="article-content">
                                <h2>
                                    <a
                                        href="https://www.nationalgeographic.com/travel/article/biggest-food-trends-for-2025"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        The 11 biggest food trends for 2025
                                    </a>
                                </h2>
                                <p className="source">National Geographic</p>
                                <div className="summary-box">
                                    <h3>Summary</h3>
                                    <p>
                                        This article explores emerging culinary trends, from clarified cocktails to specialist seaweed,
                                        highlighting the evolving landscape of food and drink in 2025.
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

export default Cooking;
