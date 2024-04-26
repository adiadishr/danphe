import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { MdOutlineLocalPhone, MdOutlineMailOutline  } from "react-icons/md";


const ContactDialog = ({ classList, title }) => {
    return (
        <Drawer>
            <DrawerTrigger className={classList}>{title}</DrawerTrigger>
            <DrawerContent className='md:mx-[10%] h-5/6'>
                <DrawerHeader >
                    <DrawerTitle>Feel free to reach out!</DrawerTitle>
                    <DrawerDescription>Whether you're an aspiring aerospace engineer, a space enthusiast, or a supporter of scientific advancement, we invite you to join us on our journey to the stars.</DrawerDescription>
                </DrawerHeader>
                <div className='w-full flex flex-col h-full px-[1.5%] pt-8 gap-8'>
                    <div className='flex w-full border-2 h-1/2 border-sky-600 rounded-3xl items-center justify-start pl-8'>
                        <div className='text50 text-sky-600 pl-[5%] items-center justify-center flex'>
                            <MdOutlineLocalPhone />
                        </div>
                        <div className='text32 text-sky-600 pl-[5%] items-center justify-center flex'>
                            Contact us here: <br />
                            +977 9843011770
                        </div>
                    </div>
                    <div className='flex border-2 h-1/2 border-sky-600 rounded-3xl items-center justify-start pl-8'>
                        <div className='text50 text-sky-600 pl-[5%] items-center justify-center flex'>
                        <MdOutlineMailOutline />
                        </div>
                        <div className='text32 text-sky-600 pl-[5%] items-center justify-center flex'>
                            You can email us at: <br />
                            danpherocketry@gmail.com
                        </div>
                    </div>
                </div>
                <DrawerFooter className='mx-[10%]'>
                    <DrawerClose>
                        <Button className='w-full bg-sky-600 hover:bg-sky-500'>Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default ContactDialog