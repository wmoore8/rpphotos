import React from 'react'
import RPFont from './WrapperComponents/RPFont'
import {Stack} from '@mui/material'

export default function Media() {

    return (
        <Stack
            justifyContent='center'
            alignItems='center'
        >

            <RPFont variant='h4' padding='20px 0'> Médias </RPFont>

            <RPFont> The Baton Show Lounge - 9/21 </RPFont>

            <a
                href='https://www.eventbrite.com/e/burlesque-royale-september-tickets-710022555577?aff=oddtdtcreator'
                style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '20px',
                    fontFamily: 'metropolis',
                    padding: '10px 0'
            }}
            >
                Tickets Here
            </a>

            <RPFont> ANNIVERSARY CELEBRATION SHOW - 11/16 </RPFont>

            <a
                href='https://www.eventbrite.com/e/1-year-anniversary-celebration-tickets-710032806237?aff=oddtdtcreator'
                style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '20px',
                    fontFamily: 'metropolis',
                    padding: '10px 0'
                }}
            >
                Tickets Here
            </a>
        </Stack>
    )
}