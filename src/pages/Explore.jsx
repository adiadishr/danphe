import React from "react";
import Art from '@/components/Launch/Art'
import Footer from '@/components/Global/Footer'
import ExploreCard from "@/components/Explore/ExploreCard";
import ExploreMain from "@/components/Explore/ExploreMain";

const Explore = () => {
    return (
        <div>
            <ExploreMain />
            <Art />
            <Footer />
        </div>
    )
}

export default Explore