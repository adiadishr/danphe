import React from 'react'
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <div className='flex h-max md:h-screen min-h-screen items-center justify-center'>
            <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' id='mainStats' className='flex w-[95%] md:w-[99%] h-[90%] rounded-full items-center justify-center'>
                <div className='text-white flex gap-[150px] text86 flex-col md:flex-row my-[80px] md:my-0 w-full justify-between px-[10%]'>
                    <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' data-aos-delay='300' className='flex items-center justify-center flex-col gap-4 divide-y-2 divide-neutral-300'>
                        <div><CountUp end={128} /></div>
                        <div className='text24 text-center pt-8'>Total Tests</div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' data-aos-delay='400' className='flex items-center justify-center flex-col gap-4 divide-y-2 divide-neutral-300'>
                        <div><CountUp end={58} /></div>
                        <div className='text24 text-center pt-8'>Total Successfull</div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' data-aos-delay='500' className='flex items-center justify-center flex-col gap-4 divide-y-2 divide-neutral-300'>
                        <div><CountUp end={32} /></div>
                        <div className='text24 text-center pt-8'>Total Restesting</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats