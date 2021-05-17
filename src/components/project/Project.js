import React, { useState } from 'react';
import './project.css';


const Project = ({ project }) => {
  const [toolsAndLanguagesVisible, setToolsAndLanguagesVisible] = useState(false);
  console.log('in project.js', project);

  return (
    <section className="project-section">
      <div className="project">
        <h3 className="project-heading">{project.projectTitle}</h3>
        <div className="txt--centred project-content">
          <p>{project.projectDescription.projectDescription}</p>
          <h5 onMouseOut={() => setToolsAndLanguagesVisible(false)} onClick={() => setToolsAndLanguagesVisible(!toolsAndLanguagesVisible)}>TOOLS AND LANGUAGES +</h5>
          {toolsAndLanguagesVisible && <>
            {project.toolsAndLanguages.map((item, index) => <p key={index}>{item},</p>)}
          </>}
          <div className="project-btns">
            <button className="button project-btn deploy-btn"><a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed project<span class="material-icons small-icon">arrow_right_alt</span></a></button>
            <button className="button project-btn source-btn"><a href={project.sourceCode} target="_blank" rel="noreferrer">Source code<span class="material-icons small-icon">arrow_right_alt</span></a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
