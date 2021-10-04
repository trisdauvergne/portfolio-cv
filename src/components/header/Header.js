import * as React from "react";
import { Link } from 'react-scroll';
import './header.css';
import { motion } from 'framer-motion';

const Header = () => {
  const headerBtnVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.5,
      }
    }
  };

  const btn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  };

  return (
    <section className="header">
      <motion.h1 className="header__txt">TRISTAN DAUVERGNE</motion.h1>
      <motion.div
        className="floating-btns"
        variants={headerBtnVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="about" smooth={true} duration={1000}>
          <motion.button
            className="floating-btn floating-btn--about custom-cursor"
            variants={btn}
            whileHover={{
              backgroundColor: "#000000",
              color: "#fffff4",
              border: "1px dashed #fffff4",
              transition: {
                stiffness: 100,
                duration: 0.1
              }
            }}
          >
            About
          </motion.button>
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          <motion.button
            className="floating-btn floating-btn--work custom-cursor"
            variants={btn}
            whileHover={{
              backgroundColor: "#000000",
              color: "#fffff4",
              border: "1px dashed #fffff4",
              transition: {
                stiffness: 100,
                duration: 0.1
              }
            }}
          >
            Projects
          </motion.button>
        </Link>
        <Link to="cv" smooth={true} duration={1000}>
          <motion.button
            className="floating-btn floating-btn--cv custom-cursor"
            variants={btn}
            whileHover={{
              backgroundColor: "#000000",
              color: "#fffff4",
              border: "1px dashed #fffff4",
              transition: {
                stiffness: 100,
                duration: 0.1
              }
            }}
          >
            CV
          </motion.button>
        </Link>
        <Link to="connect" smooth={true} duration={1000}>
          <motion.button
            className="floating-btn floating-btn--connect custom-cursor"
            variants={btn}
            whileHover={{
              backgroundColor: "#000000",
              color: "#fffff4",
              border: "1px dashed #fffff4",
              transition: {
                stiffness: 100,
                duration: 0.1
              }
            }}
          >Connect
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}

export default Header;


