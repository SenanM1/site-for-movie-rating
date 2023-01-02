import { Link } from 'react-router-dom';
import NavbarCSS from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={NavbarCSS.navbar}>
            <Link to='/'><span className={NavbarCSS.title}>SiteForMovieRating</span></Link>
            <div className={NavbarCSS.links}>
                <Link className={NavbarCSS.link} to="/">Home</Link>
                <Link className={NavbarCSS.link} to="/movies">Movies</Link>
                <Link className={NavbarCSS.link} to="/contactme">Contact Me</Link>
            </div>
        </nav>
    )
};

export default Navbar;