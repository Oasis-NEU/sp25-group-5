import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <nav style={{ width: "200px", padding: "10px", background: "#f4f4f4" }}>
            <h3>Navigation</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-creators">About the Creators</Link></li>
                <li><Link to="/about-sources">About the Sources</Link></li>
            </ul>
        </nav>
    );
}