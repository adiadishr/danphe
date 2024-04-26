import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import photo1 from '../../assets/test.jpeg';
import photo2 from '../../assets/oxygen.jpeg';
import photo3 from '../../assets/demo.gif';
import photo4 from '../../assets/research.jpeg'
import photo5 from '../../assets/photo1.jpeg'
import photo6 from '../../assets/photo1.jpeg'
import photo7 from '../../assets/photo3.jpeg'
import photo8 from '../../assets/photo4.jpeg'
import photo9 from '../../assets/photo5.jpeg'

export const slides = [
    {
        src: photo1,
    },
    {
        src: photo2,
    },
    {
        src: photo3,
    },
    {
        src: photo4,
    },
    {
        src: photo5,
    },
    {
        src: photo6,
    },
    {
        src: photo7,
    },
    {
        src: photo8,
    },
    {
        src: photo9,
    },
];

const ExploreMain = () => {
    const [open, setOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setOpen(true);
        setSelectedImageIndex(index);
    };

    return (
        <div data-aos='fade-up' data-aos-once='true' data-aos-duration='700' className='gap-x-8 gap-y-24 w-full px-[10%] grid grid-cols-1 md:grid-cols-3'>
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.src}
                    alt={slide.title}
                    onClick={() => handleImageClick(index)}
                    className='rounded-3xl cursor-pointer hover:opacity-80'
                />
            ))}
            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides.filter((slide, index) => index === selectedImageIndex)}
                />
            )}
        </div>
    );
};

export default ExploreMain;
