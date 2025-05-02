import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>Amrit Jhatu</h1>
                <ul>
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Student</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;