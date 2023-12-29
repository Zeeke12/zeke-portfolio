import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Slide from '../../components/Slide'
import { projectDetails } from '../../components/projects';
import { IoMdClose } from "react-icons/io";
import ProjectDetails from './ProjectDetails';





const Projects = () => {


    
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (id) => {
      setSelectedItem(id === selectedItem ? null : id);
      document.body.classList.add('no-scroll');
    };
  
    const handleClose = () => {
      setSelectedItem(null);
      document.body.classList.remove('no-scroll');
    };
  



  return (
    <div className='mt-[100px] flex flex-col mx-auto justify-center'>
    <div className='flex flex-row items-center relative '>
      <motion.hr  className='w-full'/>
      <div className='relative'>
        <Slide />
      <motion.h1  initial={{ y:10, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-white pl-1 font-mono text-5xl font-extrabold z-10'>Projects<span className='text-[#0AFF9D]'>.</span></motion.h1>
      </div>
      </div>
    <div className='flex w-full flex-col justify-around md:flex-row flex-wrap md:justify-between mt-10'>
        {projectDetails.map((projectDetail, index) => <motion.div  initial={{ y:20 }} whileInView={{ y: 0,opacity: 1}} transition={{type:'tween',duration: 1, delay: 1}} key={index} className='w-full md:w-[400px] my-5 text-white flex flex-col gap-3' onClick={() => handleClick(projectDetail.id)}>
            <div className='h-[150px] relative w-full md:w-[400px] bg-[#232323] flex flex-col justify-end'>
                <Slide />
                <motion.img src={projectDetail.proImage} alt={projectDetail.title} className=' w-full h-full object-cover hover:scale-110'/>
            </div>
            <div className='flex flex-row items-center  relative '>
            <div className='relative w-max'>
            <Slide />
      <motion.h1  initial={{ y:5, opacity: 0}} whileInView={{ y: -5,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-white font-mono font-bold text-lg z-10'>{projectDetail.title}<span className='text-[#0AFF9D]'>.</span></motion.h1>
            </div>
      <motion.hr  className='w-full'/>
      </div>
      <div className='relative w-fit'>
        <Slide />
      <h1 className='text-[#0AFF9D]'>{projectDetail.codeUsed}</h1>
      </div>
      <div className='relative'>
        <Slide />
      <h1 className='w-full'>{projectDetail.details} <span className='text-[#0AFF9D] cursor-pointer' onClick={() => handleClick(projectDetail.id)}>Learn more</span></h1>
      </div>
        </motion.div>)}
    </div>
    <div className={`${selectedItem === null ? 'hidden' : 'fixed' } top-0 left-0 z-50 h-screen w-screen flex justify-between py-10 px-10 text-white popup-container`} style={{ backdropFilter: 'blur(10px)' }}>
      <div></div>
        {selectedItem !== null && (
          <ProjectDetails selectedItem={selectedItem} />
        )}
        <div>
          <button onClick={handleClose}><IoMdClose className='text-white'/></button>
        </div>
      </div>
    </div>
  )
}

export default Projects