import React, { useState, useEffect } from 'react';
import './projects.css';
import Project from '../../components/project/Project';

const Projects = ({ projects }) => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [projectsDivVisible, setProjectsDivVisible] = useState(false);

  useEffect(() => {
    setCaseStudies(projects);
  });

  return (
    <section className="projects content-section">
      <div className="heading-div" onClick={() => setProjectsDivVisible(!projectsDivVisible)}>
        <h1 className="heading projects__heading">Projects</h1>
      </div>
      <div className="projects__div bottom-border">
        {projectsDivVisible && caseStudies.map((caseStudy, index) => <Project key={index} project={caseStudy.node}/>)}
      </div>
    </section>
  )
}

export default Projects;

