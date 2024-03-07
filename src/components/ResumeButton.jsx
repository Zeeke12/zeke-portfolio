import React from 'react'
import { motion } from 'framer-motion';


const ResumeButton = () => {
    const handleDownload = () => {
        // Assuming you have a PDF file named 'resume.pdf'
        const downloadLink = document.createElement('a');
        downloadLink.href = '/Hezekiah_Ajesi.pdf';
        downloadLink.download = 'Hezekiah_Ajesi.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };
      
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.9 }}
      onClick={handleDownload}
      className="border border-[#0AFF9D] px-4 py-2 text-[#0AFF9D] hover:bg-[#0AFF9D] hover:text-black transition-all duration-500"
    >
      My Resume
    </motion.button>
  )
}

export default ResumeButton