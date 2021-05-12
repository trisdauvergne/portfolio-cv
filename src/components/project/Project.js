import React, { useState } from 'react';
import './project.css';

const Project = ({ project }) => {
  const [projectInfoVisible, setProjectInfoVisible] = useState(false);
  console.log('in project.js', project);

  return (
    <section className="project">
      <h2 className="project-title" onClick={() => setProjectInfoVisible(!projectInfoVisible)}>{project.projectTitle}</h2>
      {projectInfoVisible && <div>
        <p>{project.projectDescription.projectDescription}</p>
        <strong><p>{project.deployedLink}</p></strong>
      </div>}
    </section>
  )
}

export default Project
