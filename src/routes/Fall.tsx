import React from 'react'
import ImageGrid from '../ImageGrid'

import {
    F1,
    F2,
    F3,
    F4,
    F5,
    F6
} from '../assets/photos-fall'

function Fall() {

    const imageData = [
        F1, F2, F3, F4, F5, F6
    ]

    return (
        <>
            <ImageGrid imageArray={imageData} />
        </>
    )
}

export default Fall;