import React, { useEffect, useState } from 'react'

function Eyebar() {
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center 
            bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] 
               -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] 
                    rounded-full bg-zinc-100 relative'>
                        <span className='absolute text-zinc-100 text-lg font-semibold z-10'>
                            Play
                        </span>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-black text-red-600'>
                        <div style={{transform: `translate(-50%, -50%) 
                            rotate(${rotate}deg)`}}  className='absolute w-full h-10 top-1/2 left-1/2
                            -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100 '></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] 
                    rounded-full  bg-zinc-100 relative'>
                    <span className='absolute text-zinc-100 text-lg font-semibold z-10'>
                        Play
                    </span>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-black'>
                        <div style={{transform: `translate(-50%, -50%) 
                            rotate(${rotate}deg)`}}  className='absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-5 h-5 rounded-full bg-zinc-100 '></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyebar