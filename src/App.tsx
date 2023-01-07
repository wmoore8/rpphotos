import React from 'react'
import VideoCard from './WrapperComponents/VideoCard'
import Links from './Links'
import Media from './Media'
import { Route, Routes, Link } from 'react-router-dom'
import {Stack, Box, IconButton} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import logoWhite from './assets/logos/logoWhite.svg'

import './stylesheets/App.css';
import Spring from './routes/Spring'
import Summer from './routes/Summer'
import Fall from './routes/Fall'
import Winter from './routes/Winter'
import ImageGrid from './ImageGrid'


function App() {

    return (
        <Stack
            className='app'
        >
            <Box
                className='top-section'
            >
                <Stack
                    flexDirection='row'
                    justifyContent='center'
                    alignItems='center'
                    width='100%'
                    gap={3}
                >
                    <Link to='/' style={{ height: '25%', width: '30%' }} color='secondary'>
                        <img
                            alt='RJP Design Logo'
                            src={logoWhite}
                        />
                    </Link>

                    <Stack
                        justifyContent='center'
                        alignItems='center'
                        gap={2}
                    >
                        <a href='https://www.instagram.com/rjpdesigns/' target='_blank' rel='noreferrer'>
                            <IconButton>
                                <InstagramIcon
                                    sx={{color: 'white'}}
                                    fontSize='large'
                                />
                            </IconButton>
                        </a>
                        <a href='mailto:rjpdesigns99@gmail.com'>
                            <IconButton>
                                <MailOutlineIcon
                                    sx={{color: 'white'}}
                                    fontSize='large'
                                />
                            </IconButton>
                        </a>
                    </Stack>

                </Stack>

                <VideoCard
                    displayVideo='https://d2ycwn7fuwzhjv.cloudfront.net/HomeStudioVideo.mov'
                    height='60%'
                    width='80%'
                    isAutoplay={true}
                />
            </Box>

            <div className='media-section'>

                <Media />

            </div>

            <div className='mid-section'>

                <Links/>

            </div>

            <div className='bottom-section'>

                <div className='image-grid'>

                    <Routes>
                        <Route path='/' element={<ImageGrid />}/>
                        <Route path='/spring' element={<Spring/>}/>
                        <Route path='/summer' element={<Summer/>}/>
                        <Route path='/fall' element={<Fall/>}/>
                        <Route path='/winter' element={<Winter/>}/>
                    </Routes>

                </div>

            </div>

        </Stack>
    );
}

export default App;

//TODO: Clicking photo brings full scale photo over-layed above, detail bar underneath with direct link to model(s) page
