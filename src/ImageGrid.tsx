import React from 'react'
import Box from '@mui/material/Box';
import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem';

interface ImageGridProps {
    imageArray: Array<string>
}

export default function ImageGrid ({imageArray}: ImageGridProps) {

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