import React from 'react'
import VideoCard from './WrapperComponents/VideoCard'
import Links from './Links'
import { Route, Routes } from 'react-router-dom'

import demoVid from './assets/videos/HomeStudioVideo.mov'
import logoWhite from './assets/logos/logoWhite.svg'

import './stylesheets/App.css';
import Spring from "./routes/Spring";
import Summer from "./routes/Summer";
import Fall from "./routes/Fall";
import Winter from "./routes/Winter";

function App() {

    return (
        <div className='app'>

            <img
                alt='RJP Design Logo'
                src={logoWhite}
                style={{
                    height: '25%',
                    width: '30%'
                }}
            />

            <VideoCard
                displayVideo={demoVid}
                height='60%'
                width='80%'
                isAutoplay={true}
            />

            <div className='mid-section'>

                <Links/>

            </div>

            <div className='image-grid'>

                <Routes>
                {/*    <Route path='/about' element={<About/>}/>*/}
                    <Route path='/spring' element={<Spring/>}/>
                    <Route path='/summer' element={<Summer/>}/>
                    <Route path='/fall' element={<Fall/>}/>
                    <Route path='/winter' element={<Winter/>}/>
                {/*    <Route path='/adult' element={<Over18/>}/>*/}
                </Routes>

            </div>

        </div>
    );
}


export default App;

// Next Big To Do's:
//  1. Fix whatever git-lfs is doing wrong (maybe https://github.com/meltingice/git-lfs-s3)
//  2. Links dynamically change photo grid, not new section of website
//  2a. Start with creating seasonal image grid layouts, each one separated by season component
//  2b.
//  3. Change image grid to be Cards with overlay information (clicking implemented once +18 page has been more filled out)