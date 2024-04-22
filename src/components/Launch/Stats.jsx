import React from 'react'

const Stats = () => {
    return (
        <div  className='flex h-max md:h-screen min-h-screen items-center justify-center'>
            <div id='mainStats' className='flex w-[99%] h-[90%] rounded-full items-center justify-center'>
                <div className='text-white flex gap-[150px] text-[86px]/[110%] tracking-[-5%] flex-col md:flex-row my-[80px] md:my-0 w-full justify-between px-[10%]'>
                    <div className='flex items-center justify-center flex-col gap-4 divide-y-2 divide-neutral-300'>
                        <div>128</div>
                        <div className='text-[24px]/[120%] tracking-[-3%] text-center pt-8'>Total Launches</div>
                    </div>
                    <div className='flex items-center justify-center flex-col gap-4 divide-y-2 divide-neutral-300'>
                        <div>58</div>
                        <div className='text-[24px]/[120%] tracking-[-3%] text-center pt-8'>Total Successfull</div>
                    </div>
                    <div className='flex items-center justify-center flex-col gap-4 divide-y-2 divide-neutral-300'>
                        <div>32</div>
                        <div className='text-[24px]/[120%] tracking-[-3%] text-center pt-8'>Total Restesting</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats