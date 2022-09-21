import React from 'react'
import {Fade} from 'react-slideshow-image';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'react-slideshow-image/dist/styles.css'
import '../stylesheets/CarouselBackgroundImg.css'

interface CarouselBackgroundImgProps {
    imageArray: Array<string>
}

export default function CarouselBackgroundImg ({imageArray}: CarouselBackgroundImgProps) {

    const arrowStyles = {
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        color: '#d5ba70',
        cursor: 'pointer',
    }

    return (
        <Fade
            duration={5000}
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
            cssClass='fade-container'
            pauseOnHover={false}
        >
            {imageArray.map((image, index) => (
                <img className='image-container' alt='male model carousel' key={index} src={image}/>
            ))}
        </Fade>
    )
}