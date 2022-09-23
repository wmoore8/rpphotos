import React from 'react'
import ImageGrid from '../ImageGrid'
import ShuffleArray from '../HelperComponents/ShuffleArray'
import {photoDataList} from '../assets/photos-all'

function Fall() {

    const imageData = photoDataList.filter(photoObject => photoObject.season === 'Fall')

    ShuffleArray(imageData)

    return (
        <>
            <ImageGrid imageArray={imageData} />
        </>
    )
}

export default Fall;