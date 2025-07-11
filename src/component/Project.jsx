import React from 'react';
import './Projects.css';
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing my projects, skills, and experience, built with React and animated user interactions.',
    image: 'https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg',
    link: 'https://your-portfolio-link.com'
  },
  {
    title: 'Health Insurance Platform',
    description: 'A web platform that allows users to compare health insurance plans, calculate premiums, and manage policies efficiently, developed using React and Zustand for state management.',
    image: 'https://thumbs.dreamstime.com/b/health-insurance-29195078.jpg',
    link: 'https://health.renewbuyinsurance.com/health/basic-details'
  },
  {
    title: 'Motor Insurance Platform',
    description: 'A web application for managing motor insurance policies, premium calculations, and vehicle details, built with Angular for robust and scalable front-end development.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.2eGPjyGtfx7cZI4lj_PLuwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    link: 'https://apex.renewbuyinsurance.com/motor/'
  }
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
