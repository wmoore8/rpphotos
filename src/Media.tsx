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

            <RPFont> The Baton Show Lounge Inaugural Show - 11/17 </RPFont>

            <a
                href='https://www.eventbrite.com/e/burlesque-royale-tickets-459099678497'
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