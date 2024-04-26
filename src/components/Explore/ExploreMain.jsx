import React from 'react'
import photo from '../../assets/brian-mcgowan-I0fDR8xtApA-unsplash.jpg'
import ramHari from '../../assets/ramHari.png'

const ExploreMain = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-[10%]'>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={photo} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={ramHari} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={photo} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={ramHari} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={photo} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={ramHari} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={photo} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={ramHari} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={photo} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={ramHari} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={photo} alt="" /></div>
            <div className='flex'><img className='object-cover object-center rounded-lg hover:opacity-80' src={ramHari} alt="" /></div>
        </div>
    )
}

export default ExploreMain