import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Book Management System",
    description: "A full-stack CRUD app with Spring Boot backend and React frontend. Includes user login, book tracking, and role-based access.",
    tech: "Java, Spring Boot, React, MySQL",
    github: "https://github.com/yourusername/book-management",
    demo: "https://book-app-demo.netlify.app"
  },
  {
    title: "Bus Reservation System",
    description: "A dynamic bus ticket booking system with seat selection, payment integration, and email notifications.",
    tech: "Spring Boot, React, Razorpay, MySQL",
    github: "https://github.com/yourusername/bus-reservation",
    demo: "https://bus-reserve-app.netlify.app"
  },
  {
    title: "Online Portfolio",
    description: "This portfolio website built using React to showcase my skills, resume, and projects. Responsive and SEO-friendly.",
    tech: "React, CSS, Netlify",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourname-portfolio.netlify.app"
  }
];

const Projects = () => {
  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
