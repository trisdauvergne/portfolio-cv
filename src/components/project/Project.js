import React, { useState } from 'react';
import './project.css';

const Project = ({ project }) => {
  const [toolsAndLanguagesVisible, setToolsAndLanguagesVisible] = useState(false);
  const [projectBodyVisible, setProjectBodyVisible] = useState(false);
  // console.log('in project.js', project);

  return (
    <section className="project-section">
      <div className="project">
        <h3 className="project-heading">{project.projectTitle}</h3>
        <div className="txt--centred project-content">
          <p>{project.projectIntro}</p>
          {/* <img className="project-preview" src={project.mainPagePreview.file.url}/> */}
          <h5 className="custom-cursor" onClick={() => setProjectBodyVisible(!projectBodyVisible)}>{projectBodyVisible ? 'HIDE -':'READ MORE +'}</h5>
          {projectBodyVisible && <div onMouseLeave={() => setProjectBodyVisible(false)}>
            <p>{project.projectBody.projectBody}</p>
            <p>{project.projectCreative.projectCreative}</p>
          </div>}
          <h5 className="custom-cursor" onClick={() => setToolsAndLanguagesVisible(!toolsAndLanguagesVisible)}>{toolsAndLanguagesVisible ? 'HIDE -' : 'TOOLS & LANGUAGES +'}</h5>
          {toolsAndLanguagesVisible && <div onMouseLeave={() => setToolsAndLanguagesVisible(false)} >
            <p>{project.toolsAndLanguages.join(', ')}</p>
          </div>}
          <div className="project-btns">
            <a href={project.deployedLink} target="_blank" rel="noreferrer"><button className="button project-btn deploy-btn">Deployed project<span class="material-icons small-icon">arrow_right_alt</span></button></a>
            <a href={project.sourceCode} target="_blank" rel="noreferrer"><button className="button project-btn source-btn">Source code<span class="material-icons small-icon">arrow_right_alt</span></button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
