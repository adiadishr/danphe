import React from 'react'

const Rough = () => {
    return (
        <>
            <div className="flex flex-col md:w-1/2 justify-start">
                <h1 className='text-white text-[96px]/[95%] tracking-tight my-16 '>Exploring the stars.</h1>
                <h5 className='text-white text-pretty text-[32px]/[120%] tracking-tight mb-16'>We are a pioneering aerospace company based in Nepal, dedicated to pushing the boundaries of space exploration.</h5>
            </div>
            <div className="flex md:w-1/2 justify-center items-start">
                <div className='flex text-[20px]/[120%] text-white border-white tracking-tight font-semibold w-80 border-b-2 border- pb-4 mb-16 md:mb-0 justify-between'>
                    <div className="flex justify-between w-full hover:translate-y-[-5px] transition-all duration-300 cursor-pointer group">
                        Read more about us
                        <div className='flex items-center justify-center font-semibold group-hover:rotate-[-45deg] transition-all duration-300 ease-in-out'><FaArrowRight /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rough
