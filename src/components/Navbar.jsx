import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/'><span className='title'>SiteForMovieRating</span></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/contactme">Contact Me</Link>
            </div>
        </nav>
    )
};

export default Navbar;