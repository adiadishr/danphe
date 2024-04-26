import React from "react";
import Art from '@/components/Launch/Art'
import Footer from '@/components/Global/Footer'
import ExploreMain from "@/components/Explore/ExploreMain";
import ExploreHero from "@/components/Explore/ExploreHero";

const Explore = () => {
    return (
        <div>
            <ExploreHero />
            <ExploreMain />
            <Art />
            <Footer />
        </div>
    )
}

export default Explore