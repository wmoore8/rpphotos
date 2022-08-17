import React from 'react';
import ImageGrid from "./ImageGrid";
import RPFont from "./WrapperComponents/RPFont";
import VideoCard from "./WrapperComponents/VideoCard";
import { Link } from 'react-router-dom'

import demoVid from './assets/videos/HomeStudioVideo.mov'
import logoWhite from './assets/logos/logoWhite.svg'

import './stylesheets/App.css';

function App() {

    return (
        <>
            <div className='app'>

                <img
                    alt='RJP Design Logo'
                    src={logoWhite}
                    style={{
                        height: '50%',
                        width: '50%'
                    }}
                />

                <VideoCard
                    displayVideo={demoVid}
                    height='60%'
                    width='80%'
                />

                <div className='mid-section'>

                    <div className='links-container'>

                        <Link to='/about' style={{textDecoration: 'none', whiteSpace: 'nowrap'}}>
                            <RPFont>À PROPOS</RPFont>
                        </Link>

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

                        <Link to='/adult' style={{textDecoration: 'none', whiteSpace: 'nowrap'}}>
                            <RPFont>PLUS de 18</RPFont>
                        </Link>

                        <Link to='/press' style={{textDecoration: 'none'}}>
                            <RPFont>MÉDIAS</RPFont>
                        </Link>
                    </div>
                </div>

                <div className='image-grid'>

                    <ImageGrid/>

                </div>

            </div>
        </>
    );
}

//TODO: Change links-container to dynamic grid

export default App;