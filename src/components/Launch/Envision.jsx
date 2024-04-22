import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Envision = () => {
    return (
        <div className='h-max min-h-screen px-[10%] flex flex-row items-start justify-center'>
            <div className='flex w-full mt-[120px] mb-[120px] md:mb-0 flex-col md:flex-row'>
                <div className="flex md:w-1/2 h-full flex-col pb-8 md:pb-0">
                    <div className='text-[32px]/[120%] tracking-tight text-neutral-500 mb-8'>What we're doing</div>
                    <div className='text-[20px]/[120%] text-[#1e1e1e] border-[#1e1e1e] tracking-tight font-bold w-80 border-b-2 border- pb-4 mb-16 md:mb-0 justify-between hidden md:flex'>
                        <div className="flex justify-between w-full hover:translate-y-[-5px] transition-all duration-300 cursor-pointer group">
                            Take a look at our team
                            <div className='flex items-center justify-center font-semibold group-hover:rotate-[-45deg] transition-all duration-300 ease-in-out'><FaArrowRight /></div>
                        </div>
                    </div>
                </div>
                <div className="flex md:w-1/2 h-full flex-col gap-12 md:gap-[24px] ">
                    <div className='text-[50px]/[110%] tracking-tighter text-neutral-900'>We envision a future where Nepal emerges as a key player in the global aerospace community.</div>
                    <div className='text-[28px]/[120%] tracking-tight text-black'>Leveraging our expertise and resources, we develop cutting-edge rocket propulsion technology,</div>
                    <div className='text-[28px]/[120%] tracking-tight text-neutral-500 pb-8 md:pb-0'>and we hope to lead the charge.</div>
                    <div className='text-[20px]/[120%] text-[#1e1e1e] border-[#1e1e1e] tracking-tight font-bold w-80 border-b-2 border- pb-4 mb-16 md:mb-0 justify-between md:hidden flex'>
                        <div className="flex justify-between w-full hover:translate-y-[-5px] transition-all duration-300 cursor-pointer group">
                            Take a look at our team
                            <div className='flex items-center justify-center font-semibold group-hover:rotate-[-45deg] transition-all duration-300 ease-in-out'><FaArrowRight /></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Envision