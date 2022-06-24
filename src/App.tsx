import React from 'react';
import './stylesheets/App.css';
import CarouselBackgroundImg from "./CarouselBackgroundImg";

function App() {

    return (
        <div className='app'>
            <CarouselBackgroundImg/>

            <div className='links-container'>
                <span className='links'>RAMSEY PRINCE</span>
                <span className='links'>About</span>
                <span className='links'>Over 18</span>
            </div>

        </div>
    );
}

export default App;