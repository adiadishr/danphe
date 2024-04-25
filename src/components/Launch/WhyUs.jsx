import React from 'react'
import AccordionWhyUs from './accordionWhyUs/AccordionWhyUs'

const WhyUs = () => {
  return (
    <div className='flex h-max min-h-screen flex-col px-[10%] items-start justify-center gap-24 py-[160px]'>
      <div className='flex flex-col text-[20px]/[120%] tracking-tight  md:mt-0'>
        <div className='text32'>What sets us apart</div>
        <div className='text32 text-neutral-500'>Why we will lead the charge to reach the stars</div>
      </div>
      <div className='flex flex-col w-full'>
        <AccordionWhyUs />
      </div>
    </div>
  )
}

export default WhyUs