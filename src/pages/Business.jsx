import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Business = () => {
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
          <h1 className="section-title">Economy</h1>
          
          {/* News Articles */}
          <div className="articles-container">
            {/* First Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/ECON 1.png" 
                  alt="Fed Chair Jerome Powell"
                />
              </div>
              <div className="article-content">
                <h2>
                   Powell warns inflation is sticking around thanks to Trump's tariffs

                </h2>
                <p className="source">Business Insider</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                     Federal Reserve Chair Jerome Powell warns that persistent inflation 
                     is being fueled by Trump-era tariffs, complicating interest rate policy.
                  </p>
                </div>
              </div>
            </article>

            {/* Second Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/ECON 2.png" 
                  alt="Retail sales account for about a third of overall spending in the US." 
                />
              </div>
              <div className="article-content">
                <h2>
                   Retail sales came in weaker than expected, another bad sign for the US economy
                </h2>
                <p className="source">CNN</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                    U.S. retail sales for February came in weaker than expected, signaling continued 
                    economic strain.
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

export default Business;
