import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const WorldNews = () => {
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
          <h1 className="section-title">Global News</h1>
          
          {/* News Articles */}
          <div className="articles-container">
            {/* First Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/GLOBAL 1.png" 
                  alt="GLOBAL 1" 
                />
              </div>
              <div className="article-content">
                <h2>
                  Turkey detains Istanbul's mayor, a key rival of President Erdogan
                </h2>
                <p className="source">CNN</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                     This article reports on the detention of Istanbul's mayor, 
                     a significant political opponent to President Erdogan, highlighting the 
                     escalating political tensions in Turkey.
                  </p>
                </div>
              </div>
            </article>

            {/* Second Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/GLOBAL 2.png" 
                  alt="global 2" 
                />
              </div>
              <div className="article-content">
                <h2>
                    Trump holds 'very good' call with Zelenskyy following deal with Putin
                </h2>
                <p className="source">Fox News</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                     This piece discusses a positive conversation between former President 
                     Trump and Ukrainian President Zelenskyy after a recent agreement with 
                     Russian President Putin, indicating potential shifts in the geopolitical 
                     landscape.
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

export default WorldNews;
