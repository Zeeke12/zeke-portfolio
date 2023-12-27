import React from 'react'
import { motion } from 'framer-motion'
import Slide from '../../components/Slide'
import projectImage1 from '../../assets/TO DO.png'
import projectImage2 from '../../assets/Admin.png'
import projectImage3 from '../../assets/Ai.png'

const Projects = () => {

    const projectDetails = [
        {
            title: 'To Do List App',
            proImage: projectImage1,
            details: 'A real time To Do List App that can be used to mangage daily activities. It can be use to add task and mark task complete',
            codeUsed: 'React - Tailwind CSS - Javascript'
        },
        {
            title: 'Admin Dashboard',
            proImage: projectImage2,
            details: 'A glance at the dashboard provides an instant snapshot of ongoing projects, milestones, and critical metrics. Administrators can track progress, identify bottlenecks, and ensure timely project delivery.',
            codeUsed: 'React - Tailwind CSS - Figma - Framer Motion'
        },
        {
            title: 'Ai Article Summarizer',
            proImage: projectImage3,
            details: 'A tool that employs cutting-edge artificial intelligence to analyze lengthy articles and condense them into concise, easily digestible summaries.',
            codeUsed: 'React - Tailwind CSS - Figma - Fetch Api - Javascript'
        },
    ]

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
        {projectDetails.map((projectDetail, index) => <motion.div  initial={{ y:20 }} whileInView={{ y: 0,opacity: 1}} transition={{type:'tween',duration: 1, delay: 1}} key={index} className='w-full md:w-[400px] my-5 text-white flex flex-col gap-3'>
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
      <h1 className='w-full'>{projectDetail.details}</h1>
      </div>
        </motion.div>)}
    </div>
    </div>
  )
}

export default Projects