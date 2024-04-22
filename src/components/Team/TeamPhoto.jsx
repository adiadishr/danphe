import React from 'react';
import ramHari from '../../assets/ramHari.png';
import riteshDev from '../../assets/riteshDev.png';
import projawolKozu from '../../assets/projawolKozu.png';
import jeebanBastola from '../../assets/jeebanBastola.png';
import bishekChaudhari from '../../assets/bishekChaudhari.png';
import danbahadurGhartiMagar from '../../assets/danbahadurGhartiMagar.png';
import kishanNath from '../../assets/kishanNath.png';
import milanPun from '../../assets/milanPun.png';

const defaultPhoto = ramHari;

function getPhoto(photo) {
    switch (photo) {
        case 'ramHari':
            return ramHari
        case 'riteshDev':
            return riteshDev;
        case 'projawolKozu':
            return projawolKozu;
        case 'jeebanBastola':
            return jeebanBastola;
        case 'bishekChaudhari':
            return bishekChaudhari;
        case 'danbahadurGhartiMagar':
            return danbahadurGhartiMagar;
        case 'milanPun':
            return milanPun;
        case 'kishanNath':
            return kishanNath;
        default:
            return defaultPhoto;
    }
}



const TeamPhoto = ({ photo, delay, name, position }) => {
    return (
        <div data-aos='zoom-in' data-aos-duration='900' data-aos-delay={delay} className="group rounded-full size-[20rem] overflow-hidden relative shadow-2xl">
            <img src={getPhoto(photo)} alt="" className='absolute rounded-full size-[inherit] object-cover object-center brightness-[.85] group-hover:scale-[1.15] transition-all duration-[700ms] ease-in-out group-hover:blur-[6px] group-hover:brightness-75 cursor-pointer  z-[-1]' />
            <div className='absolute z-50 flex size-[inherit] items-center justify-center  group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] text-center flex-col px-[5%] gap-2 mt-4 divide-y'>
                <div className='text-white text-xl'>{name}</div>
                <div className='text-lg text-white font-extralight pt-2'>{position}</div>
            </div>
        </div>
    )
}

export default TeamPhoto