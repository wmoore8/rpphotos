import React from 'react'
import {Typography} from "@mui/material";

interface RPFontProps {
    children: string
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit' | undefined
    wrap?:    boolean
    link?:    string | null
    margin?:  string
}

export default function RPFont ({
    children,
    variant = 'subtitle2',
    wrap = false,
    link = null,
    margin = '6px',
}: RPFontProps) {

    return (
        <Typography
            variant={variant}
            noWrap={wrap}
            sx={{
                fontFamily: 'roboto',
                color: '#d5ba70',
                ':before': {
                    // content: '',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: '0',
                    left: '0',
                    backgroundColor: '#FFF',
                    visibility: 'hidden',
                    transform: 'scaleX(0)',
                    transition: 'all 0.3s ease-in-out'
                },
                ':hover:before': {
                    visibility: 'visible',
                    transform: 'scaleX(1)'
                },
                '-webkit-text-stroke-width': '0.5px',
                '-webkit-text-stroke-color': 'black',
                margin: `${margin}`
            }}
        >
            {children}
        </Typography>
    )
}