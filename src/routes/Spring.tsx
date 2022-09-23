import React from 'react'
import ImageGrid from '../ImageGrid'
import ShuffleArray from '../HelperComponents/ShuffleArray'
import {photoDataList} from '../assets/photos-all'

function Spring() {

    const imageData = photoDataList.filter(photoObject => photoObject.season === 'Spring')

    ShuffleArray(imageData)

    return (
        <>
            <ImageGrid imageArray={imageData} />
        </>
    )
}

export default Spring;