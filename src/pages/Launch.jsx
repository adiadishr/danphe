import Footer from '@/components/Global/Footer'
import Navbar from '@/components/Global/Navbar'
import Art from '@/components/Launch/Art'
import Card from '@/components/Launch/Card'
import Envision from '@/components/Launch/Envision'
import Hero from '@/components/Launch/Hero'
import Project from '@/components/Launch/Project'
import Stats from '@/components/Launch/Stats'
import WhyUs from '@/components/Launch/WhyUs'
import ResearchJoin from '@/components/Research/ResearchJoin'
import React from 'react'

const Launch = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Envision />
            <Stats />
            <WhyUs />
            <Project />
            <Card />
            <Art />
            <Footer />
        </>
    )
}

export default Launch