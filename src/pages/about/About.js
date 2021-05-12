import React, { useState } from 'react';

const About = () => {
  const [visibleAboutText, setVisibleAboutText] = useState(false);
  const [visibleSummary, setVisibleSummary] = useState(false);
  const [visibleTechnicalSkills, setVisibleTechnicalSkills] = useState(false);

  return (
    <section>
      <div onClick={() => setVisibleAboutText(!visibleAboutText)} className="about content-section">
        <h1 className="heading about__heading">About</h1>
      </div>
      {visibleAboutText && <div className="text-section about__summary">
        <h2 onClick={() => setVisibleSummary(!visibleSummary)} className="sub-heading">Summary</h2>
        {visibleSummary && <p>A former design project manager from London, now reborn as a developer living in Stockholm. I decided to pursue a career as a developer to help organisations create meaningful online experiences for their customers. A lover of food, music and good design.</p>}
        <h2 onClick={() => setVisibleTechnicalSkills(!visibleTechnicalSkills)} className="sub-heading">Technical Skills</h2>
        {visibleTechnicalSkills && <div>
          <p className="strong-text">General</p>
          <p>JavaScript</p>
          <br/>
          <p className="strong-text">Frontend</p>
          <p>React</p>
          <p>Redux</p>
          <p>Webpack</p>
          <p>HTML</p>
          <p>CSS / SASS / styled-components</p>
          <br/>
          <p className="strong-text">Backend</p>
          <p>NodeJS</p>
          <p>Express</p>
          <p>REST</p>
          <p>GraphQL</p>
          <p>MongoDB / PostgreSQL</p>
          <br/>
          <p className="strong-text">Tools and technologies</p>
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
      </div>}
    </section>
  )
}

export default About
