import React from 'react';
import { Link } from 'react-router-dom';
import './HuskyNews.css';

const Film = () => {
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
          <h1 className="section-title">Film</h1>
          
          {/* News Articles */}
          <div className="articles-container">
            {/* First Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/FILM-1.png" 
                  alt="(From left) Erin Doherty as Briony Ariston and Owen Cooper as Jamie Miller in 'Adolescence.'"
                />
              </div>
              <div className="article-content">
                <h2>
                Why everyone is talking about ‘Adolescence,’ the Netflix limited series that’s every parent’s nightmare
                </h2>
                <p className="source">CNN</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                  Netflix's new limited series "Adolescence" delivers an enthralling depiction of a 13-year-old boy's arrest for his classmate's murder, exploring the dark world of youth radicalization and the pervasive influence of toxic online echo chambers
                  </p>
                </div>
              </div>
            </article>

            {/* Second Article */}
            <article className="news-article">
              <div className="image-container">
                <img 
                  src="/icons/FILM-2.png" 
                  alt="Portrait of Bong Joon Ho" 
                />
              </div>
              <div className="article-content">
                <h2>
                Bong Joon Ho Will Always Root for the Losers
                </h2>
                <p className="source">The Atlantic</p>
                <div className="summary-box">
                  <h3>Summary</h3>
                  <p>
                  In "Mickey 17," director Bong Joon Ho transports his signature focus on class struggles to a sci-fi setting,
                   following an expendable worker's repeated deaths and rebirths on a colonization mission, highlighting the
                    relentless exploitation of the working class. 

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

export default Film;