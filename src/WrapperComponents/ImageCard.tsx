import React, {useRef, useState} from 'react'
import {
    CardMedia,
    Card,
    CardContent,
    Typography,
    Slide,
    Dialog,
    Box
} from '@mui/material'
import GridSkeleton from './GridSkeleton'
import CarouselBackgroundImg from './CarouselBackgroundImg'
import {photoDataList} from '../assets/photos-all'
import IsMobile from "../HelperComponents/IsMobile";

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
        height: `${IsMobile() ? '100%' : '36vh'}`,
        boxShadow: '1px 1px 7px 6px rgba(0,0,0,0.34)',
        borderRadius: '5px',
        cursor: 'pointer',
        background: 'black linear-gradient(#181A18, #333333)'
    },
    imgStyle = {
        height: '100%',
        width: '100%',
        borderRadius: '5px',
    }
}: ImageCardProps) {

    const [isImageLoading, setIsImageLoading] = useState(true)
    const [isImageHovered, setIsImageHovered] = useState(false)
    const [isImageOpen, setIsImageOpen] = useState(false)

    const cardRef = useRef(null)

    const handleOpen = () => {
        setIsImageOpen(true)
    }

    const handleClose = () => {
        setIsImageOpen(false)
    }

    const currentIndex = () => {
        const element = photoDataList.find(img => {
            return img.src === src
        })
        if (element !== undefined) return photoDataList.indexOf(element)
        else return 0
    }

    return (
        <>
            <Card
                sx={cardStyle}
                ref={cardRef}
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
                onClick={handleOpen}
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
            <Dialog
                open={!IsMobile() && isImageOpen}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent'
                    }
                }}
            >
                <Box sx={{outline: 0}}>
                    <CarouselBackgroundImg imageArray={photoDataList} index={currentIndex()}/>
                </Box>
            </Dialog>
        </>
    )
}