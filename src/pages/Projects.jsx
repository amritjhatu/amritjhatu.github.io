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
        title: "ProxyChat",
        logo: "https://via.placeholder.com/150",
        description: "Collaborated in an agile environment to create a chat application with Firebase and Google Maps API.",
        details: [
            "Boosted team productivity by 50% in an agile environment.",
            "Handled user images and interactions through Firebase.",
            "Integrated Google Maps API for location-based features."
        ]
    },
    {
        title: "Get Kindr Foundation",
        logo: "https://via.placeholder.com/150", 
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
                <div className="modal">
                    <div className="modal-content">
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