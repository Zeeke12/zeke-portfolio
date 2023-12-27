import React from 'react'
import { motion } from 'framer-motion'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Experience from '../experience/Experience'
import Contact from '../contact/Contact'
import Slide from '../../components/Slide'

const Home = () => {

  return (
    <div className='px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] flex flex-col gap-10'>
    <div id='home' className='relative flex flex-col justify-center gap-5 pl-1 h-screen'>
      <div className='relative w-fit'>
    <Slide />
      <motion.h1 initial={{ y: 10,opacity: 0}} whileInView={{ y: -5,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='relative text-white font-mono text-4xl  sm:text-6xl md:text-8xl font-extrabold z-10'>Hey, I'm Zeke<span className='text-[#0AFF9D]'>.</span>
      </motion.h1>
      </div>
      <div className='relative w-fit'>
      <Slide />
      <motion.h2 initial={{ opacity: 0}} whileInView={{ y: -10,opacity: 1}} transition={{type:'spring',duration: 2, delay: 1}} className="text-xl sm:text-2xl md:text-4xl  text-white font-serif font-bold mt-8"> I'm a <span className='text-[#0AFF9D]'>Web Developer</span> </motion.h2>
      </div>      
      <div className='relative w-fit pr-10 md:pr:auto'>
      <Slide />
      <motion.h2 initial={{ opacity: 0}} whileInView={{ y: -10,opacity: 1}} transition={{type:'spring',duration: 2, delay: 1}}
      className='text-white mt-8 text-lg ' >I've spent the last 5 years building and scaling software for some pretty cool companies. I also teach people to paint online (incase you've got an empty canvas layin' around 🎨). Let's connect!</motion.h2>
      </div>
      <div className='relative w-fit'>
      <Slide />
      <motion.button initial={{ opacity: 0}} whileInView={{y: -10,opacity: 1}} transition={{type:'spring',duration: 2, delay: 1}} className='bg-[#0AFF9D] p-2 rounded-md w-[100px]'>
        Contact Me
      </motion.button>
      </div>
      </div>
      <div id='about'>
      <About />
      </div>
      <div id='projects'>
      <Projects />
      </div>
      <div id='experience'>
      <Experience />
      </div>
      <div id='contact'>
      <Contact />
      </div>
    </div>
  )
}

export default Home