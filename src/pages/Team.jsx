import Footer from '@/components/Global/Footer'
import TeamMembers from '@/components/Team/TeamMembers'
import TeamHero from '@/components/Team/TeamHero'
import React from 'react'
import Navbar from '@/components/Global/Navbar'

const Team = () => {
    return (
        <div>
            <Navbar />
            <TeamHero />
            <TeamMembers />
            <Footer />
        </div>
    )
}

export default Team