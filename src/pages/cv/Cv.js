import React from 'react';
import './cv.css';

const Cv = () => {
  return (
    <section className="cv content-section">
      <div className="heading-div">
        <h1 className="heading cv__heading">CV</h1>
      </div>
      <div>
        <h3>Education & Training</h3>
        <div className="education-div">
          <h5>Full Stack JavaScript</h5>
          <p>School of Applied Technology</p>
          <p>January 2021 - April 2021</p>
          <p>Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning</p>
        </div>
        <div className="education-div">
          <h5>Full Stack Software Development Diploma</h5>
          <p>Code Institute</p>
          <p>January 2020 - May 2020</p>
          <p>An introduction to the fundamentals of full stack software development</p>
        </div>
        <div className="education-div">
          <h5>Theatre: Design for Performance</h5>
          <p>University of the Arts, London</p>
          <p>September 2004 - July 2007</p>
          <p>Designing for all aspects of live performance</p>
        </div>
      </div>
    </section>
  )
}

export default Cv;
