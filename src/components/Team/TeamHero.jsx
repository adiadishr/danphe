import React from 'react'
import teamImg from '../../assets/team.png'

const TeamHero = () => {
    return (
        <div className='flex min-h-screen px-[10%] items-center justify-center'>
            <div className="flex lg:flex-row flex-col w-full h-max mt-[180px] md:mt-[80px]">
                <div data-aos='fade-up' data-aos-duration='700' className="flex lg:w-1/2 flex-col gap-8 lg:pr-14 pb-14 lg:pb-0 order-2 md:order-1">
                    <div className="text50 text-neutral-800 text-center lg:text-start">
                        Our team is our greatest asset comprised of skilled engineers, scientists, and enthusiasts.
                    </div>
                    <div className="text28 text-black text-center lg:text-start">
                        Together, we strive to push the boundaries of what's possible in the field of space technology, putting Nepal on the map as a hub for aerospace excellence.
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='300' data-aos-once='true' data-aos-duration='700' className="lg:w-1/2 relative pb-14 lg:flex-grow order-1 md:order-2">
                    <img src={teamImg} className='rounded-3xl object-cover brightness-75 w-full h-full flex flex-1' alt="image of team" />
                </div>
            </div>
        </div>
    )
}

export default TeamHero