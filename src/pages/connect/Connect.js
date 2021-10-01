import React, { useEffect } from 'react';
import './connect.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // to control the start of the animation 

const Connect = () => {
  const controls = useAnimation(); // hook to control the start of animation
  const { ref, inView } = useInView(); // ref and inview properties

  const connectDivVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      }
    }
  };

  const connectBtn = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);


  return (
    <section id="connect" className="section">
      <h1 className="heading">Connect.</h1>
      <motion.div
        className="connections"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={connectDivVariants}
      >
        <a href="https://www.linkedin.com/in/tristandauvergne/" target="_blank" rel="noreferrer">
          <motion.h2
            className="connect-option connect-option--linkedin"
            variants={connectBtn}
            whileHover={{
              borderRadius: "0px",
              transition: {
                duration: 0.3,
              }
            }}
            whileTap={{
              borderRadius: "50px",
            }}
          >
            LinkedIn<span className="material-icons lrg-icon">arrow_right_alt</span>
          </motion.h2>
        </a>
        <a href="https://github.com/trisdauvergne" target="_blank" rel="noreferrer">
          <motion.h2
            className="connect-option connect-option--github"
            variants={connectBtn}
            whileHover={{
              borderRadius: "0px",
              transition: {
                duration: 0.3,
              }
            }}
            whileTap={{
              borderRadius: "50px",
              color: "#a3a39b",
              transition: {
                duration: 0.1,
              }
            }}
          >
            GitHub<span className="material-icons lrg-icon">arrow_right_alt</span>
          </motion.h2>
        </a>
        <a href="mailto:tristan.dauvergne@gmail.com">
          <motion.h2
            className="connect-option connect-option--email"
            variants={connectBtn}
            whileHover={{
              borderRadius: "0px",
              transition: {
                duration: 0.3,
              }
            }}
            whileTap={{
              borderRadius: "50px",
            }}
          >
            Email<span className="material-icons lrg-icon">arrow_right_alt</span>
          </motion.h2>
        </a>
      </motion.div>
    </section>
  )
}

export default Connect
