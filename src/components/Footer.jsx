import React from 'react';
import '../styles/Footer.css'; // Optional: Add styles for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Amrit Jhatu. All rights reserved.</p>
                <p>
                    <a href="https://github.com/amritjhatu" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a> | 
                    <a href="https://linkedin.com/in/amritjhatu" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30} /></a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;