import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Science = () => {
  return (
    <div className="science-page">
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
          <h1 className="section-title">Science</h1>

          {/* News Articles */}
          <div className="articles-container">
            {/* First Article */}
            <article className="news-article">
              <div className="image-container">
                <img
                  src="/icons/SCIENCE 1.png"
                  alt="Scientific research"
                />
              </div>
              <div className="article-content">
                <h2>
                  <a
                    href="https://www.nationalgeographic.com/science/article/early-life-earth-theories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How did life on Earth begin? Here are 3 popular theories.
                  </a>
                </h2>
                <p className="source">National Geographic</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                    This article explores leading hypotheses on the origins of life, including the roles of lightning, deep-sea vents, and extraterrestrial contributions.
                  </p>
                </div>
              </div>
            </article>

            {/* Second Article */}
            <article className="news-article">
              <div className="image-container">
                <img
                  src="/icons/SCIENCE 2.png"
                  alt="Scientific discovery"
                />
              </div>
              <div className="article-content">
                <h2>
                  <a
                    href="https://www.nationalgeographic.com/science/article/rising-dementia-rates-reason-and-how-to-reduce-risk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The reason dementia rates are rising is surprisingly simple.
                  </a>
                </h2>
                <p className="source">National Geographic</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                    Scientists have discovered a new species of bioluminescent creatures in the Mariana Trench. These findings provide new insights into deep-sea ecosystems and could lead to breakthroughs in medical imaging technology.
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

export default Science;
