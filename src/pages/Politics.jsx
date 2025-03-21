import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Politics = () => {
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
          <h1 className="section-title">Politics</h1>
          
          {/* News Articles */}
          <div className="articles-container">
            {/* First Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/POLITICS 1.png" 
                  alt="Secretary of Education Linda McMahon smiles during the signing event for an executive order to shut down the Department of Education next to . President Donald Trump, in the East Room at the White House on Thursday." 
                />
              </div>
              <div className="article-content">
                <h2>
                  Trump signs order to begin dismantling Education Department
                </h2>
                <p className="source">CNN</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                    President Donald Trump signed an executive order today to initiate the process of dismantling the Department of Education. This move is part of his broader efforts to restructure federal agencies.
                  </p>
                </div>
              </div>
            </article>

            {/* Second Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/POLITICS 2.png" 
                  alt=", A Social Security Administration office"                />
              </div>
              <div className="article-content">
                <h2>
                  Judge Blocks DOGE from Accessing Social Security Records of Millions of Americans
                </h2>
                <p className="source">Business Insider</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                    A federal judge has prohibited the White House's Department of Government Efficiency (DOGE) from accessing sensitive Social Security records, criticizing the move as a "fishing expedition" lacking sufficient justification. ​
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

export default Politics;

