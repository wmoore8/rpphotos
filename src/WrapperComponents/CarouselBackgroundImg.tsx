import React from 'react'
import {Fade} from 'react-slideshow-image';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'react-slideshow-image/dist/styles.css'
import '../stylesheets/CarouselBackgroundImg.css'

interface CarouselBackgroundImgProps {
    imageArray: Array<any>
    index?:     number
}

export default function CarouselBackgroundImg ({imageArray, index = 0}: CarouselBackgroundImgProps) {

    const arrowStyles = {
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        color: 'whitesmoke',
        cursor: 'pointer',
    }

    return (
        <Fade
            autoplay={false}
            defaultIndex={index}
            transitionDuration={400}
            prevArrow={
                <ArrowBackIosIcon
                    fontSize='large'
                    sx={{left: '2%', ...arrowStyles}}
                />
            }
            nextArrow={
                <ArrowForwardIosIcon
                    fontSize='large'
                    sx={{left: '98%', ...arrowStyles}}
                />
            }
        >
            {imageArray.map((image, index) => (
                <img
                    className='image-container'
                    alt='male model'
                    key={index}
                    src={image.src}
                />
            ))}
        </Fade>
    )
}