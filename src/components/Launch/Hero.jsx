import { FaArrowRight } from "react-icons/fa6";
import React from 'react'
import { Link } from "react-router-dom"

const Hero = () => {

    const goTo = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div id='hero' data-aos='fade' data-aos-duration='700' data-aos-once='true' className='flex h-max min-h-screen justify-center items-center px-[10%]'>
            <div className="flex w-full h-max mt-[60px]">
                <div className="flex lg:w-1/2 flex-col gap-8">
                    <div data-aos='fade-up' data-aos-delay='100' data-aos-duration='700' className="text50 text-white">
                        Danphe Rocketry is a pioneering aerospace company based in Nepal
                    </div>
                    <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='700' className="text28 text-neutral-100">
                        We are committed to designing and manufacturing innovative rocket engines that propel us towards the stars
                    </div>
                    <div data-aos='fade-up' data-aos-delay='300' data-aos-duration='700' className='textLink text-white border-white  w-[75%] md:w-80 border-b-2 pb-4 justify-between flex'>
                        <Link onClick={goTo} to='/research' className="flex justify-between w-full hover:translate-y-[-5px] transition-all duration-300 cursor-pointer group">
                            Read more about us
                            <div className='flex items-center justify-center font-semibold group-hover:rotate-[-45deg] transition-all duration-300 ease-in-out'><FaArrowRight /></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero