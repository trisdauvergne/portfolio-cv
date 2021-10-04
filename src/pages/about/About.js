import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

const About = () => {
  const aboutSectionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2.5,
        staggerChildren: 1.5
      }
    }
  }

  const sentence = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
    }
  }

  return (
    <section id="about" className="section about-section">
      <h3 className="heading about__heading">About me.</h3>
      <motion.div
        variants={aboutSectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="txt--centred about__txt"
          variants={sentence}
        >
          A former design project manager from London, now turned developer living in Stockholm.
        </motion.p>
        <br/>
        <motion.p
          className="txt--centred about__txt"
          variants={sentence}
        >
          I'm interested in all aspects of design (especially good UX and UI), passionate about music and an appreciator of food (of course).
        </motion.p>
        <br/>
        <motion.p
          className="txt--centred about__txt"
          variants={sentence}
        >
          I decided to pursue a career as a developer after seeing the exciting online experiences many brands were creating in response to changing customer behaviours.
        </motion.p>
        <br/>
        <motion.p
          className="txt--centred about__txt"
          variants={sentence}
        >
          Working as a developer allows me to create meaningful online experiences and respond to problems with creative solutions.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About;
