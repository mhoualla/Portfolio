import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a computer science senior at the University of Michigan, with experience in software engineering, web development, and machine learning research. 
        I'm also an avid video gamer, and love tinkering with rom hacks and randomizers in my free time.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div variants={textVariant()}>
      <br />
      <br />
      <br />
    <h2 className={styles.sectionHeadText}>Coursework.</h2>
  </motion.div>

  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] gap-10"
  >
    EECS 183: Elementary Programming Concepts <br />
    EECS 201: Computer Pragmatics <br />
    EECS 203: Discrete Math <br />
    EECS 280: Programming & Data Structures <br />
    EECS 281: Data Structures & Algorithms <br />
    EECS 370: Computer Organization <br />
    EECS 376: Computer Theory <br />
    EECS 443: Senior Thesis <br />
    EECS 482: Operating Systems <br />
    EECS 483: Compiler Construction <br />
    EECS 485: Web Systems <br />
    EECS 489: Advanced Operating Systems<br />
    EECS 493: UI/UX <br />
    EECS 497: Human-centered Software Development
  </motion.p>
  </>
    

  );
};

export default SectionWrapper(About, "about");