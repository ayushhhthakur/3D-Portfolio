import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variant={fadeIn("", "", 0.15, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >I am a motivated and enthusiastic student with a passion for web development and a strong desire to become a full-stack developer. With a strong background in computer science and a commitment to constantly learning and improving, I am eager to apply my skills and knowledge to develop innovative and engaging websites and applications. Whether working on a team or individually, I am dedicated to delivering high-quality results and finding creative solutions to challenging problems.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) =>
            <ServiceCard key={service.title} index={index} {...service} />
          )
        }
      </div>

    </>
  )
}


export default SectionWrapper(About, "about");