import React from 'react';
import { Link } from 'react-router-dom';

const HuskyNews = () => {
  return (
    <div>
      {/* Navigation Header */}
      <nav className="flex justify-between items-center p-4 border-b">
        <Link to="/" className="flex items-center">
          <img src="/husky-logo.png" alt="Husky Logo" className="w-10 h-10" />
        </Link>
        <div className="flex gap-6">
          <Link to="/news" className="hover:text-gray-600">News</Link>
          <Link to="/creators" className="hover:text-gray-600">Creators</Link>
          <Link to="/sources" className="hover:text-gray-600">Sources</Link>
          <Link to="/requests" className="hover:text-gray-600">Requests</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-8">Husky News</h1>
        
        {/* News Articles */}
        <div className="space-y-8">
          <article className="flex gap-8">
            <img 
              src="/axolotl-image.jpg" 
              alt="Smiling axolotl" 
              className="w-96 h-64 object-cover rounded"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Why are axolotls suddenly so popular — and going extinct at the same time?
              </h2>
              <p className="text-gray-600 mb-4">Northeastern Global News</p>
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Summary</h3>
                <p>
                  Axolotls are trending online thanks to Minecraft and social media, but their 
                  real-world population is declining fast due to habitat loss and pollution, 
                  highlighting the need for urgent conservation efforts.
                </p>
              </div>
            </div>
          </article>
          
          {/* Additional articles would be mapped here */}
        </div>
      </div>
    </div>
  );
};

export default HuskyNews;
