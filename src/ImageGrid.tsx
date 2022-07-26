import React from 'react'

import Box from '@mui/material/Box';
import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem';

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

export default function ImageGrid () {

    const imageData = [
        CB22,
        CB50,
        CB30,
        CB26,
        CB42,
        CB2,
        CB27,
        CB48,
        CB17,
        CB24,
        CB8,
        CB10,
        CB14,
        CB11,
        CB23,
        CB43,
        CB1,
        CB47,
        CB29,
        CB7,
        CB12,
        CB9,
        CB32,
        CB18,
        CB25,
        CB16,
        CB49,
        CB46,
        wingedMan,
        CB40,
        CB13,
        CB44,
        CB15,
    ]

    return (
        <Box
            sx={{
                height: '70%',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                    xl: 'repeat(3, 1fr)'
                },
                [`& .${imageListItemClasses.root}`]: {
                    display: 'flex',
                    flexDirection: 'column'
                }
        }}
        >
            {imageData.map((item, i) => (
                <ImageListItem key={i}>
                    <img
                        src={item}
                        alt='Boudoir'
                        loading='lazy'
                    />
                </ImageListItem>
            ))}
        </Box>
    )

}

//TODO: put more info in image list, like model's name, etc., for POSSIBLE overlay on each photo? Clickable, takes you
// to their section of the website?