import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionWhyUs = () => {
    return (
        <Accordion type="multiple" collapsible  className="w-full flex flex-col gap-8">
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-[28px]/[120%] tracking-tight text-black'>01. Expertise and Reach</AccordionTrigger>
                <AccordionContent className='py-8 text-[24px]/[120%] tracking-tight text-neutral-500 text-justify text-pretty'>
                    We bring together a team of skilled engineers, scientists, and enthusiasts passionate about aerospace. We combine local talent with international partnerships to drive innovation and excellence.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='text-[28px]/[120%] tracking-tight text-black'>02. Innovation at our Core</AccordionTrigger>
                <AccordionContent className='py-8 text-[24px]/[120%] tracking-tight text-neutral-500 text-justify text-pretty'>
                    We are at the forefront of developing state-of-the-art rocket engines using the latest technologies and materials. Our pursuit of innovation ensures that we stay ahead in the ever-evolving field of aerospace engineering.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='text-[28px]/[120%] tracking-tight text-black'>03. Sustainability</AccordionTrigger>
                <AccordionContent className='py-8 text-[24px]/[120%] tracking-tight text-neutral-500 text-justify text-pretty'>
                    Sustainability is at the heart of everything we do. We are dedicated to minimizing our environmental footprint and adopting eco-friendly practices in our manufacturing processes.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionWhyUs