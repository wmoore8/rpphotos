import React from 'react'
import Box from '@mui/material/Box';
import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem';

import {
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9
} from './assets/photos-spring'

import {
    Su1,
    Su2,
    Su3,
    Su4,
    Su5,
    Su6,
    Su7,
    Su8
} from './assets/photos-summer'

import {
    F1,
    F2,
    F3,
    F4,
    F5,
    F6
} from './assets/photos-fall'

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
} from './assets/photos-winter'

interface ImageGridProps {
    imageArray?: Array<string>
}

const gallery = [
    S1, S2, S3, S4, S5, S6, S7, S8, S9,
    Su1, Su2, Su3, Su4, Su5, Su6, Su7, Su8,
    F1, F2, F3, F4, F5, F6,
    W1, W2, W3, W4, W5, W6, W7, W8, W9, W10
]

function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function ImageGrid ({
    imageArray = gallery
}: ImageGridProps) {

    shuffleArray(gallery)

    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                display: 'grid',
                gridGap: '50px',
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(2, 1fr)',
                    xl: 'repeat(3, 1fr)'
                },
                [`& .${imageListItemClasses.root}`]: {
                    display: 'flex',
                    flexDirection: 'column'
                }
        }}
        >
            {imageArray.map((item, i) => (
                <ImageListItem key={i}>
                    {/*TODO: Separate Card component that has info for each photo (see below for info to include)*/}
                    <img
                        src={item}
                        alt='Boudoir'
                        loading='lazy'
                        style={{
                            boxShadow: '1px 1px 7px 6px rgba(0,0,0,0.34)',
                            borderRadius: '5px'
                        }}
                    />
                </ImageListItem>
            ))}
        </Box>
    )

}

//TODO: will each need to be object with cards data (season, model name)