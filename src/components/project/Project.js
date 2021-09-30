import React, { useState } from 'react';
import './project.css';
import { motion } from 'framer-motion';

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
          {projectBodyVisible &&
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
            <p>{project.projectBody.projectBody}</p>
            <p>{project.projectCreative.projectCreative}</p>
            <h5 className="custom-cursor" onClick={() => setProjectBodyVisible(false)}>HIDE -</h5>
          </motion.div>}
          <h5 className="custom-cursor" onClick={() => viewToolsCloseBody()}>{toolsAndLanguagesVisible ? 'TOOLS & LANGUAGES USED -' : 'TOOLS & LANGUAGES +'}</h5>
          {toolsAndLanguagesVisible &&
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
            <p>{project.toolsAndLanguages.join(', ')}</p>
            <h5 className="custom-cursor" onClick={() => setToolsAndLanguagesVisible(false)}>HIDE -</h5>
          </motion.div>}
          <div className="project-btns">
            <a href={project.deployedLink} target="_blank" rel="noreferrer">
              <motion.button
              className="custom-cursor button project-btn deploy-btn"
              whileHover={{
                boxShadow: "6px 6px #000000",
                x: -7,
                y: -7
              }}>Deployed project<span className="material-icons small-icon">arrow_right_alt</span>
              </motion.button>
            </a>
            <a href={project.sourceCode} target="_blank" rel="noreferrer">
              <motion.button
              className="custom-cursor button project-btn source-btn"
              whileHover={{
                boxShadow: "6px 6px #000000",
                x: -7,
                y: -7
              }}>Source code<span className="material-icons small-icon">arrow_right_alt</span></motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
