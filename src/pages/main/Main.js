import React from 'react';
import Header from '../../components/header/Header';
import About from '../about/About';
import Projects from '../projects/Projects';
import Cv from '../cv/Cv';
import Connect from '../connect/Connect';
import './main.css';

const Main = ({ projects }) => {
  console.log('from main.js', projects);
  return (
    <div>
      <Header />
      <About />
      <Projects projects={projects} />
      <Cv />
      <Connect />
    </div>
  )
}

export default Main;
