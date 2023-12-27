import React, { useState } from 'react'
import { useTabContext } from './TabContext';

const SideBar = () => {
  const { activeTab, handleTabClick } = useTabContext();


  return (
    <div class="w-[50px] bg-[#080808] h-screen sticky top-0 flex flex-col gap-5 pt-10 items-center justify-center">
      <h1 className='text-white'>Z</h1>
    <div class="h-full w-full relative flex flex-col sidebar">
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center 
      ${activeTab === 'about' ? 'border-r border-[#0AFF9D] bg-[#111111]' : ''}
      `}
      onClick={() => handleTabClick('about')}>
        <a href="#" className="transform rotate-90 ">About</a>
      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center ${activeTab === 'projects' ? 'border-r border-[#0AFF9D] bg-[#111111]' : ''}`}
      onClick={() => handleTabClick('projects')}>
        <h1  onClick={() => handleTabClick('projects')} class=" transform rotate-90 ">Projects</h1>
      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center ${activeTab === 'experience' ? 'border-r border-[#0AFF9D] bg-[#111111]' : ''}`}
      onClick={() => handleTabClick('experience')}>
        <a href="#" class=" transform rotate-90 ">Experience</a>
      </div>
      <div className={`w-full h-[50px] text-[#7A7A7E] hover:text-white relative bg-transparent hover:bg-[#111111] hover:border-r hover:border-[#0AFF9D] flex justify-center py-10 items-center ${activeTab === 'contact' ? 'border-r border-[#0AFF9D] bg-[#111111]' : ''}`}
      onClick={() => handleTabClick('contact')}>
        <a href="#" class=" transform rotate-90 ">Contact</a>
      </div>
    </div>
</div>

  
  );
};


export default SideBar