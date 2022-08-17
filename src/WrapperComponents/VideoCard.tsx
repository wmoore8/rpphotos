import React from 'react'
import { CardMedia, Box } from '@mui/material'

interface VideoCardProps {
    displayVideo: string | undefined
    height?:      string | number
    width?:       string | number
    isAutoplay?:  boolean
}

export default function VideoCard({
    displayVideo,
    height = '100%',
    width = '100%',
    isAutoplay = true
}: VideoCardProps) {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'
            }}
        >
            <CardMedia
                component='video'
                className='video-demo'
                image={displayVideo}
                autoPlay={isAutoplay}
                controls
                sx={{
                    height: height,
                    width: width
                }}
            />
        </Box>
    )
}
