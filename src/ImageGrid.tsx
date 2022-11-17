import React from 'react'
import Box from '@mui/material/Box'
import ImageListItem from '@mui/material/ImageListItem'
import {photoDataList, photoDataListProps} from './assets/photos-all'

import ShuffleArray from './HelperComponents/ShuffleArray'
import ImageCard from './WrapperComponents/ImageCard'

interface ImageGridProps {
    imageArray?: Array<photoDataListProps>
}

export default function ImageGrid ({
    imageArray = photoDataList
}: ImageGridProps) {

    ShuffleArray(photoDataList)

    return (
        <Box
            sx={{
                maxHeight: '100%',
                width: '100%',
                display: 'grid',
                gridGap: {
                    xs: '5px',
                    sm: '5px',
                    md: '50px',
                    lg: '50px',
                    xl: '50px',
                },
                gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(3, 1fr)',
                    xl: 'repeat(3, 1fr)'
                }
            }}
        >
            {imageArray.map((item, i) => (
                <ImageListItem key={i}>
                    <ImageCard
                        src={item.src}
                        alt='Male Photography'
                        imgModel={item.modelName}
                        imgSeason={item.season}
                    />
                </ImageListItem>
            ))}
        </Box>
    )

}