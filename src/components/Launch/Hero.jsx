import { FaArrowRight } from "react-icons/fa6";
import React from 'react'

const Hero = () => {
    return (
        <div id='hero' className='flex h-max min-h-screen justify-center items-center px-[10%]'>
            <div className="flex w-full h-max mt-[60px]">
                <div className="flex lg:w-1/2 flex-col gap-8">
                    <div className="text50 text-white">
                        Danphe Rocketry is a pioneering aerospace company based in Nepal
                    </div>
                    <div className="text28 text-neutral-100">
                        We are committed to designing and manufacturing innovative rocket engines that propel us towards the stars
                    </div>
                    <div className='textLink text-white border-white  w-[75%] md:w-80 border-b-2 pb-4 justify-between flex'>
                        <div className="flex justify-between w-full hover:translate-y-[-5px] transition-all duration-300 cursor-pointer group">
                            Read more about us
                            <div className='flex items-center justify-center font-semibold group-hover:rotate-[-45deg] transition-all duration-300 ease-in-out'><FaArrowRight /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero