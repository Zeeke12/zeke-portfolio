import React from 'react'
import { motion } from 'framer-motion'
import Slide from '../../components/Slide'

const Contact = () => {

  return (
    <div className='flex relative flex-col h-screen justify-center align-middle text-white text-center gap-10 '>
              <div className='relative'>
            <Slide />
<motion.h1 initial={{ opacity: 0}} whileInView={{ y: -10,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-white font-mono text-4xl md:text-8xl font-extrabold z-10'>Contact<span className='text-[#0AFF9D]'>.</span></motion.h1>        
              </div>
<div>
<div className='relative'>
        <Slide />
        <motion.h1 initial={{ opacity: 0}} whileInView={{ y: -10,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='w-auto'>Shoot me an email if you want to connect! You can also find me on Linkedin or Twitter if that's more your speed.</motion.h1>
</div>
<div className='relative'>
        <Slide />
        <motion.h1 initial={{ opacity: 0}} whileInView={{ y: -10,opacity: 1}} transition={{type:'spring',duration: 1, delay: 1}} className='text-[#0AFF9D] mt-5'>hezekiahajesi111@gmail.com</motion.h1>
</div>
        </div>
    </div>
  )
}

export default Contact