import React from 'react'
import { motion } from 'framer-motion';

const SideBar = ({ scrollHandler, section2, section3, section4, section5, activeSection  }) => {

  return (
    <div class=" flex flex-col gap-5 pt-10 items-center justify-center">
      <h1 className='text-white text-5xl bg-[#111111] px-3 py-2'>Z<span className='text-[#0AFF9D]'>.</span></h1>
    <div class="h-full w-full relative flex flex-col sidebar">
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center ${activeSection === section2 ? 'border-[#0AFF9D] border-r-2' : '' } `}
      onClick={() => scrollHandler(section2)}>
        <motion.span initial={{ x:-120, rotate: 120}} animate={{ x: 0, rotate: 90}} transition={{type: 'spring', duration: 1, delay: 1}}  className="transform rotate-90 cursor-pointer ">About</motion.span>
      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center ${activeSection === section3 ? 'border-[#0AFF9D] border-r-2' : '' } `}
      onClick={() => scrollHandler(section3)}>          <motion.span initial={{ x:-120, rotate: 120}} animate={{ x: 0, rotate: 90}} transition={{type: 'spring', duration: 1, delay: 1.3}} className="transform rotate-90 cursor-pointer ">Projects</motion.span>      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center ${activeSection === section4 ? 'border-[#0AFF9D] border-r-2' : '' } `}
      onClick={() => scrollHandler(section4)}>
        <motion.span initial={{ x:-120, rotate: 120}} animate={{ x: 0, rotate: 90}} transition={{type: 'spring', duration: 1, delay: 1.6}}  class=" transform rotate-90 cursor-pointer ">Experience</motion.span>
      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center ${activeSection === section5 ? 'border-[#0AFF9D] border-r-2' : '' } `}
      onClick={() => scrollHandler(section5)}>
        <motion.span initial={{ x:-120, rotate: 120}} animate={{ x: 0, rotate: 90}} transition={{type: 'spring', duration: 1, delay: 1.9}} class=" transform rotate-90 cursor-pointer ">Contact</motion.span>
      </div>
    </div>
</div>

  
  );
};


export default SideBar;