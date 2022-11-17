import React from 'react'
import RPFont from './WrapperComponents/RPFont'

import {Link} from 'react-router-dom'
import {Box} from '@mui/material'

export default function Links() {

    return (
        <Box
            gap={3}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '120px'
            }}
        >

            <Link to='/spring' style={{textDecoration: 'none'}}>
                <RPFont>PRINTEMPS</RPFont>
            </Link>

            <Link to='/summer' style={{textDecoration: 'none'}}>
                <RPFont>ÉTÉ</RPFont>
            </Link>

            <Link to='/fall' style={{textDecoration: 'none'}}>
                <RPFont>L'AUTOMNE</RPFont>
            </Link>

            <Link to='/winter' style={{textDecoration: 'none'}}>
                <RPFont>L'HIVER</RPFont>
            </Link>

        </Box>
    )
}

//TODO: Change links-container to dynamic grid
// --> Conditionally show non-seasonal links on smaller screens
// --> Design way to include 3 commented out links

// Getting to the other 3 pages (about me, media, and +18) will take some more thought.
// Possible Ideas:
// To get to +18, clicking model's photo can take user there (although gallery page of all models is ideal)
// About me could be placed right below video or logo
// Media ...... not sure yet