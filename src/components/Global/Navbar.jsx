import React from 'react'
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <div className='bg-transparent w-full flex'>
                <div className='flex ml-[2%] z-50 w-20 items-center justify-center'>
                    <img src={logo} className='w-full h-full flex' alt="" />
                </div>
                <div className='flex w-full justify-end h-full z-50 items-center pr-[2%] h-[inherit]'>
                    <div className='mr-4 text-center flex py-2 px-4 bg-none rounded-lg gap-8 uppercase items-center justify-center'>
                        <a className='navLink activeNavLink' href="">Launch</a>
                        <a className='navLink' href="">Research</a>
                        <a className='navLink' href="">Team</a>
                        <a className='navLink' href="">Explore</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar