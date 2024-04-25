import React from 'react';
import oxygen from '../../assets/oxygen.jpeg';
import ResearchMainItem from './ResearchMainItem';

const descs = [
    'The combustion process relies on oxygen for fuel ignition. Integrating fuel into the engine enhances its capabilities, including the ability to regulate thrust, particularly evident in hybrid engines.',
    'The image showcases a test setup featuring a liquid oxygen tank and a hybrid rocket engine. Embedded sensors record data for analysis and adjustment. This is crucial for optimizing rocket propulsion systems in space exploration endeavors.',
    'Obtaining key data from the system is essential for its continuous refinement. The transmitter and receiver mentioned above facilitate the transmission of data from the onboard computer, enabling crucial feedback for system optimization.',
    'Conducting numerous iterations of the system during the research and development phases of rocket development is vital for advancing the system to achieve optimal results and critical for refining its performance and achieving desired outcomes.'
];

const ResearchMain = () => {
    return (
        <div className='h-max flex bg-opacity-5 px-[10%] items-center justify-center'>
            <div className='w-full flex flex-col gap-24 md:gap-32 pt-48 pb-24'>
                <ResearchMainItem position={1} title='Rocket Engine' desc={descs[1]} img='rocket' />
                <ResearchMainItem position={2} title='Oxygen Tank' desc={descs[0]} img='oxygen' />
                <ResearchMainItem position={1} title='Transmitter' desc={descs[2]} img='transmitter' />
                <ResearchMainItem position={2} title='The Proces' desc={descs[3]} img='process' />
            </div>
        </div>
    );
}

export default ResearchMain;
