import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const routeTo = () => {
        setNav(!nav);
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <>
            <div className='fixed flex right-0 md:mr-[2%] mr-[10%] z-20 w-20 items-center justify-center'>
                <img src={logo} className='w-full h-full flex' alt="" />
            </div>
            <div className='fixed left-0 top-[16px] flex ml-[10%] md:ml-[2%] z-50 items-center justify-center'>
                <motion.button
                    onClick={toggleNav}
                    className='relative size-10 text24 rounded-2xl hover:bg-white/80 bg-white/40  transition-colors duration-300 text-black  backdrop-blur-3xl'
                    animate={nav ? "open" : "close"}
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
                                top: '50%',
                            },
                            close: {
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
                        variants={{
                            open: {
                                rotate: "-45deg",
                                top: '50%',
                            },
                            close: {
                                rotate: "0deg",
                            }
                        }}
                        className='absolute h-[1.5px] w-6 bg-black' />
                </motion.button>
            </div>
            {
                nav ? (
                    <div data-aos='fade' className='fixed w-full h-[100vh] inset-0 z-30 bg-white/80 px-[10%] md:px-[2%] backdrop-blur-md flex'>
                        <div className='flex flex-col gap-4 pt-20 divide-y w-full divide-neutral-600/50'>
                            <Link onClick={routeTo} to='/' data-aos='fade' data-aos-delay='100' data-aos-duration='300' className='text32 text-black hover:text-neutral-600 cursor-pointer'>Launch</Link>
                            <Link onClick={routeTo} to="/research" className='text32 text-black pt-4 hover:text-neutral-600 cursor-pointer' data-aos='fade' data-aos-delay='100' data-aos-duration='400'>
                                Research
                            </Link>
                            <Link onClick={routeTo} to='/team' data-aos='fade' data-aos-delay='100' data-aos-duration='500' className='text32 text-black pt-4 hover:text-neutral-600 cursor-pointer'>Team</Link>
                            <Link onClick={routeTo} to='explore' data-aos='fade' data-aos-delay='100' data-aos-duration='600' className='text32 text-black pt-4 hover:text-neutral-600 cursor-pointer'>Explore</Link>
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