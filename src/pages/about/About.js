import React from 'react';
import './about.css';

const About = () => {

  return (
    <section id="about" className="section about-section">
      <h3 className="heading about__heading">About me.</h3>
      <p className="txt--centred about__txt">A former design project manager from London, now turned developer living in Stockholm.</p>
      {/* <br/> */}
      <p className="txt--centred about__txt">I'm interested in all aspects of design (especially good UX and UI), passionate about music and an appreciator of food (of course).</p>
      {/* <br/> */}
      <p className="txt--centred about__txt">I decided to pursue a career as a developer after seeing the exciting online experiences many brands were creating in response to changing customer behaviours.</p>
      {/* <br/> */}
      <p className="txt--centred about__txt">Working as a developer allows me to create meaningful online experiences and respond to problems with creative solutions.</p>
    </section>
  )
}

export default About;
