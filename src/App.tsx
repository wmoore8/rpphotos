import React, {useEffect, useState} from 'react';
import './App.css';

import desertImg from './assets/desert.jpg'
import mountainImg from './assets/mountain.jpg'
import rocksImg from './assets/rocks.jpg'
import lightsImg from './assets/lights.jpg'

function App() {

    const backgroundImageList = [
        desertImg,
        mountainImg,
        rocksImg,
        lightsImg,
    ]

    const [backgroundImage, setBackgroundImage] = useState(backgroundImageList[0])

    useEffect(() => {
        setInterval(() => setBackgroundImage(backgroundImageList[1]), 5000)
    }, [])

    return (
        <div className="App">
            <img
              alt='carousel background'
              src={backgroundImage}
              style={{
                height: '100vh',
                width: '100vw'
              }}
          />

        </div>
    );
}

export default App;
