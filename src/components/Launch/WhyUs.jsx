import React from 'react'

const WhyUs = () => {
  return (
    <div className='flex h-max min-h-[120vh] flex-col px-[10%] items-start justify-center gap-24 mb-16'>
      <div className='flex flex-col text-[20px]/[120%] tracking-tight mt-[160px] md:mt-0'>
        <div className='text-[32px]/[120%] tracking-tight'>What sets us apart</div>
        <div className='tracking-tight text-[32px]/[120%] text-neutral-500'>Why we will lead the charge to reach the stars</div>
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex flex-col text-justify divide-y-2 divide-neutral-500 md:pr-16 md:pb-0 pb-16 '>
          <div className='text-[28px]/[120%] tracking-tight text-black pb-8'>01. Expertise and Reach</div>
          <div className='pt-8 text-[24px]/[120%] tracking-tight text-neutral-500 text-justify text-pretty'>We bring together a team of skilled engineers, scientists, and enthusiasts passionate about aerospace. We combine local talent with international partnerships to drive innovation and excellence.</div>
        </div>
        <div className='flex flex-col text-justify divide-y-2 divide-neutral-500 md:pr-16 md:pb-0 pb-16'>
          <div className='text-[28px]/[120%] tracking-tight text-black pb-8'>02. Innovation at our Core</div>
          <div className='pt-8 text-[24px]/[120%] tracking-tight text-neutral-500 text-justify text-pretty'>We are at the forefront of developing state-of-the-art rocket engines using the latest technologies and materials. Our pursuit of innovation ensures that we stay ahead in the ever-evolving field of aerospace engineering.</div>
        </div>
        <div className='flex flex-col text-justify divide-y-2 divide-neutral-500 md:pb-0 pb-16'>
          <div className='text-[28px]/[120%] tracking-tight text-black pb-8'>03. Sustainability</div>
          <div className='pt-8 text-[24px]/[120%] tracking-tight text-neutral-500 text-justify text-pretty'>Sustainability is at the heart of everything we do. We are dedicated to minimizing our environmental footprint and adopting eco-friendly practices in our manufacturing processes.</div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs