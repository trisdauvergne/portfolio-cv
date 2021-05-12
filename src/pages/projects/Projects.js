import React, { useState, useEffect } from 'react';
import './projects.css';
import Project from '../../components/project/Project';

const Projects = ({ projects }) => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [projectsDivVisible, setProjectsDivVisible] = useState(false);

  useEffect(() => {
    setCaseStudies(projects);
    // console.log('in projects.js useeffect', caseStudies);
  });

  return (
    <section className="projects content-section">
      <div className="projects__heading-div" onClick={() => setProjectsDivVisible(!projectsDivVisible)}>
        <h1 className="heading projects__heading">Projects</h1>
      </div>
      <div className="projects__div">
        {projectsDivVisible && caseStudies.map(caseStudy => <Project project={caseStudy.node}/>)}
      </div>
    </section>
  )
}

export default Projects;

