import React from 'react';
import { motion } from 'framer-motion';

const Slide = () => {

 const variants = {
    initial: { x: 0 },
    whileInView: { width: '0' },
    exit: { },
 };

 return (
  <motion.div  className=' w-full h-full bg-[#0AFF9D] absolute z-40'
  variants={variants}
  initial="initial"
  whileInView="whileInView"
  exit="exit"
  transition={{type:'tween', duration: 0.8, delay: 0.5 }}>
 </motion.div>
 );
};

export default Slide;