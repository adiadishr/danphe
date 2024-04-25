import { useState } from 'react';
import { Link } from 'react-router-dom';
import ramHari from '../../assets/ramHari.png';

const ExploreCard = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const explore = [

        {
            name: "Hello 1",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 2",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 3",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 4",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 5",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            ccover: ramHari,

        },
        {
            name: "Hello 6",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 7",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 8",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 9",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 10",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,
        },
        {
            name: "Hello 11",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,

        },
        {
            name: "Hello 12",
            desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
            cover: ramHari,
        },


    ]

    return (
        <div className='flex ml-10 flex-wrap'>
            {explore.map((val, index) => (
                <div
                    className='p-[60px]  text-center '
                    key={index}

                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >

                    {/* Display cover image only if not hovered  */}

                    {hoveredIndex !== index && (
                        <img src={val.cover} alt='' className='border border-black w-[200px] h-[350px] border-r-foreground' />
                    )}

                    {/* Display other elements only if hovered */}
                    {hoveredIndex === index && (
                        <>
                            <h4 className="text-xl font-bold">{val.name}</h4>
                            <p className="text-sm m-[40px]">{val.desc}</p>

                            <button className='outline-btn bg-blue-600 text-white border border-teal-400 hover:bg-blue-700 hover:text-white transition duration-500 ease-in-out'>See More </button>

                        </>
                    )}


                </div>

            ))}


        </div>
    )

}
export default ExploreCard