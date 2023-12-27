import React from 'react'
import { motion } from 'framer-motion'
import projectImage1 from '../../assets/hh.png'
import Slide from '../../components/Slide'

const Projects = () => {

    const projectDetails = [
        {
            title: 'To Do List App',
            proImage: projectImage1,
            details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed ullam earum magnam perferendis labore accusantium adipisci, neque dolorem rem doloribus sapiente officiis quo, nesciunt laudantium ipsum vitae excepturi est? ',
            codeUsed: ['React', 'Tailwind']
        },
        {
            title: 'To Do List App',
            proImage: projectImage1,
            details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed ullam earum magnam perferendis labore accusantium adipisci, neque dolorem rem doloribus sapiente officiis quo, nesciunt laudantium ipsum vitae excepturi est? ',
            codeUsed: ['React', 'Tailwind']
        },
        {
            title: 'To Do List App',
            proImage: projectImage1,
            details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sed ullam earum magnam perferendis labore accusantium adipisci, neque dolorem rem doloribus sapiente officiis quo, nesciunt laudantium ipsum vitae excepturi est? ',
            codeUsed: ['React', 'Tailwind']
        },
    ]

  return (
    <div className='mt-[100px]'>
    <div className='flex flex-row items-center relative '>
      <motion.hr  className='w-full'/>
      <div className='relative'>
        <Slide />
      <motion.h1  initial={{ y:10, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-white pl-1 font-mono text-5xl font-extrabold z-10'>Projects<span className='text-[#0AFF9D]'>.</span></motion.h1>
      </div>
      </div>
    <div className='flex flex-col md:flex-row flex-wrap justify-between mt-10'>
        {projectDetails.map((projectDetail, index) => <motion.div  initial={{ y:20, opacity: 0}} whileInView={{ y: 0,opacity: 1}} transition={{type:'tween',duration: 1, delay: 1}} key={index} className='w-full md:w-[400px] my-5 text-white flex flex-col gap-3'>
            <div className='h-[150px] relative w-full md:w-[400px] bg-[#232323] flex flex-col justify-end'>
                <Slide />
                <motion.img src={projectDetail.proImage} alt={projectDetail.title} className=' w-full h-full object-cover hover:scale-110'/>
            </div>
            <div className='flex flex-row items-center  '>
            <div className='relative w-2/4 md:w-3/4'>
            <Slide />
      <motion.h1  initial={{ y:5, opacity: 0}} whileInView={{ y: -5,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-white font-mono font-bold text-lg  z-10'>{projectDetail.title}<span className='text-[#0AFF9D]'>.</span></motion.h1>
            </div>
      <motion.hr  className='w-full'/>
      </div>
      <div className='relative w-2/4'>
        <Slide />
      <h1 className='text-[#0AFF9D]'>React - Tailwind - Figma</h1>
      </div>
      <div className='relative'>
        <Slide />
      <h1 className='w-full'>A real time To Do List App that can be used to mangage daily activities. It can be use to add task and mark task complete</h1>
      </div>
        </motion.div>)}
    </div>
    </div>
  )
}

export default Projects