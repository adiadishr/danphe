import React from 'react'
import art from '../../assets/danpheArt.png'
import { FaArrowRight } from 'react-icons/fa6'

const Art = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className="flex w-full px-[10%] flex-col md:flex-row gap-16 my-[80px] md:my-0">
        <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' className='flex md:w-1/2 justify-center items-center'>
          <img src={art} alt="" />
        </div>
        <div className='flex flex-col md:items-start justify-center md:w-1/2 gap-16 md:ml-32'>
          <h5 data-aos='fade-up' data-aos-duration='700' data-aos-once='true' className='text-neutral-800 text86 text-center md:text-start'>Danphe Rocketry  </h5>
          <p  data-aos='fade-up' data-aos-duration='700' data-aos-once='true' data-aos-delay='100' className='text28 text-neutral-500 text-center md:text-start'>Pioneers, Innovators, Designers</p>
        </div>
      </div>
    </div>
  )
}

export default Art
