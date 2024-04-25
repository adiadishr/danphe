import React from 'react'
import TeamPhoto from './TeamPhoto'

const delay1 = 100;
const delay2 = window.innerWidth >= 768 ? 200 : 100;
const delay3 = window.innerWidth >= 768 ? 300 : 100;

const TeamMembers = () => {
    return (
        <div className='flex flex-col gap-[6rem] my-[8rem] px-[10%]'>
            <div className="flex md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-between justify-center items-center gap-[4rem] lg:gap-0 flex-col">
                <TeamPhoto photo='ramHari' delay={delay1} name='Ram Hari Chaudhari' position='Electronics Head' />
                <TeamPhoto photo='riteshDev' delay={delay2} name='Ritesh Dev' position='Mechanical Engineer' />
                <TeamPhoto photo='projawolKozu' delay={delay3} name='Projawol Kozu' position='Mechanical Engineer' />
            </div>
            <div className="flex md:flex-row md:justify-around flex-col items-center justify-center gap-[4rem] md:gap-0">
                <TeamPhoto photo='jeebanBastola' delay={delay1} name='Jeeban Bastola' position='Documentation' />
                <TeamPhoto photo='bishekChaudhari' delay={delay2} name='Ram Hari Chaudhari' position='Fabricator Head' />
            </div>
            <div className="flex md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-between justify-center items-center gap-[4rem] lg:gap-0 flex-col">
                <TeamPhoto photo='danbahadurGhartiMagar' delay={delay1} name='Danbahadur Gharti Magar' position='Mechanical Engineer' />
                <TeamPhoto photo='kishanNath' delay={delay2} name='Kisan Nath' position='Logistics' />
                <TeamPhoto photo='milanPun' delay={delay3} name='Milan Pun' position='Fabricator Head' />
            </div>
        </div>
    )
}

export default TeamMembers