import React from 'react'
import ContactDialog from './ContactDialog/ContactDialog'
import { Link } from 'react-router-dom'


const Footer = () => {

    const footerRouteTo = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div data-aos='fade-up' data-aos-duration='900' data-aos-delay='300' data-aos-once='true' className='min-h-[70vh] h-max flex px-[10%] items-start justify-between relative flex-col'>
            <div className='w-full mt-24 md:mt-20 flex justify-between flex-col md:flex-row gap-16 md:gap-0'>
                <div className='flex md:gap-32 gap-[20%] md:justify-start'>
                    <div className='flex flex-col gap-4'>
                        <div className=' text-neutral-400 font-light tracking-tight md:text-[36px]/[95%] text-[28px]/[95%]'>General Links</div>
                        <Link onClick={footerRouteTo} to='/' className='tracking-tight md:text-[36px]/[95%] text-[28px]/[95%] hover:opacity-80 transition-all'>Launch</Link>
                        <Link onClick={footerRouteTo} to='/research' className='tracking-tight md:text-[36px]/[95%] text-[28px]/[95%] hover:opacity-80 transition-all'>Research</Link>
                        <Link onClick={footerRouteTo} to='/team' className='tracking-tight md:text-[36px]/[95%] text-[28px]/[95%] hover:opacity-80 transition-all'>Our Team</Link>
                        <Link onClick={footerRouteTo} to='/explore' className='tracking-tight md:text-[36px]/[95%] text-[28px]/[95%] hover:opacity-80 transition-all'>Explore</Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className=' text-neutral-400 font-light tracking-tight md:text-[36px]/[95%] text-[28px]/[95%]'>Socials</div>
                        <a href='' className='tracking-tight md:text-[36px]/[95%] text-[28px]/[95%] hover:opacity-80 transition-all'>Instagram</a>
                        <a href='' className='tracking-tight md:text-[36px]/[95%] text-[28px]/[95%] hover:opacity-80 transition-all'>Facebook</a>
                        <a href='' className='tracking-tight md:text-[36px]/[95%] text-[28px]/[95%] hover:opacity-80 transition-all'>Linked In</a>
                    </div>
                </div>
                <div className='flex flex-col md:w-[27.5%] items-start gap-6'>
                    <div className='tracking-tighter text-neutral-800 font-medium text-[16px]/[120%]'>Have questions?</div>
                    <ContactDialog title='Contact Us' classList='w-full text-center bg-sky-500 tracking-tighter text-white p-4 rounded-xl font-medium text-[16px]/[120%] hover:opacity-80' />
                    <div className='flex flex-col gap-2'>
                        <div className='tracking-tighter text-neutral-800 font-medium text-[16px]/[120%]'>Stay Updated</div>
                        <div className='tracking-tighter text-neutral-400 font-medium text-[16px]/[120%]'>Drop your email to know what's coming</div>
                    </div>
                    <form action="" className='relative flex w-full items-center'>
                        <input type='email' className='w-full text-start bg-neutral-100 border-neutral-300 border tracking-tighter text-black outline-none focus:ring ring-sky-200 p-4 rounded-xl font-medium text-[16px]/[120%]' />
                        <input type="submit" value='>' className='absolute right-0 flex pr-4 text-neutral-600 text-lg hover:text-2xl transition-all duration-300 cursor-pointer' />
                    </form>
                </div>
            </div>
            <div className='flex flex-col pb-10 pt-16 md:pt-0'>
                <div className='tracking-tight text-neutral-400 font-light text-[16px]/[120%]'>@2024 Danphe Rocketry</div>
                <div className='tracking-tight text-neutral-800 font-regular text-[16px]/[120%]'>Designed and Maintained by <a className='underline' href="https://project0rbit.com">Antarikshya</a></div>
            </div>
        </div>
    )
}

export default Footer