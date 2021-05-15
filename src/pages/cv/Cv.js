import React, { useState } from 'react';
import './cv.css';

const Cv = () => {
  // const [visibleCvSections, setVisibleCvSections] = useState(false);
  // const [visibleEducation, setVisibleEducation] = useState(false);
  // const [visibleWork, setVisibleWork] = useState(false);

  return (
    <section>
      <h1 className="heading">CV</h1>
      <h2>Education & Training</h2>
      <div>
        <h5>Full Stack JavaScript</h5>
        <p>School of Applied Technology</p>
        <p>January 2021 - April 2021</p>
        <p>Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning</p>
        <h5>Full Stack Software Development Diploma</h5>
        <p>Code Institute</p>
        <p>January 2020 - May 2020</p>
        <p>An introduction to the fundamentals of full stack software development</p>
        <h5>Theatre: Design for Performance</h5>
        <p>University of the Arts, London</p>
        <p>September 2004 - July 2007</p>
        <p>Designing for all aspects of live performance</p>
      </div>
      <h2>Work Experience</h2>
      <div>
        <h5>Full Stack JavaScript Consultant</h5>
        <p>School of Applied Technology</p>
        <p>April 2021 - Present</p>
        <p>Working with JavaScript, React and Node.js to build full stack web and mobile applications</p>
        <h5>Project Manager</h5>
        <p>Household Design, London</p>
        <p>July 2017 - October 2018</p>
        <p>A client facing role managing store design and branding projects for retail clients such as Christian Louboutin, Paperchase and Ludlow Farms</p>
        <h5>Client Manager</h5>
        <p>Conran Design Group, London</p>
        <p>January 2016 - July 2017</p>
        <p>Managed Shell’s online ‘Retail Brand Check Service’ ensuring the brand was represented consistently at retail sites around the world </p>
      </div>
    </section>
  )
}

export default Cv;


// import React, { useState } from 'react';
// import './cv.css';

// const Cv = () => {
//   const [visibleCvSections, setVisibleCvSections] = useState(false);
//   const [visibleEducation, setVisibleEducation] = useState(false);
//   const [visibleWork, setVisibleWork] = useState(false);

//   return (
//     <section className="cv content-section">
//       <div onClick={() => setVisibleCvSections(!visibleCvSections)} className={visibleCvSections ? "cv-heading heading-div__reduced" : "cv-heading heading-div"}>
//         <h1 className="heading">CV</h1>
//       </div>
//       {visibleCvSections && <div className="cv-section education">
//         <h2 className="sub-heading" onClick={() => setVisibleEducation(!visibleEducation)}>Education & Training</h2>
//         {visibleEducation && <div>
//           <h5>Full Stack JavaScript</h5>
//           <p>School of Applied Technology</p>
//           <p>January 2021 - April 2021</p>
//           <p>Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning</p>
//           <h5>Full Stack Software Development Diploma</h5>
//           <p>Code Institute</p>
//           <p>January 2020 - May 2020</p>
//           <p>An introduction to the fundamentals of full stack software development</p>
//           <h5>Theatre: Design for Performance</h5>
//           <p>University of the Arts, London</p>
//           <p>September 2004 - July 2007</p>
//           <p>Designing for all aspects of live performance</p>
//         </div>}
//       </div>}
//       {visibleCvSections && <div className="cv-section work-experience bottom-border">
//         <h2 className="sub-heading" onClick={() => setVisibleWork(!visibleWork)}>Work Experience</h2>
//         {visibleWork && <div>
//           <h5>Full Stack JavaScript Consultant</h5>
//           <p>School of Applied Technology</p>
//           <p>April 2021 - Present</p>
//           <p>Working with JavaScript, React and Node.js to build full stack web and mobile applications</p>
//           <h5>Project Manager</h5>
//           <p>Household Design, London</p>
//           <p>July 2017 - October 2018</p>
//           <p>A client facing role managing store design and branding projects for retail clients such as Christian Louboutin, Paperchase and Ludlow Farms</p>
//           <h5>Client Manager</h5>
//           <p>Conran Design Group, London</p>
//           <p>January 2016 - July 2017</p>
//           <p>Managed Shell’s online ‘Retail Brand Check Service’ ensuring the brand was represented consistently at retail sites around the world </p>
//         </div>}
//       </div>}
//     </section>
//   )
// }

// export default Cv;
