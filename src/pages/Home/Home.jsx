import React from 'react'
import { motion } from 'framer-motion'
import Slide from '../../components/Slide'
import MouseTrailAnimation from '../../components/Animation'

const Home = () => {

  return (
    <div className='row-[2_/_span_1] col-span-[2_/_span_3] px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] w-full flex flex-col gap-10'>
    <section id='home' className='relative flex flex-col justify-center gap-5 pl-1 h-screen'>
      <MouseTrailAnimation />
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
      className='text-white mt-8 text-lg ' > I've been on a fantastic adventure in the web development world for the past few years, crafting digital wonders and scaling up cool projects. Let's Connect</motion.h2>
      </div>
      <div className='relative w-fit'>
      <Slide />
      <motion.div initial={{ opacity: 0}} whileInView={{y: -10,opacity: 1}} transition={{type:'spring',duration: 2, delay: 1}} >
      <a href='#contact' className='border border-[#0AFF9D] px-4 py-2 hover:text-[#0AFF9D] bg-[#0AFF9D] hover:bg-[#111111]  text-black transition-all duration-500'>Contact Me</a>
      </motion.div>
      </div>
      </section>
      
      </div>      
  )
}

export default Home