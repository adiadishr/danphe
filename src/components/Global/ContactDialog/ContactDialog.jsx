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

const ContactDialog = ({classList, title}) => {
    return (
        <Drawer>
            <DrawerTrigger className={classList}>{title}</DrawerTrigger>
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