import React, { useState } from 'react';
import './project.css';


const Project = ({ project }) => {
  const [toolsAndLanguagesVisible, setToolsAndLanguagesVisible] = useState(false);
  console.log('in project.js', project);

  return (
    <section className="project">
      <h3 className="sub-heading">{project.projectTitle}</h3>
      <p>{project.projectDescription.projectDescription}</p>
      <p>{project.deployedLink}</p>
      <h5 onClick={() => setToolsAndLanguagesVisible(!toolsAndLanguagesVisible)}>TOOLS AND LANGUAGES +</h5>
      {toolsAndLanguagesVisible && <ul>
        {project.toolsAndLanguages.map(item => <li>{item}</li>)}
      </ul>}
      <div className="project-btns">
        <button className="deploy-btn"><a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed project</a></button>
        <button className="source-btn"><a href={project.sourceCode} target="_blank" rel="noreferrer">Source code</a></button>
      </div>
    </section>
  )
}

export default Project;
