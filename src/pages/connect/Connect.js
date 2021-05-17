import React from 'react';
import './connect.css';

const Connect = () => {

  return (
    <section className="section">
      <h1 className="heading">Connect.</h1>
      <div className="connections">
        <a href="https://www.linkedin.com/in/tristandauvergne/" target="_blank" rel="noreferrer"><h2 className="connect-option connect-option--linkedin">LinkedIn<span class="material-icons lrg-icon">arrow_right_alt</span></h2></a>
        <a href="https://github.com/trisdauvergne" target="_blank" rel="noreferrer"><h2 className="connect-option connect-option--github">GitHub<span class="material-icons lrg-icon">arrow_right_alt</span></h2></a>
        <a href="mailto:tristan.dauvergne@gmail.com"><h2 className="connect-option connect-option--email">Email<span class="material-icons lrg-icon">arrow_right_alt</span></h2></a>
        
      </div>
    </section>
  )
}

export default Connect
