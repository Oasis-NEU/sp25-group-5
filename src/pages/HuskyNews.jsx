import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const HuskyNews = () => {
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
          <h1 className="section-title">Husky News</h1>
          
          {/* News Articles */}
          <div className="articles-container">
            {/* First Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/image 28.png" 
                  alt="Smiling axolotl in dark water with pink gills" 
                />
              </div>
              <div className="article-content">
                <h2>
                  Why are axolotls suddenly so popular — and going extinct at the same time?
                </h2>
                <p className="source">Northeastern Global News</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                    Axolotls are trending online thanks to Minecraft and social media, but their 
                    real-world population is declining fast due to habitat loss and pollution, 
                    highlighting the need for urgent conservation efforts.
                  </p>
                </div>
              </div>
            </article>

            {/* Second Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/image 31.png" 
                  alt="Sustainability Innovation Week presentation with audience in auditorium" 
                />
              </div>
              <div className="article-content">
                <h2>
                  Northeastern kicks off first-ever Sustainability Innovation Week, gathering environmental problem-solvers
                </h2>
                <p className="source">Northeastern Global News</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                    Northeastern University's first-ever Sustainability Innovation Week, held 
                    from March 10-14, brought students and faculty together to address 
                    environmental challenges through workshops and competitions. The event 
                    highlighted student-led initiatives, including the winning Sustainabites 
                    project, which aims to reduce food waste on campus.
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

export default HuskyNews;
