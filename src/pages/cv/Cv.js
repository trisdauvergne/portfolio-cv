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
    <section>
      <h1 className="heading">CV</h1>
      <h3 onClick={visibleEducationSection} className="heading cv-heading">Education & Training +</h3>
      {visibleEducation && <div>
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
      </div>}
      <h3 onClick={visibleWorkSection} className="heading cv-heading">Work Experience +</h3>
      {visibleWorkExperience && <div>
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
      </div>}
      <h3 onClick={visibleTechnicalSection} className="heading cv-heading">Technical Skills +</h3>
      {visibleTechnicalSkills && <div className="technical-skills">
        <p>General</p>
        <p>JavaScript</p>
        <br/>
        <p>Frontend</p>
        <p>React</p>
        <p>Redux</p>
        <p>Webpack</p>
        <p>HTML</p>
        <p>CSS / SASS / styled-components</p>
        <br/>
        <p>Backend</p>
        <p>NodeJS</p>
        <p>Express</p>
        <p>REST</p>
        <p>GraphQL</p>
        <p>MongoDB / PostgreSQL</p>
        <br/>
        <p>Tools and technologies</p>
        <p>Visual Studio Code</p>
        <p>Handlebars / Mustache</p>
        <p>Mocha / Jest</p>
        <p>Docker</p>
        <p>Git + GitHub</p>
        <p>AWS</p>
        <p>Cloud Platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku, Contentful)</p>
        <p>TDD</p>
        <p>Agile Work Methods</p>
      </div>}
    </section>
  )
}

export default Cv;