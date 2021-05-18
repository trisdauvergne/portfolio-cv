import React, { useState, useEffect } from 'react';
import './projects.css';
import Project from '../../components/project/Project';

const Projects = ({ projects }) => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    setCaseStudies(projects);
  });

  return (
    <section id="projects" className="section projects-section">
      <div>
        <h1 className="heading">Deployed projects.</h1>
      </div>
      <div>
        {caseStudies.map((caseStudy, index) => <Project key={index} project={caseStudy.node}/>)}
      </div>
    </section>
  )
}

export default Projects;

