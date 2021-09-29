import React, { useState } from 'react';
import './project.css';

const Project = ({ project }) => {
  const [toolsAndLanguagesVisible, setToolsAndLanguagesVisible] = useState(false);
  const [projectBodyVisible, setProjectBodyVisible] = useState(false);
  // console.log('in project.js', project);

  const viewBodyCloseTools = () => {
    setProjectBodyVisible(!projectBodyVisible);
    setToolsAndLanguagesVisible(false);
  };

  const viewToolsCloseBody = () => {
    setToolsAndLanguagesVisible(!toolsAndLanguagesVisible);
    setProjectBodyVisible(false);
  }

  return (
    <section className="project-section">
      <div className="project">
        <h3 className="project-heading">{project.projectTitle}</h3>
        <div className="txt--centred project-content">
          <p>{project.projectIntro}</p>
          {/* <img className="project-preview" src={project.mainPagePreview.file.url}/> */}
          <h5 className="custom-cursor" onClick={() => viewBodyCloseTools()}>{projectBodyVisible ? `ABOUT ${project.projectTitle.toUpperCase()} -`:'READ MORE +'}</h5>
          {projectBodyVisible && <div>
            <p>{project.projectBody.projectBody}</p>
            <p>{project.projectCreative.projectCreative}</p>
            <h5 className="custom-cursor" onClick={() => setProjectBodyVisible(false)}>HIDE -</h5>
          </div>}
          <h5 className="custom-cursor" onClick={() => viewToolsCloseBody()}>{toolsAndLanguagesVisible ? 'TOOLS & LANGUAGES USED -' : 'TOOLS & LANGUAGES +'}</h5>
          {toolsAndLanguagesVisible && <div>
            <p>{project.toolsAndLanguages.join(', ')}</p>
            <h5 className="custom-cursor" onClick={() => setToolsAndLanguagesVisible(false)}>HIDE -</h5>
          </div>}
          <div className="project-btns">
            <a href={project.deployedLink} target="_blank" rel="noreferrer">
              <button className="custom-cursor button project-btn deploy-btn">Deployed project<span className="material-icons small-icon">arrow_right_alt</span></button>
            </a>
            <a href={project.sourceCode} target="_blank" rel="noreferrer">
              <button className="custom-cursor button project-btn source-btn">Source code<span className="material-icons small-icon">arrow_right_alt</span></button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
