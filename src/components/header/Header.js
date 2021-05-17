import * as React from "react";
import './header.css';

const Header = () => {
  return (
    <section className="header">
      <h1 className="header__txt">TRISTAN DAUVERGNE</h1>
      <div className="floating-btns">
        <button className="floating-btn floating-btn--about">About</button>
        <button className="floating-btn floating-btn--work">Projects</button>
        <button className="floating-btn floating-btn--cv">CV</button>
        <button className="floating-btn floating-btn--connect">Connect</button>
      </div>
    </section>
  )
}

export default Header;


