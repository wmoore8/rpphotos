import React, {useRef, useState} from 'react'
import {CardMedia, Card, CardContent, Typography, Slide} from '@mui/material'
import GridSkeleton from './GridSkeleton'

interface ImageCardProps {
    src:        string
    alt:        string
    imgModel:   string
    imgSeason:  string
    cardStyle?: React.CSSProperties
    imgStyle?:  React.CSSProperties
}

export default function ImageCard({
    src,
    alt,
    imgModel,
    imgSeason,
    cardStyle = {
        height: '36vh',
        boxShadow: '1px 1px 7px 6px rgba(0,0,0,0.34)',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    imgStyle = {
        height: '100%',
        width: '100%',
        borderRadius: '5px',
    }
}: ImageCardProps) {

    const [isImageLoading, setIsImageLoading] = useState(true)
    const [isImageHovered, setIsImageHovered] = useState(false)

    const cardRef = useRef(null)

    return (
        <Card
            sx={cardStyle}
            ref={cardRef}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
        >
            <CardMedia
                component='img'
                src={src}
                alt={alt}
                style={imgStyle}
                onLoad={() => setIsImageLoading(false)}
            />
            <Slide direction='up' in={isImageHovered} container={cardRef.current}>
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        position: 'relative',
                        bottom: 100,
                        bgcolor: 'rgba(0, 0, 0, 0.55)',
                        height: '12%',
                    }}
                >
                    <Typography gutterBottom borderColor='black' variant='h5' fontFamily='roboto' color='lightgrey'>
                        {imgModel}
                    </Typography>
                    <Typography borderColor='black' variant='body1' fontFamily='roboto' color='lightslategrey'>
                        {imgSeason}
                    </Typography>
                </CardContent>
            </Slide>
            {isImageLoading && <GridSkeleton rowHeight={300} animation='wave' verticalOffset={-300} />}
        </Card>
    )
}