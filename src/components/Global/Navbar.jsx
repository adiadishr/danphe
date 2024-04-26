import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion"
import { Menu } from 'lucide-react';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
        console.log(nav);
    };

    return (
        <>
            <div className='fixed flex right-0 md:ml-[2%] z-20 w-20 items-center justify-center'>
                <img src={logo} className='w-full h-full flex' alt="" />
            </div>
            <div className='fixed left-0 top-[16px] flex ml-[2%] z-50 items-center justify-center'>
                <motion.button
                    onClick={toggleNav}
                    className='relative size-10 text24 rounded-2xl hover:bg-white/80 bg-white/40  transition-colors duration-300 text-black  backdrop-blur-3xl'
                    animate={nav ? "open" : "closed"}
                >
                    <motion.span
                        style={{
                            left: '50%',
                            top: '40%',
                            x: '-50%',
                            y: '-50%',
                        }}
                        className='absolute h-[1.5px] w-6 bg-black'
                        variants={{
                            open: {
                                rotate: "45deg",
                            },
                            closed: {
                                rotate: "0deg",
                            }
                        }}
                    />
                    <motion.span
                        style={{
                            left: '50%',
                            top: '60%',
                            x: '-50%',
                            y: '-50%',
                        }}
                        className='absolute h-[1.5px] w-6 bg-black' />
                </motion.button>
            </div>
            {
                nav ? (
                    <div data-aos='fade' className='fixed w-full h-[100vh] inset-0 z-30 bg-white/80 px-[2%] backdrop-blur-md flex'>
                        <div className='flex flex-col gap-4 pt-20 md:pt-24 divide-y w-full divide-neutral-600/50'>
                            <div data-aos='fade' data-aos-delay='100' data-aos-duration='300' className='text50 text-black hover:text-neutral-600 cursor-pointer'>Launch</div>
                            <div data-aos='fade' data-aos-delay='100' data-aos-duration='400' className='text50 text-black pt-4 hover:text-neutral-600 cursor-pointer'>Research</div>
                            <div data-aos='fade' data-aos-delay='100' data-aos-duration='500' className='text50 text-black pt-4 hover:text-neutral-600 cursor-pointer'>Team</div>
                            <div data-aos='fade' data-aos-delay='100' data-aos-duration='600' className='text50 text-black pt-4 hover:text-neutral-600 cursor-pointer'>Explore</div>
                        </div>
                        <div className='absolute bottom-8 pr-[5%] w-full items-center justify-center flex'>
                            <div data-aos='fade' data-aos-duration='600' className='text28 text-center'>Danphe Rocketry</div>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
}

export default Navbar