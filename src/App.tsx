import React from 'react';
import './stylesheets/App.css';
import CarouselBackgroundImg from "./CarouselBackgroundImg";
import RPFont from "./WrapperComponents/RPFont";

function App() {

    return (
        <>
            <CarouselBackgroundImg/>
            <div className='app'>

                <div className='links-container'>
                    <RPFont>À PROPOS</RPFont>
                    <RPFont>PRINTEMPS</RPFont>
                    <RPFont>ÉTÉ</RPFont>
                    <RPFont>L'AUTOMNE</RPFont>
                    <RPFont>L'HIVER</RPFont>
                    <RPFont>PLUS de 18</RPFont>
                    <RPFont>MÉDIAS</RPFont>
                </div>

            </div>
        </>
    );
}

export default App;