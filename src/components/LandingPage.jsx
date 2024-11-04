import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


export default function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" 
      className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 md:mt-40 px-6 md:px-12'> 
        {["We Create", "Eye opening", "Presentations"].map((item, index) => {
        return( 
        <div key={index} className="masker">
          <div className='w-fit flex items-center'>
            {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1] ,duration: 1}} className='mr-2 md:mr-5 w-[8vw] md:w-[8vw] rounded-md md:h-[5.7vw] h-[5.7vw] top-[0.5vw] relative bg-green-500'></motion.div>
            )}

            <h1 className='uppercase text-[7.5vw] md:text-[7.5vw] leading-[10vw] md:leading-[6.5vw] tracking-tighter font-["Founders_Grotesk, Roboto, sans-serif"] font-medium'>{item}</h1>
          </div>
        </div>
        )
        })}   
        </div> 
        <div className='border-t-[1px] border-zinc-700 mt-20 md:mt-28 
          flex-col md:flex-row 
          flex justify-between items-center px-6 md:px-[55px] py-5 gap-4 md:gap-0'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className={`text-[14px] md:text-[17px] font-light leading-none ${index === 1 ? 'md:ml-44' : ''}`}>{item}</p>
            ))}
            <div className="start flex items-center gap-2 mt-4 md:mt-0">
              <div className='px-4 py-2 border-[2px] rounded-full font-light 
               border-zinc-400 text-sm  md:text-md'>
                START THE PROJECTS
              </div>
              <div className='w-8 h-8 md:w-10 md:h-10 flex justify-center items-center 
                border-[2px] rounded-full font-light border-zinc-300'>
                <GoArrowUpRight className="text-sm md:text-lg" />
              </div>
            </div>
        </div>
    </div>
  )
}
