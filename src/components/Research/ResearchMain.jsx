import React from 'react'
import oxygen from '../../assets/oxygen.jpeg'

const ResearchMain = () => {
    return (
        <div className='min-h-screen flex bg-opacity-5 px-[10%] items-center justify-center'>
            <div className="flex lg:flex-row flex-col w-full h-max mt-[80px]">
                <div data-aos='fade-up' data-aos-duration='700' className="lg:w-1/2 relative lg:pr-14 pb-14 lg:flex-grow">
                    <img src={oxygen} className='rounded-3xl object-cover brightness-75 w-full h-full flex flex-1' alt="image of team" />
                </div>
                <div data-aos='fade-up' data-aos-delay='300' data-aos-duration='700' className="flex lg:w-1/2 flex-col gap-8 pb-14 lg:pb-0">
                    <div className="text50 text-neutral-800 text-center lg:text-start">
                        Our team is our greatest asset comprised of skilled engineers, scientists, and enthusiasts.
                    </div>
                    <div className="text28 text-black text-center lg:text-start">
                        The combustion process relies on oxygen for fuel ignition. Integrating fuel into the engine enhances its capabilities, including the ability to regulate thrust, particularly evident in hybrid engines
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchMain