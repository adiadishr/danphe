import React from 'react'
import oxygen from '../../assets/oxygen.jpeg'
import rocket from '../../assets/test.jpeg'
import transmitter from '../../assets/transmitter.png'
import process from '../../assets/research.jpeg'



const ResearchMainItem = ({ position, desc, title, img }) => {

    let imgSrc;
    switch (img) {
        case 'oxygen':
            imgSrc = oxygen;
            break;
        case 'rocket':
            imgSrc = rocket;
            break;
        case 'transmitter':
            imgSrc = transmitter;
            break;
        case 'process':
            imgSrc = process;
            break;
        default:
            imgSrc = oxygen; // Default to oxygen image
    }

    if (position === 1) {
        return (
            <div className="flex lg:flex-row flex-col w-full h-max gap-20">
                <div data-aos='fade-up' data-aos-duration='700'  data-aos-once='true' className="lg:w-[55%] lg:flex-grow">
                    <img src={imgSrc} className='rounded-3xl object-cover brightness-75 w-full h-[50vh] md:h-[60vh] flex flex-1' alt="image of team" />
                </div>
                <div data-aos='fade-up' data-aos-delay='300' data-aos-duration='700' data-aos-once='true' className="sticky flex lg:w-[45%] flex-col gap-8">
                    <div className="text50 text-neutral-800 text-center lg:text-start sticky">
                        {title}
                    </div>
                    <div className="text28 text-black text-center lg:text-start">
                        {desc}
                    </div>
                </div>
            </div>
        );
    }

    if (position === 2) {
        return (
            <div className="flex lg:flex-row flex-col w-full h-max relaive gap-20">
                <div data-aos='fade-up' data-aos-delay='300' data-aos-duration='700' data-aos-once='true' className="sticky flex lg:w-[45%] flex-col gap-8 order-2 md:order-1">
                    <div className="text50 text-neutral-800 text-center lg:text-start sticky">
                        {title}
                    </div>
                    <div className="text28 text-black text-center lg:text-start">
                        {desc}
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration='700' data-aos-once='true' className="lg:w-[55%] lg:flex-grow order-1 md:order-2">
                    <img src={imgSrc} className='rounded-3xl object-cover brightness-75 w-full h-[50vh] md:h-[60vh] flex flex-1' alt="image of team" />
                </div>
            </div>
        );
    }

    return null;
}

export default ResearchMainItem