import React from 'react'
import ImageGrid from '../ImageGrid'

import {
    W1,
    W2,
    W3,
    W4,
    W5,
    W6,
    W7,
    W8,
    W9,
    W10
} from '../assets/photos-winter'

function Winter() {

    const imageData = [
        W1, W2, W3, W4, W5, W6, W7, W8, W9, W10
    ]

    return (
        <>
            <ImageGrid imageArray={imageData} />
        </>
    )
}

export default Winter;