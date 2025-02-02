import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import Sources from "./pages/Sources";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1>Rabi</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about-creators">Creators</Link>
          <Link to="/about-sources">Sources</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-creators" element={<Creators />} />
        <Route path="/about-sources" element={<Sources />} />
      </Routes>
    </Router>
  );
}

export default App;
