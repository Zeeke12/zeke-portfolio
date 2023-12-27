import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const TopBar = () => {
  return (
    <div className='text-white py-10 bg-black px-5 min-w-screen flex flex-row justify-between'>
        <div>Zeke</div>
        <div className='flex flex-row gap-5'>
          <a href='https://github.com/Zeeke12/zeke-portfolio'><FaGithub /></a>
          <FaLinkedin />
        </div>
        <div>
          <a href='' className='border border-[#0AFF9D] px-4 py-2 text-[#0AFF9D] hover:bg-[#0AFF9D] hover:text-black transition-all duration-500'>My Resume</a>
        </div>
        </div>
  )
}

export default TopBar