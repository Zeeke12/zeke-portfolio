import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const TopBar = () => {
  return (
    <div className='text-white py-10  px-5 min-w-screen flex flex-row justify-between' 
    style={{ backdropFilter: 'blur(10px)' }}>
        <motion.div initial={{ y:-200}} animate={{ y: 0}} transition={{type: 'spring', duration: 1, delay: 1}}>Zeke</motion.div>
        <div className='flex flex-row gap-5'>
          <motion.a  initial={{ y:-200}} animate={{ y: 0}} transition={{type: 'spring', duration: 1, delay: 1.3}}  href='https://github.com/Zeeke12/zeke-portfolio'><FaGithub /></motion.a >
          <motion.a initial={{ y:-200}} animate={{ y: 0}} transition={{type: 'spring', duration: 1, delay: 1.6}}  href='https://github.com/Zeeke12/zeke-portfolio'><FaLinkedin /></motion.a >
        </div>
        <motion.div initial={{ y:-200}} animate={{ y: 0}} transition={{type: 'spring', duration: 1, delay: 1.9}}>
          <a href='' className='border border-[#0AFF9D] px-4 py-2 text-[#0AFF9D] hover:bg-[#0AFF9D] hover:text-black transition-all duration-500'>My Resume</a>
        </motion.div>
        </div>
  )
}

export default TopBar