import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutCreators from "./pages/AboutCreators";
import AboutSources from "./pages/AboutSources";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>Rabi</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about-creators">About the Creators</Link>
          <Link to="/about-sources">About the Sources</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-creators" element={<AboutCreators />} />
        <Route path="/about-sources" element={<AboutSources />} />
      </Routes>
    </Router>
  );
}

export default App;
