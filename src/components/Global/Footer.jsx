import React from 'react'

const Footer = () => {
    return (
        <div className='min-h-[70vh] h-max flex px-[10%] items-start justify-between relative flex-col'>
            <div className='w-full mt-24 md:mt-20 flex justify-between flex-col md:flex-row gap-16 md:gap-0'>
                <div className='flex md:gap-32 justify-between md:justify-start'>
                    <div className='flex flex-col gap-4'>
                        <div className=' text-neutral-400 font-light tracking-tight text-[36px]/[95%]'>General Links</div>
                        <a href='' className='tracking-tight text-[36px]/[95%] hover:opacity-80 transition-all'>Launch</a>
                        <a href='' className='tracking-tight text-[36px]/[95%] hover:opacity-80 transition-all'>Research</a>
                        <a href='' className='tracking-tight text-[36px]/[95%] hover:opacity-80 transition-all'>Our Team</a>
                        <a href='' className='tracking-tight text-[36px]/[95%] hover:opacity-80 transition-all'>Explore</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className=' text-neutral-400 font-light tracking-tight text-[36px]/[95%]'>Socials</div>
                        <a href=''  className='tracking-tight text-[36px]/[95%] hover:opacity-80 transition-all'>Instagram</a>
                        <a  href='' className='tracking-tight text-[36px]/[95%] hover:opacity-80 transition-all'>Facebook</a>
                        <a href=''  className='tracking-tight text-[36px]/[95%] hover:opacity-80 transition-all'>Linked In</a>
                    </div>
                </div>
                <div className='flex flex-col md:w-[27.5%] items-start gap-6'>
                    <div className='tracking-tighter text-neutral-800 font-medium text-[16px]/[120%]'>Have questions?</div>
                    <button className='w-full text-center bg-sky-500 tracking-tighter text-white p-4 rounded-xl font-medium text-[16px]/[120%] hover:opacity-80'>Contact Us</button>
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
                <div className='tracking-tight text-neutral-800 font-regular text-[16px]/[120%]'>Designed and Maintained by Antarikshya</div>
            </div>
        </div>
    )
}

export default Footer