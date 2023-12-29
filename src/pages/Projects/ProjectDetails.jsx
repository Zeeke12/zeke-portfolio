import React from 'react'
import { projectDetails } from '../../components/projects'
import { FaGithub } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";




const ProjectDetails = ({ selectedItem }) => {

  return (
    <div className='flex flex-col h-fit rounded-2xl w-[520px] relative bg-[#111111]'>
            <img src={projectDetails[selectedItem -1].proImage} alt={projectDetails[selectedItem - 1].title} className='h-[250px] w-full object-contain' />
            <div className='flex flex-col relative gap-5 px-5 py-5'>
              <div>
            <h3 className='text-2xl font-bold'>{projectDetails[selectedItem - 1].title}</h3>
            <p className='text-[#0AFF9D]'>{projectDetails[selectedItem - 1].codeUsed}</p>
            <p className='w-full'>{projectDetails[selectedItem - 1].details}</p>
              </div>
            <div>
            <h3 className='text-2xl font-bold'>Project Links</h3>
            <div className='flex items-center text-[#0AFF9D] gap-5'>
              <a href={projectDetails[selectedItem - 1].source} className='flex items-center text-[#0AFF9D]'><FaGithub /> Source Code</a>
              <a href={projectDetails[selectedItem - 1].link} className='flex items-center text-[#0AFF9D]'><IoMdExit /> live project</a>
            </div>
            </div>
            </div>
          </div>
  )
}

export default ProjectDetails