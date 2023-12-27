import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from "react-icons/fa";
import Slide from '../../components/Slide';



const About = () => {
  const skills = [
    {
      title: 'Javascript'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'Node JS'
    },
    {
      title: 'Mongo DB'
    },
    {
      title: 'React'
    },
    {
      title: 'Redux'
    },
    {
      title: 'AWS'
    },
    {
      title: 'Tailwind'
    },
    {
      title: 'Framer'
    },
  ]
  const skills2 = [
    {
      title: 'Javascript'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'Node JS'
    },
    {
      title: 'Mongo DB'
    },
    {
      title: 'React'
    },
    {
      title: 'Redux'
    },
    {
      title: 'AWS'
    },
    {
      title: 'Tailwind'
    },
    {
      title: 'Framer'
    },
  ]

  const variants = {
    initial: { x: 0 },
    whileOnView: { width: '' },
    exit: { width: '' },
 };
  return (
    <div className='text-white '>
      <div className='flex flex-row items-center relative pl-1'>
    <div className='relative'>
      <Slide />
      <motion.h1  initial={{ y:5, opacity: 0}} whileInView={{ y: -5,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-white font-mono text-5xl font-extrabold z-10'>About<span className='text-[#0AFF9D]'>.</span></motion.h1>
      </div>
      <motion.hr  className='w-full'/>
      </div>
      <div className='flex flex-col md:flex-row pl-1'>
        <div className='w-full md:w-3/5 flex flex-col gap-5 pt-10 font-extralight'>
          <div className='relative'>
          <Slide />
          <motion.h1 className='w-full' initial={{ y:5, opacity: 0}} whileInView={{ y: -5,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}}><span className='text-3xl'>H</span>ey I'm Zeke, a passionate web developer with a keen eye for detail and a love for crafting digital experiences. My journey in the world of web development began with a curiosity about how things work on the internet, and it has since evolved into a fulfilling career where I bring ideas to life through code.</motion.h1>
          </div>
          <div className='relative'>
          <Slide />
          <motion.h1 initial={{ y:5, opacity: 0}} whileInView={{ y: -5,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}}>I'm not just a coder; I'm a problem solver, a creative thinker, and a lifelong learner. My commitment to staying on the cutting edge of technology ensures that I can deliver solutions that not only meet but exceed expectations. Whether it's front-end development to create visually stunning user interfaces or back-end work to ensure seamless functionality, I thrive on the challenge of building robust and elegant websites.</motion.h1>
          </div>
          <div className='relative'>
          <Slide />
          <motion.h1 initial={{ y:5, opacity: 0}} whileInView={{ y: -5,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}}>I believe in the power of collaboration and communication. Understanding your vision is at the core of my process. By actively listening and engaging in open dialogue, I ensure that the end product aligns perfectly with your goals. My goal is not just to write code but to create a digital presence that reflects your brand, engages your audience, and delivers a memorable user experience.
</motion.h1>
          </div>
          <div className='relative'>
          <Slide />
<motion.h1 initial={{ y:5, opacity: 0}} whileInView={{ y: -5,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}}>My Links</motion.h1>
          </div>
        </div>
        <div className='w-full md:w-2/5 ml-5 mt-[50px] flex-col flex gap-10'>
            <div className='flex flex-col gap-5' >
              <div className='relative flex flex-row font-bold gap-3 items-center '>
                <Slide />
              <span><FaCode  className='bg-[#0AFF9D]' /></span><motion.h1>Use At Work </motion.h1>
              </div>
              <div className='flex flex-row flex-wrap relative  gap-2'>
                <Slide />
                {skills.map((skill) => <button className='bg-[#232323] rounded-full px-2 py-1'>{skill.title}</button>)}
              </div>
            </div>

            <div className='flex flex-col gap-5' >
              <div className='relative flex flex-row font-bold gap-3 items-center '>
                <Slide />
              <span><FaCode  className='bg-[#0AFF9D]' /></span><motion.h1>Use At Work </motion.h1>
              </div>
              <div className='relative flex flex-row flex-wrap gap-2'>
                <Slide />
                {skills.map((skill) => <button className='bg-[#232323] rounded-full px-2 py-1'>{skill.title}</button>)}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About