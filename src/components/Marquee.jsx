import { motion } from 'framer-motion'
import React from 'react'

function marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='border-t-2 border-b-2 border-zinc-300 overflow-hidden mt-10'>
        <div className='flex whitespace-nowrap'>
          <motion.h1 
          initial={{x: 0}} animate= {{x: "-100%"}} 
          transition={{ease: "linear", repeat: Infinity, duration: 15}} 
          className='text-[350px]  tracking-tighter leading-none font-
          ["Founders Grotesk, Roboto, sans-serif"] font-semibold uppercase m-0 -mt-12 pr-20'>We are Ochi</motion.h1>

          <motion.h1 
          initial={{x: 0}} animate= {{x: "-100%"}} 
          transition={{ease: "linear", repeat: Infinity, duration: 15}} 
          className='text-[350px] tracking-tighter leading-none font-["Founders_Grotesk, Roboto, sans-serif"] font-semibold uppercase m-0 -mt-10 pr-20'>We are Ochi</motion.h1>
        </div>
      </div>
    </div>
  )
}

export default marquee
