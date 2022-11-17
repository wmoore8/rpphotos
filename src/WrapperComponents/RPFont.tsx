import React from 'react'
import {Typography} from "@mui/material";

interface RPFontProps {
    children: string
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit' | undefined
    wrap?:    boolean
    link?:    string | null
    margin?:  string
    padding?: string
    color?:   string
}

export default function RPFont ({
    children,
    variant = 'h5',
    wrap = false,
    link = null,
    margin = '6px',
    padding = '0',
    color = 'secondary'
}: RPFontProps) {

    return (
        <Typography
            variant={variant}
            noWrap={wrap}
            borderColor='black'
            color={color}
            fontFamily='metropolis'
            padding={padding}
            textAlign='center'
        >
            {children}
        </Typography>
    )
}