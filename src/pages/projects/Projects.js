import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = ({ projects }) => {
  // console.log('from projects.js', projects);
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    setCaseStudies(projects);
    console.log(caseStudies);
  });

  return (
    <section className="projects content-section">
      <h1 className="heading projects__heading">Projects</h1>
      {caseStudies.length === 0 ? <p>Nothing to see here</p> : <p>There's something just can't get it out yet</p>}
      {caseStudies.length > 0 && caseStudies.allContentfulProject}
    </section>
  )
}

export default Projects;

