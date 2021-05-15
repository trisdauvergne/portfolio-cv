import React, { useState, useEffect } from 'react';
import './projects.css';
import Project from '../../components/project/Project';

const Projects = ({ projects }) => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    setCaseStudies(projects);
  });

  return (
    <section className="projects content-section">
      <div>
        <h1 className="heading">Deployed projects</h1>
      </div>
      <div>
        {caseStudies.map((caseStudy, index) => <Project key={index} project={caseStudy.node}/>)}
      </div>
    </section>
  )
}

export default Projects;


// import React, { useState, useEffect } from 'react';
// import './projects.css';
// import Project from '../../components/project/Project';

// const Projects = ({ projects }) => {
//   const [caseStudies, setCaseStudies] = useState([]);
//   const [projectsDivVisible, setProjectsDivVisible] = useState(false);

//   useEffect(() => {
//     setCaseStudies(projects);
//   });

//   return (
//     <section className="projects content-section">
//       <div className={projectsDivVisible ? "projects-heading heading-div__reduced": "heading-div projects-heading"} onClick={() => setProjectsDivVisible(!projectsDivVisible)}>
//         <h1 className="heading">Projects</h1>
//       </div>
//       <div className="projects__div bottom-border">
//         {projectsDivVisible && caseStudies.map((caseStudy, index) => <Project key={index} project={caseStudy.node}/>)}
//       </div>
//     </section>
//   )
// }

// export default Projects;

