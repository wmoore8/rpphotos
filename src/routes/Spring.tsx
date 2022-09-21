import React from 'react'
import ImageGrid from '../ImageGrid'

import {
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9
} from '../assets/photos-spring'

function Spring() {

    const imageData = [
        S1, S2, S3, S4, S5, S6, S7, S8, S9
    ]

    return (
        <>
            <ImageGrid imageArray={imageData} />
        </>
    )
}

export default Spring;