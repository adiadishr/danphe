import React from 'react'
import gif from '../../assets/demo.gif'
import ResearchRocketTable from './ResearchRocketTable'

const ResearchRocket = () => {
  return (
    <div className='min-h-screen flex h-max items-center justify-center px-[10%]'>
      <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' className='flex w-full flex-col md:flex-row'>
        <div className='flex items-center justify-center md:w-1/2'>
          <img src={gif} className='flex object-cover object-center' alt="" />
        </div>
        <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' data-aos-delay='200' className='flex md:w-1/2'>
          <ResearchRocketTable className='flex' />
        </div>
      </div>
    </div>
  )
}

export default ResearchRocket