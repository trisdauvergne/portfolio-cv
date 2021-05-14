import React, { useState } from 'react';
import './project.css';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  const [projectInfoVisible, setProjectInfoVisible] = useState(false);
  console.log('in project.js', project);

  return (
    <section className="project">
      <h2 className="project-title" onClick={() => setProjectInfoVisible(!projectInfoVisible)}>{project.projectTitle}</h2>
      {projectInfoVisible && <div>
        <p>{project.projectDescription.projectDescription}</p>
        <p>{project.deployedLink}</p>
        <a href={project.deployedLink} target="_blank">Link to deployed project</a>
      </div>}
    </section>
  )
}

export default Project
