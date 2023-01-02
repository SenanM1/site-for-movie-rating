import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCSS from './Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={NavbarCSS.navbar}>
            <Link to='/'><span className={NavbarCSS.title}>SiteForMovieRating</span></Link>
            <div className={`${NavbarCSS.links} ${isOpen && NavbarCSS.open}`}>
                <Link onClick={() => setIsOpen(!isOpen)} className={NavbarCSS.link} to="/">Home</Link>
                <Link onClick={() => setIsOpen(!isOpen)} className={NavbarCSS.link} to="/movies">Movies</Link>
                <Link onClick={() => setIsOpen(!isOpen)} className={NavbarCSS.link} to="/contactme">Contact Me</Link>
            </div>
            <div className={`${NavbarCSS.nav_toggle} ${isOpen && NavbarCSS.open}`} onClick={() => setIsOpen(!isOpen)}>
                <div className={NavbarCSS.bar}></div>
            </div>
        </div>
    )
};

export default Navbar;