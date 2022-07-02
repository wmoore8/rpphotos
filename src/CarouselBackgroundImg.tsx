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
        CB22,
        CB50,
        CB30,
        CB26,
        CB42,
        CB2,        //TODO: slight edit
        CB27,
        CB48,
        CB17,       //TODO: edit
        CB24,
        CB8,        //TODO: edit
        CB10,
        CB14,
        CB11,
        CB23,
        CB43,
        CB1,        //TODO: slight edit
        CB47,
        CB29,
        CB7,
        CB12,
        CB9,
        CB32,       //TODO: slightly edit top out
        CB18,
        CB25,
        CB16,
        CB49,
        CB46,
        wingedMan,
        CB40,       //TODO: edit top of photo out
        CB13,
        CB44,
        CB15,
    ]

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
            {backgroundImageList.map((image, index) => (
                <img className='image-container' alt='male model carousel' key={index} src={image}/>
            ))}
        </Fade>
    )
}

//TODO: Scale and edit photos to screen size