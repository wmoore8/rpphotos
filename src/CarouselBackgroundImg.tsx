import React, {useEffect, useState} from 'react'

import {CB1, CB2, CB3, CB4, CB5, CB6, CB7, CB8, CB9, CB10, CB11, CB12, CB13, CB14, CB15, CB16, CB17, CB18, CB19, CB20,
    CB21, CB22, CB23, CB24, CB25, CB26, CB27, CB28, CB29, CB30, CB31, CB32, CB33, CB34, CB35, CB36, CB37, CB38, CB39,
    CB40, CB41, CB42, CB43, CB44, CB45, CB46, CB47, CB48, CB49, CB50, wingedMan} from './assets/index'

export default function CarouselBackgroundImg () {

    const [backgroundImage, setBackgroundImage] = useState(wingedMan)

    useEffect(() => {
        const backgroundImageList = [
            CB1, CB2, CB3, CB4, CB5, CB6, CB7, CB8, CB9, CB10, CB11, CB12, CB13, CB14, CB15, CB16, CB17, CB18, CB19,
            CB20, CB21, CB22, CB23, CB24, CB25, CB26, CB27, CB28, CB29, CB30, CB31, CB32, CB33, CB34, CB35, CB36, CB37,
            CB38, CB39, CB40, CB41, CB42, CB43, CB44, CB45, CB46, CB47, CB48, CB49, CB50, wingedMan
        ]

        let count = 0

        setInterval(() => {
            count === backgroundImageList.length - 1 ? count = 0 : count = count + 1
            setBackgroundImage(backgroundImageList[count])
        }, 2000)
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