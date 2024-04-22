import React from 'react'
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <div className='fixed top-[26px] flex ml-[2%] z-50 w-20 items-center justify-center'>
                <img src={logo} className='w-full h-full' alt="" />
            </div>
            <div className='flex w-full fixed top-[32px] justify-between h-max z-50 items-center'>
                <div className=' text-center flex py-2 px-4 bg-white/[0.05] backdrop-blur-xl rounded-lg gap-8 uppercase items-center justify-center'>
                    <a className='navLink activeNavLink' href="">Launch</a>
                    <a className='navLink' href="">Research</a>
                    <a className='navLink' href="">Team</a>
                    <a className='navLink' href="">Explore</a>
                </div>

                <button className='flex py-2 px-4 bg-sky-600 text-center tracking-tighter text-white rounded-xl text-[16px]/[120%] hover:opacity-80'>Reach Us</button>

            </div>
        </>
    )
}

export default Navbar