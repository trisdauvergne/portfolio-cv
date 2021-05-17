import React, { useState } from 'react';
import './project.css';


const Project = ({ project }) => {
  const [toolsAndLanguagesVisible, setToolsAndLanguagesVisible] = useState(false);
  console.log('in project.js', project);

  return (
    <section className="section project-section">
      <div className="project">
        <h3 className="sub-heading">{project.projectTitle}</h3>
        <div className="txt--centred project-content">
          <p>{project.projectDescription.projectDescription}</p>
          {/* <p>{project.deployedLink}</p> */}
          <h5 onClick={() => setToolsAndLanguagesVisible(!toolsAndLanguagesVisible)}>TOOLS AND LANGUAGES +</h5>
          {toolsAndLanguagesVisible && <ul>
            {project.toolsAndLanguages.map((item, index) => <li key={index}>{item}</li>)}
          </ul>}
          <div className="project-btns">
            <button className="button deploy-btn"><a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed project</a></button>
            <button className="button source-btn"><a href={project.sourceCode} target="_blank" rel="noreferrer">Source code</a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
