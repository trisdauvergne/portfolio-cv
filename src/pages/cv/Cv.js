import React, { useState } from 'react';
import './cv.css';

const Cv = () => {
  const [visibleEducation, setVisibleEducation] = useState(false);
  const [visibleWorkExperience, setVisibleWorkExperience] = useState(false);
  const [visibleTechnicalSkills, setVisibleTechnicalSkills] = useState(false);

  const visibleEducationSection = () => {
    setVisibleEducation(!visibleEducation);
    setVisibleWorkExperience(false);
    setVisibleTechnicalSkills(false);
  };

  const visibleWorkSection = () => {
    setVisibleWorkExperience(!visibleWorkExperience);
    setVisibleEducation(false);
    setVisibleTechnicalSkills(false);
  }

  const visibleTechnicalSection = () => {
    setVisibleTechnicalSkills(!visibleTechnicalSkills);
    setVisibleWorkExperience(false);
    setVisibleEducation(false);
  }

  return (
    <section id="cv" className="section">
      <h1 className="heading">CV.</h1>
      <h3 onClick={visibleEducationSection} className="cv-heading custom-cursor">Education & Training +</h3>
      {visibleEducation && <div>
        <div className="cv-div">
          <div className="cv-txt">
            <h3 className="cv-sub-heading">Full Stack JavaScript</h3>
            <p className="cv-details">School of Applied Technology,<br/>January 2021 - April 2021</p>
            <p className="cv-copy">Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning</p>
          </div>
        </div>
        <div className="cv-div">
          <div className="cv-txt">
            <h3 className="cv-sub-heading">Full Stack Software Development Diploma</h3>
            <p className="cv-details">Code Institute,<br/>January 2020 - May 2020</p>
            <p className="cv-copy">An introduction to the fundamentals of full stack software development</p>
          </div>
        </div>
        <div className="cv-div">
          <div className="cv-txt">
            <h3 className="cv-sub-heading">Theatre: Design for Performance</h3>
            <p className="cv-details">University of the Arts, London<br/>September 2004 - July 2007</p>
            <p className="cv-copy">Designing for all aspects of live performance</p>
            </div>
        </div>
      </div>}
      <h3 onClick={visibleWorkSection} className="cv-heading custom-cursor">Work Experience +</h3>
      {visibleWorkExperience && <div>
        <div className="cv-div">
          <div className="cv-txt">
            <h3 className="cv-sub-heading">Full Stack JavaScript Consultant</h3>
            <p className="cv-details">School of Applied Technology,<br/>April 2021 - Present</p>
            <p className="cv-copy">Working with JavaScript, React and Node.js to build full stack web and mobile applications</p>
          </div>
        </div>
        <div className="cv-div">
          <div className="cv-txt">
            <h3 className="cv-sub-heading">Project Manager</h3>
            <p className="cv-details">Household Design, London,<br/>July 2017 - October 2018</p>
            <p className="cv-copy">A client facing role managing store design and branding projects for retail clients such as Christian Louboutin, Paperchase and Ludlow Farms</p>
          </div>
        </div>
        <div className="cv-div">
          <div className="cv-txt">
            <h3 className="cv-sub-heading">Client Manager</h3>
            <p className="cv-details">Conran Design Group, London, <br/>January 2016 - July 2017</p>
            <p className="cv-copy">Managed Shell’s online ‘Retail Brand Check Service’ ensuring the brand was represented consistently at retail sites around the world </p>
          </div>
        </div>
      </div>}
      <h3 onClick={visibleTechnicalSection} className="cv-heading custom-cursor">Technical Skills +</h3>
      {visibleTechnicalSkills &&<div className="cv-div">
        <div className="cv-txt">
          <p className="cv-sub-heading">General</p>
          <p className="cv-copy">JavaScript</p>
        </div>
        <div className="cv-txt">
          <p className="cv-sub-heading">Frontend</p>
          <p className="cv-copy">React, Redux, Webpack, HTML, CSS / SASS / styled-components</p>
        </div>
        <div className="cv-txt">
          <p className="cv-sub-heading">Backend</p>
          <p className="cv-copy">NodeJS, Express, REST, GraphQL, MongoDB / PostgreSQL</p>
        </div>
        <div className="cv-txt">
          <p className="cv-sub-heading">Tools and technologies</p>
          <p className="cv-copy">Visual Studio Code, Handlebars / Mustache, Mocha / Jest, Docker, Git + GitHub, AWS, Cloud Platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku, Contentful), TDD,Agile Work Methods</p>
        </div>
      </div>}
    </section>
  )
}

export default Cv;