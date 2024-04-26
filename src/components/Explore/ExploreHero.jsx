import React from 'react'

const ExploreHero = () => {
    return (
        <div className='min-h-screen h-max flex items-center justify-center px-[10%]'>
            <div className="flex w-full flex-col md:flex-row gap-14 py-24">
                <div className='md:w-1/2 flex flex-col gap-4'>
                    <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' className='text50'>Explore Danphe Rocketry!</div>
                    <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' data-aos-delay='100' className='text28 text-neutral-600'>Take a look at what we've been up to!</div>
                </div>
                <div className='md:w-1/2 flex gap-7 flex-col divide-y divide-neutral-400'>
                    <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' data-aos-delay='50' className='flex text28'>At Danphe Rocketry, our mission is to inspire, innovate, and ignite a passion for space exploration in Nepal and beyond.</div>
                    <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' data-aos-delay='100' className='flex text28 pt-7'>We envision a future where Nepal emerges as a key player in the global aerospace community, with Danphe Rocketry leading the charge in space innovation.</div>
                </div>
            </div>
        </div>
    )
}

export default ExploreHero