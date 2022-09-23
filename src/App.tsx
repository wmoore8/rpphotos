import React from 'react'
import VideoCard from './WrapperComponents/VideoCard'
import Links from './Links'
import { Route, Routes, Link } from 'react-router-dom'

import logoWhite from './assets/logos/logoWhite.svg'

import './stylesheets/App.css';
import Spring from "./routes/Spring";
import Summer from "./routes/Summer";
import Fall from "./routes/Fall";
import Winter from "./routes/Winter";
import ImageGrid from "./ImageGrid";

function App() {

    return (
        <div className='app'>

            <Link to='/' style={{ height: '25%', width: '30%' }}>
                <img
                    alt='RJP Design Logo'
                    src={logoWhite}
                />
            </Link>

            <VideoCard
                displayVideo='https://d2ycwn7fuwzhjv.cloudfront.net/HomeStudioVideo.mov'
                height='60%'
                width='80%'
                isAutoplay={false}
            />

            <div className='mid-section'>

                <Links/>

            </div>

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
    );
}

export default App;

// Next Big To Do's:
//  1. Fix whatever git-lfs is doing wrong
//  3. Change image grid to be Cards with overlay information (clicking implemented once +18 page has been more filled out)
