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
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
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
        variant={fadeIn("","", 0.15, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a sophomore student at HCMIU. I'm currently studying Computer Science and I'm interested in Web Development and security. Besides computers, I also love listening to music and reading books.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => 
            <ServiceCard key={service.title} index={index} {...service}/>
          )
        }
      </div>      
      
    </>
  )
}


export default SectionWrapper(About, "about");