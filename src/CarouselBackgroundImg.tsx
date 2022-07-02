import React from 'react'
import {Fade} from 'react-slideshow-image';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'react-slideshow-image/dist/styles.css'
import './stylesheets/CarouselBackgroundImg.css'

import {
    CB1,
    CB10,
    CB11,
    CB12,
    CB13,
    CB14,
    CB15,
    CB16,
    CB17,
    CB18,
    CB2,
    CB22,
    CB23,
    CB24,
    CB25,
    CB26,
    CB27,
    CB29,
    CB30,
    CB32,
    CB40,
    CB42,
    CB43,
    CB44,
    CB46,
    CB47,
    CB48,
    CB49,
    CB50,
    CB7,
    CB8,
    CB9,
    wingedMan
} from './assets/index'

export default function CarouselBackgroundImg () {

    const backgroundImageList = [
        CB1, CB2, CB7, CB8, CB9, CB10, CB11, CB12, CB13, CB14, CB15, CB16, CB17, CB18,
        CB22, CB23, CB24, CB25, CB26, CB27, CB29, CB30, CB32,
        CB40, CB42, CB43, CB44, CB46, CB47, CB48, CB49, CB50, wingedMan
    ]

    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }

    const arrowStyles = {
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px',
        color: 'white',
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
            {backgroundImageList.map((image, index) => (
                <img className='image-container' alt='male model carousel' key={index} src={image}/>
            ))}
        </Fade>
    )
}

//TODO: Make random photo order
//TODO: Scale and edit photos to screen size