import React, { useState } from 'react'
import { useTabContext } from './TabContext';
import { motion } from 'framer-motion';

const SideBar = () => {
  const { activeTab, handleTabClick } = useTabContext();


  return (
    <div class=" flex flex-col gap-5 pt-10 items-center justify-center">
      <h1 className='text-white text-5xl bg-[#111111] px-3 py-2'>Z<span className='text-[#0AFF9D]'>.</span></h1>
    <div class="h-full w-full relative flex flex-col sidebar">
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center 
  
      `}
      onClick={() => handleTabClick('about')}>
        <motion.a initial={{ x:-120, rotate: 120}} animate={{ x: 0, rotate: 90}} transition={{type: 'spring', duration: 1, delay: 1}} href="#about" className="transform rotate-90 ">About</motion.a>
      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center $`}>          <motion.a initial={{ x:-120, rotate: 120}} animate={{ x: 0, rotate: 90}} transition={{type: 'spring', duration: 1, delay: 1.3}} href="#projects" className="transform rotate-90 ">Projects</motion.a>      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center `}
      onClick={() => handleTabClick('experience')}>
        <motion.a initial={{ x:-120, rotate: 120}} animate={{ x: 0, rotate: 90}} transition={{type: 'spring', duration: 1, delay: 1.6}} href="#experience" class=" transform rotate-90 ">Experience</motion.a>
      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center `}
      onClick={() => handleTabClick('contact')}>
        <motion.a initial={{ x:-120, rotate: 120}} animate={{ x: 0, rotate: 90}} transition={{type: 'spring', duration: 1, delay: 1.9}} href="#contact" class=" transform rotate-90 ">Contact</motion.a>
      </div>
    </div>
</div>

  
  );
};


export default SideBar