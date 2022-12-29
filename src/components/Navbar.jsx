import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>SiteForMovieRating</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/contactme">Contact Me</Link>
            </div>
        </nav>
    )
};

export default Navbar;