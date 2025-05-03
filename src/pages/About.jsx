import React from 'react';
import '../styles/About.css'; 

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <p className="about-intro">
                Hi there! I'm <strong>Amrit Jhatu</strong>, a passionate software developer with a strong foundation 
                in computer systems and a drive to create innovative and impactful solutions. I'm a graduate 
                of British Columbia Institute of Technology's Computer Systems Technology program, where I picked up most
                of my skills in software development, problem-solving, and teamwork.
            </p>
            <div className="about-section">
                <h2>What I Do</h2>
                <p>
                    Over the years, I have worked on a variety of projects, ranging from web development to enterprise 
                    application development. Currently I am providing consulting for a .NET industry project. 
                    My expertise includes:
                </p>
                <ul className="skills-list">
                    <li>Programming Languages: Java, .NET, C#, JavaScript</li>
                    <li>Frameworks & Libraries: React, Node.js, Express</li>
                    <li>Databases: MongoDB, SQL Server</li>
                    <li>Other Skills: Full-stack development, problem-solving, and teamwork</li>
                </ul>
            </div>
            <div className="about-section">
                <h2>Beyond Coding</h2>
                <p>
                    When I'm not coding, you can find me exploring new technologies, learning new life skills, or 
                    enjoying a good story to read. I believe in continuous learning and staying curious about the 
                    world around me.
                </p>
            </div>
            <div className="about-section">
                <h2>Let's Connect</h2>
                <p>
                    Feel free to explore my <a href="/portfolio" className="link">portfolio</a>, check out my  
                    <a href="https://github.com/amritjhatu" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>, 
                    or connect with me on  
                    <a href="https://linkedin.com/in/amritjhatu" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>. 
                    I'm always open to collaborating on exciting projects or just having a chat!
                </p>
            </div>
        </div>
    );
};

export default About;