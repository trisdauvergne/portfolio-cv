import React from 'react';
import { Link } from 'react-scroll';
import './intro.css';
import { motion } from 'framer-motion';

const Intro = () => {
    const tristan = 'TRISTAN';
    const dauvergne = 'DAUVERGNE';

    const sentence = {
        hidden: {
            opacity: 1,
        },
        visible: { 
            opacity: 1,
            transition: {
                type: 'spring',
                delay: 0.5,
                staggerChildren: 0.1,
            },
            // textDecoration: 'underline',
        },
    }

    const letter = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    return (
        <div className="intro">
            <div className="intro-div">
                <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    className="intro-txt"
                >
                    {tristan.split('').map((char, i) => {
                        return (
                            <motion.span key={char + '-' + i} variants={letter}>
                            {char}
                            </motion.span>
                        )
                    })}
                </motion.h1>
                <br/>
                <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    className="intro-txt"
                >
                    {dauvergne.split('').map((char, i) => {
                        return (
                            <motion.span key={char + '-' + i} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.h1>
            </div>
            <Link
                to="heading"
                smooth={true}
                duration={1500}
            >
                <motion.button
                    className="scroll-btn"
                    initial={{
                        border: '2px dashed #fffff4',
                    }}
                    animate={{
                        border: '2px dashed #000000',
                        transition: {
                            delay: 1.5,
                            duration: 1,
                            type: 'spring',
                            bounce: 0,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }
                    }}
                    whileHover={{
                        x: '-15px',
                        y: '-15px',
                        boxShadow: '3px 3px #fffff4, 6px 6px #c9c9bf, 9px 9px #696962, 12px 12px #252522',
                    }}
                    whileTap={{
                        x: '0px',
                        y: '0px',
                        boxShadow: '0px 0px #fffff4, 0px 0px #c9c9bf, 0px 0px #696962, 0px 0px #252522',
                        bounce: 0,
                    }}
                >
                    Scroll down<span className="material-icons sm-icon"> south</span>
                </motion.button>
            </Link>
        </div>
    )
}

export default Intro
