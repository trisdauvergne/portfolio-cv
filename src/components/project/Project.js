import React, { useState, useEffect } from 'react';
import './project.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // to control the start of the animation 

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
  };

  const controls = useAnimation(); // hook to control the start of animation
  const { ref, inView } = useInView(); // ref and inview properties

  const projectDivVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1  
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section className="project-section">
      <motion.div
      className="project"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={projectDivVariants}>
        <h3 className="project-heading">{project.projectTitle}</h3>
        <div className="txt--centred project-content">
          <p>{project.projectIntro}</p>
          {/* <img className="project-preview" src={project.mainPagePreview.file.url}/> */}
          <h5
          className="custom-cursor"
          onClick={() => viewBodyCloseTools()}>
          {projectBodyVisible ? `ABOUT ${project.projectTitle.toUpperCase()} -`:'READ MORE +'}
          </h5>
          {projectBodyVisible &&
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
            <p>{project.projectBody.projectBody}</p>
            <p>{project.projectCreative.projectCreative}</p>
            <h5
            className="custom-cursor"
            onClick={() => setProjectBodyVisible(false)}>
              HIDE -
            </h5>
          </motion.div>}
          <h5
          className="custom-cursor"
          onClick={() => viewToolsCloseBody()}>
            {toolsAndLanguagesVisible ? 'TOOLS & LANGUAGES USED -' : 'TOOLS & LANGUAGES +'}
          </h5>
          {toolsAndLanguagesVisible &&
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
            <p>{project.toolsAndLanguages.join(', ')}</p>
            <h5
            className="custom-cursor"
            onClick={() => setToolsAndLanguagesVisible(false)}>
              HIDE -
            </h5>
          </motion.div>}
          <div className="project-btns">
            <a
            href={project.deployedLink}
            target="_blank"
            rel="noreferrer">
              <motion.button
              className="custom-cursor button project-btn deploy-btn"
              whileHover={{
                boxShadow: "6px 6px #000000",
                x: -7,
                y: -7
              }}
              whileTap={{
                boxShadow: "0px 0px #000000",
                x: 0,
                y: 0
              }}>
                Deployed project<span className="material-icons small-icon">arrow_right_alt</span>
              </motion.button>
            </a>
            <a
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer">
              <motion.button
              className="custom-cursor button project-btn source-btn"
              whileHover={{
                boxShadow: "6px 6px #000000",
                x: -7,
                y: -7
              }}
              whileTap={{
                boxShadow: "0px 0px #000000",
                x: 0,
                y: 0
              }}>
                Source code<span className="material-icons small-icon">arrow_right_alt</span>
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Project;
