import React from 'react'
import img from '../../assets/researchJoinImg.png'

const ResearchJoin = () => {
    return (
        <div className='flex h-max px-[10%] items-center justify-center pt-24'>
            <div className="flex flex-col md:flex-row w-full gap-20">
                <div className="flex md:w-4/12">
                    <img src={img} className='flex object-cover object-[center] rounded-3xl shadow-lg' alt="" />
                </div>
                <div className='flex md:w-8/12'>
                    <div className='text50 text-center md:text-start'>Whether you're an aspiring aerospace engineer, a space enthusiast, or a supporter of scientific advancement, we invite you to join us on our journey to the stars.</div>
                </div>
            </div>
        </div>
    )
}

export default ResearchJoin