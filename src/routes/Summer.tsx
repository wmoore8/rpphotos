import React from 'react'
import ImageGrid from '../ImageGrid'

import {
    Su1,
    Su2,
    Su3,
    Su4,
    Su5,
    Su6,
    Su7,
    Su8
} from '../assets/photos-summer'

function Summer() {

    const imageData = [
        Su1, Su2, Su3, Su4, Su5, Su6, Su7, Su8
    ]

    return (
        <>
            <ImageGrid imageArray={imageData} />
        </>
    )
}

export default Summer;