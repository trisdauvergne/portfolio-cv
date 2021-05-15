import React from 'react';
import Header from '../../components/header/Header';
import About from '../about/About';
import Projects from '../projects/Projects';
import Cv from '../cv/Cv';
import './main.css';

const Main = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      <div className="floating-btns">
        <button className="floating-btn floating-btn--about">About</button>
        <button className="floating-btn floating-btn--work">Work</button>
        <button className="floating-btn floating-btn--cv">CV</button>
        <button className="floating-btn floating-btn--connect">Connect</button>
      </div>
      <Header />
      <About />
      <Projects projects={projects} />
      <Cv />
    </div>
  )
}

export default Main;