import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; 
import '../styles/NavBar.css'; 

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="navbar">
            <div className="container">
                <h1>
                    <Link to="/">Amrit Jhatu's Portfolio</Link>
                </h1>
                <button className="hamburger" onClick={toggleMenu}>
                    <FaBars />
                </button>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/add" onClick={() => setIsMenuOpen(false)}>Add Student</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;