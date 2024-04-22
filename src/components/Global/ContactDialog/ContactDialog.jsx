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

const ContactDialog = () => {
    return (
        <Drawer>
            <DrawerTrigger className='w-full text-center bg-sky-500 tracking-tighter text-white p-4 rounded-xl font-medium text-[16px]/[120%] hover:opacity-80'>Contact Us</DrawerTrigger>
            <DrawerContent className='md:mx-[10%] h-5/6'>
                <DrawerHeader >
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className='mx-[10%]'>
                    <DrawerClose>
                        <Button className='w-full bg-red-600 hover:bg-red-500'>Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default ContactDialog