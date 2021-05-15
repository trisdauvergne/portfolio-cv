import React, { useState } from 'react';
import './project.css';


const Project = ({ project }) => {
  // const [projectInfoVisible, setProjectInfoVisible] = useState(false);
  console.log('in project.js', project);

  return (
    <section className="project">
      <h3 className="sub-heading">{project.projectTitle}</h3>
      <p>{project.projectDescription.projectDescription}</p>
      <p>{project.deployedLink}</p>
      <div className="project-btns">
        <button className="deploy-btn"><a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed project</a></button>
        <button className="source-btn"><a>Source code</a></button>
      </div>
    </section>
  )
}

// const Project = ({ project }) => {
//   const [projectInfoVisible, setProjectInfoVisible] = useState(false);
//   console.log('in project.js', project);

//   return (
//     <section className="project" onClick={() => setProjectInfoVisible(!projectInfoVisible)}>
//       <h2 className="sub-heading">{project.projectTitle}</h2>
//       {projectInfoVisible && <div>
//         <p>{project.projectDescription.projectDescription}</p>
//         <p>{project.deployedLink}</p>
//         <a href={project.deployedLink} target="_blank" rel="noreferrer">Link to deployed project</a>
//       </div>}
//     </section>
//   )
// }

export default Project
