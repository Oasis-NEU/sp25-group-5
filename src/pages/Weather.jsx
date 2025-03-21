import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Weather = () => {
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
          <h1 className="section-title">Weather</h1>
          
          {/* News Articles */}
          <div className="articles-container">
            {/* First Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/WEATHER 1.png" 
                  alt="Tornado threat moves south after central states hit by massive storm" 
                />
              </div>
              <div className="article-content">
                <h2>
                Tornado threat moves south after central states hit by massive storm
                </h2>
                <p className="source">Fox News</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                  This article discusses how the risk of tornadoes has shifted to the southern regions following a significant storm that impacted several central states.
                  </p>
                </div>
              </div>
            </article>

            {/* Second Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/WEATHER 2.png" 
                  alt="Southeast met with dangerous flooding while Northeast braces for snowstorms" 
                />
              </div>
              <div className="article-content">
                <h2>
                Southeast met with dangerous flooding while Northeast braces for snowstorms

                </h2>
                <p className="source">Fox News</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                  This piece highlights the severe flooding experienced in the Southeastern U.S. and the anticipated snowstorms in the Northeast,
                  emphasizing the widespread impact of recent weather patterns.
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

export default Weather;


