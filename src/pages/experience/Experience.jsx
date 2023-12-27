import React from 'react'
import { motion } from 'framer-motion'
import Slide from '../../components/Slide'

const Experience = () => {
    const experiences = [
        {
        title: 'Junior Full-Stack Developer',
        company: 'InnoTech Hub',
        time: 'April 2023 - Present',
        location: 'Ondo',
        description: 'Contributed to the development of a social media platform using MERN stack (MongoDB, Express.js, React.js, Node.js).',
        codeused: 'HTML-CSS-JavaScript-MongoDB-Express.js-React.js-Node.js'
    },
    {
        title: 'Junior Front-End Developer',
        company: 'Tech Innovators Ltd',
        time: 'September 2020 - December 2021',
        location: 'Lagos',
        description: 'Designed and implemented user interfaces for e-commerce platforms using React.js.Collaborated with UX/UI designers to translate design mockups into functional web pages.',
        codeused: 'HTML-CSS-JavaScript-React.js-Redux'
    },
    {
        title: 'Web Developer Intern',
        company: 'BC Digital Solution',
        time: 'May 2020 - August 2020',
        location: 'Abuja',
        description: 'Developed and maintained client websites using HTML, CSS, and JavaScript. Assisted in the implementation of responsive design techniques for optimal user experience across various devices.',
        codeused: 'HTML-CSS-JavaScript-RESTFUL API'
    },
    ]
  return (
    <div>
        <div className='flex flex-row items-center relative pl-1'>
        <div className='relative'>
        <Slide />
      <motion.h1  initial={{ y:10, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-white font-mono text-5xl font-extrabold z-10'>Experince<span className='text-[#0AFF9D]'>.</span></motion.h1>
        </div>
      <motion.hr  className='w-full'/>
      </div>
      <div className='flex flex-col gap-5 mt-10'>
        {experiences.map((experience, index) => (<motion.div key={index} initial={{ y:10}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='border-b relative py-5 w-full text-white  flex flex-col gap-3'>
            <div className='flex flex-row justify-between'>
            <div className='relative'>
                <Slide />
                <motion.h1 initial={{ y:10, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-xl font-bold'>{experience.company}</motion.h1> 
                </div>
             <div className='relative'>
                <Slide />
                <motion.h1 initial={{ y:10, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}}>{experience.time}</motion.h1></div>
             </div>
            
            <div className='flex flex-row justify-between'>
            <div className='relative'>
                <Slide />
                <motion.h1 initial={{ y:10, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='font-bold text-[#0AFF9D]'>{experience.title}</motion.h1> 
                </div>
                <div className='relative'>
                <Slide />
                <motion.h1>{experience.location}</motion.h1></div>
                </div>
            
            <div className='relative'>
                <Slide />
                <motion.h1 initial={{ y:10, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}}>{experience.description}</motion.h1></div>
            <div className='relative'>
                <Slide />
                <motion.h1 initial={{ y:10, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-[#0AFF9D]'>{experience.codeused}</motion.h1></div>
        </motion.div>))}
      </div>
    </div>
  )
}

export default Experience