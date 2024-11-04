import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const card = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
        card[index].start({y: "0"})
    }
    const handleHoverEnd = (index) => {
        card[index].start({y: "100%"})
    }

  return (
    <div className='w-full py-20 bg-zinc-600'>
        <div className='w-full px-16 border-b-[1px] border-zinc-400 pb-10'>
            <h1 className='text-[3.5vw] leading-none tracking-tight'>Featured projects</h1>
        </div>
        <div className='flex'>
            <div className='w-full mt-10 mx-16 flex items-center gap-2'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h2 className='uppercase text-[13px] font-semibold font-["NeueMontreal, Roboto, sans-serif"] tracking-widest'>Fyde</h2>
            </div>
            <div className='w-full mt-10 mx-16 flex items-center gap-2 pr-44'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h2 className='uppercase text-[13px]  font-["NeueMontreal, Roboto, sans-serif"] tracking-widest'>vise</h2>
            </div>
        </div>
        <div className='flex mx-16 gap-4'>
            <motion.div 
            onHoverStart={() => handleHover(0)} 
            onHoverEnd={() => handleHoverEnd(0)}
            className='card w-1/2 mt-4 relative'>
            <h1 className='flex overflow-hidden absolute left-full -translate-x-1/2 z-[9]   leading-none tracking-tighter text-8xl font-semibold top-1/2 -translate-y-1/2 text-[#ccff12]'>
            {"FYDE".split('').map((item,index) => 
            <motion.span key={index} initial={{y: "0"}} animate={card[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}} className='inline-block'>{item}</motion.span>)}
            </h1>
            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" style={{borderRadius: '20px'}}/>
            </motion.div>
        
            <motion.div
            onHoverStart={() => handleHover(1)} 
            onHoverEnd={() => handleHoverEnd(1)} 
            className='card w-1/2 mt-4 relative'>
            <h1 className='flex overflow-hidden absolute right-full translate-x-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold top-1/2 -translate-y-1/2 text-[#ccff12]'>
            {"VISE".split('').map((item,index) => 
            <motion.span key={index} initial={{y: "0"}} animate={card[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}} className='inline-block'>{item}</motion.span>)}
            </h1>
            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" style={{borderRadius: '20px'}}/>
            </motion.div>
        </div>
        <div className='flex mt-5'>
            <div className='w-full mt-10 mx-16 flex items-center gap-2'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h2 className='uppercase text-[13px] font-["NeueMontreal, Roboto, sans-serif"] tracking-widest font-semibold'>Cardboard Spaceship</h2>
            </div>
            <div className='w-full mt-10 mx-16 flex items-center gap-2 pr-44'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h2 className='uppercase text-[13px] font-semibold font-["NeueMontreal, Roboto, sans-serif"] tracking-widest'>AH2 & Matt Horn</h2>
            </div>
        </div>
        <div className='flex mx-16 gap-4'>
            <motion.div 
            onHoverStart={() => handleHover(0)} 
            onHoverEnd={() => handleHoverEnd(0)}
            className='card  w-1/2 mt-4 relative'>
            <h1 className='flex overflow-hidden absolute right-0 translate-x-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold top-1/2 -translate-y-1/2 text-[#ccff12]'>
            {"Cardboard Spaceship".split('').map((item,index) =>   
            <motion.span key={index} initial={{y: "0"}} animate={card[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}} className='inline-block'>{item}</motion.span>)}
            </h1>
            <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" style={{borderRadius: '20px'}}/>
            </motion.div>
          
            <motion.div 
                onHoverStart={() => handleHover(1)} 
                onHoverEnd={() => handleHoverEnd(1)}
                className='card w-1/2 mt-4 relative'>
                <h1 className='flex overflow-hidden absolute right-full translate-x-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold top-1/2 -translate-y-1/2 
                text-[#ccff12]'>
                {"AH2 & Matt Horn".split('').map((item,index) => 
                <motion.span key={index} initial={{y: "0"}} animate={card[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}} className='inline-block'>{item}</motion.span>)}
                </h1>
                <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" style={{borderRadius: '20px'}}/>
            </motion.div>
        </div>
        <div className='flex'>
            <div className='w-full mt-10 mx-16 flex items-center gap-2'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h2 className='uppercase text-[13px] font-semibold font-["NeueMontreal, Roboto, sans-serif"] tracking-widest'>trawa</h2>
            </div>
            <div className='w-full mt-10 mx-16 flex items-center gap-2 pr-44'>
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                <h2 className='uppercase text-[13px] font-semibold font-["NeueMontreal, Roboto, sans-serif"] tracking-widest'>Premium Blend</h2>
            </div>
        </div>
        <div className='flex mx-16 gap-4'>
            <motion.div
            onHoverStart={() => handleHover(0)} 
            onHoverEnd={() => handleHoverEnd(0)} 
            className='card w-1/2 mt-4 relative'>
            <h1 className='flex overflow-hidden absolute left-full -translate-x-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold top-1/2 -translate-y-1/2 text-[#ccff12]'>
            {"TRAWA".split('').map((item,index) => 
            <motion.span key={index} 
            initial={{y: "0"}} 
            animate={card[0]} 
            transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}} 
            className='inline-block'>{item}
            </motion.span>)}
            </h1>
            <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" style={{borderRadius: '20px'}}/>
            </motion.div>
        
            <motion.div
            onHoverStart={() => handleHover(1)} 
            onHoverEnd={() => handleHoverEnd(1)}
            className='card w-1/2 mt-4 relative'>
            <h1 className='flex overflow-hidden absolute right-full translate-x-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold top-1/2 -translate-y-1/2 text-[#ccff12]'>
            {"PREMIUM BLEND".split('').map((item,index) => 
            <motion.span key={index} 
            initial={{y: "0"}} 
            animate={card[1]} 
            transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}} 
            className='inline-block'>{item}
            </motion.span>)}
            </h1>
            <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" style={{borderRadius: '20px'}}/>
            </motion.div>
        </div>
    </div>
  )
}

export default Featured