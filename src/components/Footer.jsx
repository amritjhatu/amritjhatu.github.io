import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Amrit Jhatu. All rights reserved.</p>
                <p>
                    <a href="https://github.com/amritjhatu" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} style={{ marginRight: '8px' }} /></a>
                    <a href="https://linkedin.com/in/amritjhatu" target="_blank" rel="noopener noreferrer"> 
                    <FaLinkedin size={20} style={{ marginRight: '8px' }} /></a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;