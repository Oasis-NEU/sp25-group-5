import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Astrology = () => {
  return (
    <div className="min-h-screen bg-white">
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
          <h1 className="section-title">Astrology</h1>
          
          {/* News Articles */}
          <div className="articles-container">
            {/* First Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/public/icons/ASTROLOGY 1.png" 
                  alt="A blue artificial eyeball sits in the middle of a circular astrological chart."
                />
              </div>
              <div className="article-content">
                <h2>
                    AI Astrology Is Getting a Little Too Personal
                </h2>
                <p className="source">theatlantic</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                  Katherine Hu critiques Co–Star's new AI-powered chatbot feature, highlighting concerns over its overly personalized and potentially intrusive guidance.
                  </p>
                </div>
              </div>
            </article>

            {/* Second Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/public/icons/ASTROLOGY 2.png" 
                  alt="The snake — seen here in a relief at Beijing's Baiyun Taoist Temple — is one of the 12 different animals of the Chinese zodiac calendar cycle." 
                />
              </div>
              <div className="article-content">
                <h2>
                Chinese zodiac predictions: What’s in store for 2025 as we enter the Year of the Snake                </h2>
                <p className="source">CNN</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                  Chinese zodiac predictions for 2025, the Year of the Snake! The year's energy influences various aspects of life, including relationships, career, and personal growth.
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

export default Astrology;
