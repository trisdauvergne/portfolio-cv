import React, { useEffect } from 'react';
import './about.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const About = () => {
  const controls = useAnimation(); // hook to control the start of animation
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  }); // ref and inview properties

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

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section id="about" className="section about-section">
      <h3 className="heading about__heading">About me.</h3>
      <motion.div
        variants={aboutSectionVariants}
        initial="hidden"
        // animate="visible"
        ref={ref}
        animate={controls}
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
