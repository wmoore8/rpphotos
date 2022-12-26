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

            <RPFont> The Baton Show Lounge - 1/19 </RPFont>

            <a
                href='https://www.eventbrite.com/e/burlesque-royale-2023-tickets-485087819727?aff=ebdsoporgprofile'
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