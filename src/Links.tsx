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

            {/*<Link to='/about' style={{textDecoration: 'none', whiteSpace: 'nowrap'}}>*/}
            {/*    <RPFont>À PROPOS</RPFont>*/}
            {/*</Link>*/}

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

            {/*<Link to='/adult' style={{textDecoration: 'none', whiteSpace: 'nowrap'}}>*/}
            {/*    <RPFont>PLUS de 18</RPFont>*/}
            {/*</Link>*/}

            {/*<Link to='/press' style={{textDecoration: 'none'}}>*/}
            {/*    <RPFont>MÉDIAS</RPFont>*/}
            {/*</Link>*/}
        </Box>
    )
}

//TODO: Change links-container to dynamic grid
// --> Conditionally show non-seasonal links on smaller screens
// --> Design way to include 3 commented out links

// ^ to answer, possibly just leave the 4 links. When clicking new link, it changes the image grid below,
// but does not alter rest of page (like more of a 1-page design)

// Getting to the other 3 pages (about me, media, and +18) will take some more thought.
// Possible Ideas:
// To get to +18, clicking model's photo can take user there (although gallery page of all models is ideal)
// About me could be placed right below video or logo
// Media ...... not sure yet