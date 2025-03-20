import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import HuskyNews from './pages/HuskyNews.jsx';
import Politics from './pages/Politics.jsx';
import Music from './pages/Music.jsx';
import Cooking from './pages/Cooking.jsx';
import Science from './pages/Science.jsx';
import Weather from './pages/Weather.jsx';
import WorldNews from './pages/WorldNews.jsx';
import Sports from './pages/Sports.jsx';
import Art from './pages/Art.jsx';
import Business from './pages/Business.jsx';
import Film from './pages/Film.jsx';
import Space from './pages/Space.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<HuskyNews />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/music" element={<Music />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/science" element={<Science />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/world" element={<WorldNews />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/art" element={<Art />} />
        <Route path="/business" element={<Business />} />
        <Route path="/film" element={<Film />} />
        <Route path="/space" element={<Space />} />

        {/* Catch-all route should be at the end */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;