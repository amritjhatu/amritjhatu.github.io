import React, { useState } from 'react';
import '../styles/Projects.css'; 

const projects = [
    {
        title: "LegallyWise AI",
        logo: "https://via.placeholder.com/150", 
        description: "Implemented OpenAI API integration to retrieve data from a legal dataset and simplify complex legal documents.",
        details: [
            "Integrated OpenAI API for query resolution.",
            "Performed user testing and troubleshooting.",
            "Utilized EJS for clean JS structure formatting."
        ]
    },
    {
        title: "Good Deed Books",
        logo: "https://via.placeholder.com/150",
        description: "Contributed to an open source project by redesigning the navigation menu system.",
        details: [
            "Researched several component libraries such as Radzen and MudBlazor.",
            "Used the existing Core UI, Boostrap and CSS to re-design the navigation menu.",
            "Fixed the issues the previous navigation menu had, such as the carets not functioning as intended."
        ]
    },
    {
        title: "Get Kindr Foundation",
        logo: "./assets/getkindr.png", 
        description: "Integrated NFC technology for attendance tracking and maintained a PostgreSQL database.",
        details: [
            "Integrated NFC technology for attendance tracking.",
            "Resolved issues systematically using a bug report log.",
            "Handled a PostgreSQL database with Prisma for scalability."
        ]
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="container">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => handleCardClick(project)}
                    >
                        <img src={project.logo} alt={`${project.title} logo`} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

            {selectedProject && (
    <div className="modal" onClick={handleCloseModal}>
        <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
        >
            <span className="close" onClick={handleCloseModal}>
                &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <img
                src={selectedProject.logo}
                alt={`${selectedProject.title} logo`}
            />
            <p>{selectedProject.description}</p>
            <ul>
                {selectedProject.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    </div>
)}
        </div>
    );
};

export default Projects;