import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.05" className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='text-[#212121] font-["NeueMontreal, Roboto, sans-serif"] fon text-[3.5vw] leading-[4vw] tracking-tighter px-20'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

      <div className='flex w-full border-t-2 border-[#515545] mt-16 px-20 
        text-[#212121]'>
        <div className='w-1/2'>
          <h2 className='text-[3.5vw]'>Our approach:</h2>
          <button className='flex items-center gap-10 px-12 py-5 mt-5 bg-black rounded-full uppercase text-zinc-200'>Read More
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 mt-4'>
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" style={{borderRadius: '20px'}}/>
        </div>
      </div>
    </div>
  )
}

export default About