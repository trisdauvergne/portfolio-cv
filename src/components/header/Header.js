import * as React from "react";
import { Link } from 'react-scroll';
import './header.css';

const Header = () => {
  return (
    <section className="header">
      <h1 className="header__txt">TRISTAN DAUVERGNE</h1>
      <div className="floating-btns">
        <Link to="about" smooth={true} duration={1000}><button className="floating-btn floating-btn--about custom-cursor">About</button></Link>
        <Link to="projects" smooth={true} duration={1000}><button className="floating-btn floating-btn--work custom-cursor">Projects</button></Link>
        <Link to="cv" smooth={true} duration={1000}><button className="floating-btn floating-btn--cv custom-cursor">CV</button></Link>
        <Link to="connect" smooth={true} duration={1000}><button className="floating-btn floating-btn--connect custom-cursor">Connect</button></Link>
      </div>
    </section>
  )
}

export default Header;


