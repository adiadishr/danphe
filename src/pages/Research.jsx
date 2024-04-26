import Footer from '@/components/Global/Footer'
import Art from '@/components/Launch/Art'
import ResearchHero from '@/components/Research/ResearchHero'
import ResearchJoin from '@/components/Research/ResearchJoin'
import ResearchMain from '@/components/Research/ResearchMain'
import ResearchRocket from '@/components/Research/ResearchRocket'
import React from 'react'

const Research = () => {
    return (
        <div>
            <ResearchHero />
            <ResearchRocket />
            <ResearchMain />
            <Art />
            <Footer />
        </div>
    )
}

export default Research