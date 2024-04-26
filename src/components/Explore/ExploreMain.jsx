import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
    Fullscreen,
    Download,
    Thumbnails
} from 'yet-another-react-lightbox/plugins'
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photo1 from '../../assets/test.jpeg';
import photo2 from '../../assets/oxygen.jpeg';
import photo3 from '../../assets/demo.gif';

export const slides = [
    {
        src: photo1,
        title: 'Slide Title One',
        description: 'Slide Description One\n\nthis is new line',
    },
    {
        src: photo2,
        title: 'Slide Title Two',
        description: 'Slide Description Two',
    },
    {
        src: photo3,
        title: 'Slide Title Three',
        description: 'Slide Description Three',
    },
    // Add more slides as needed...
];


const ExploreMain = () => {

    const [open, setOpen] = useState(false);

    return (
        <div data-aos='fade-up' data-aos-once='true' data-aos-duration='700' className='gap-8 w-full px-[10%] grid grid-cols-1 md:grid-cols-3'>
            <button onClick={() => setOpen(true)}>Open</button>
            <Lightbox
                plugins={[Fullscreen, Download, Thumbnails]}
                open={open}
                close={() => setOpen(false)}
                slides={slides}
            />

        </div>
    )
}

export default ExploreMain