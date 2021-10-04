import React from 'react';
import Header from '../../components/header/Header';
import About from '../about/About';
import Projects from '../projects/Projects';
import Cv from '../cv/Cv';
import Connect from '../connect/Connect';
import Intro from '../intro/Intro';
import './main.css';

const Main = ({ projects }) => {
  return (
    <div>
      <Intro />
      <Header />
      <About />
      <Projects projects={projects} />
      <Cv />
      <Connect />
    </div>
  )
}

export default Main;
