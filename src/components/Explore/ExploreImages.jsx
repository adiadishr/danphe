import React, { useState } from 'react'


const ExploreImages = () => {

    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(true)}>ExploreImages</div>
    )
}

export default ExploreImages