import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, IconButton } from '@mui/material'

import HomeIcon from '@mui/icons-material/Home';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MenuIcon from '@mui/icons-material/Menu'

interface HeaderProps {
    height?:    string
    children?:  ReactNode
    position?:  string
}

export default function RPBar ({
    height = 'auto',
    position = 'fixed',
    children
}: HeaderProps) {

    const handleMailClick = () => {
        window.location.href = 'mailto:ramsey@maisonduprincedesign.com'
    }

    return (
        <AppBar
            sx={{
                display: 'flex',
                position: position,
                flexDirection: 'row',
                alignItems: 'center',
                paddingX: '8px',
                height: height,
                backgroundImage: 'linear-gradient(#181A18, #333333)'
            }}
        >
            <IconButton
                sx={{
                    marginLeft: '6px',
                    marginTop: '3px'
                }}
            >
                <Link to='/'>
                    <HomeIcon
                        color='secondary'
                    />
                </Link>
            </IconButton>

            <IconButton
                sx={{
                    marginTop: '5px'
                }}
            >
                <Link to='/'>
                    <MenuIcon
                        color='secondary'
                    />
                </Link>
            </IconButton>

            <IconButton
                onClick={handleMailClick}
                sx={{
                    marginRight: '12px',
                    marginLeft: 'auto'
                }}
            >
                <EmailRoundedIcon
                    color='secondary'
                />
            </IconButton>

            { children }

        </AppBar>
    )
}