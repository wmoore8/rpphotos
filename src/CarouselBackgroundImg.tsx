import React, {useEffect, useState} from 'react'

import desertImg from './assets/desert.jpg'
import mountainImg from './assets/mountain.jpg'
import rocksImg from './assets/rocks.jpg'
import lightsImg from './assets/lights.jpg'

export default function CarouselBackgroundImg () {

    const [backgroundImage, setBackgroundImage] = useState(desertImg)

    useEffect(() => {
        const backgroundImageList = [
            desertImg,
            mountainImg,
            rocksImg,
            lightsImg,
        ]

        let count = 0

        setInterval(() => {
            count === backgroundImageList.length - 1 ? count = 0 : count = count + 1
            setBackgroundImage(backgroundImageList[count])
        }, 5000)
    }, [])

    return (
        <img
            alt='rotating backdrop'
            src={backgroundImage}
            style = {{
                height: '100vh',
                width: '100vw',
                objectFit: 'cover'
            }}
        />
    )
}