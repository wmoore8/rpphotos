import React from 'react';
import './stylesheets/App.css';
// import CarouselBackgroundImg from "./CarouselBackgroundImg";
import ImageGrid from "./ImageGrid";
import RPBar from "./WrapperComponents/RPBar";
import RPFont from "./WrapperComponents/RPFont";
import { Link } from 'react-router-dom'

function App() {

    return (
        <>

            <div className='app'>

                <RPBar/>

                {/*<div className='links-container'>*/}
                {/*    <Link to='/about' style={{textDecoration: 'none'}}>*/}
                {/*        <RPFont>À PROPOS</RPFont>*/}
                {/*    </Link>*/}

                {/*    <Link to='/spring' style={{textDecoration: 'none'}}>*/}
                {/*        <RPFont>PRINTEMPS</RPFont>*/}
                {/*    </Link>*/}

                {/*    <Link to='/summer' style={{textDecoration: 'none'}}>*/}
                {/*        <RPFont>ÉTÉ</RPFont>*/}
                {/*    </Link>*/}

                {/*    <Link to='/fall' style={{textDecoration: 'none'}}>*/}
                {/*        <RPFont>L'AUTOMNE</RPFont>*/}
                {/*    </Link>*/}

                {/*    <Link to='/winter' style={{textDecoration: 'none'}}>*/}
                {/*        <RPFont>L'HIVER</RPFont>*/}
                {/*    </Link>*/}

                {/*    <Link to='/adult' style={{textDecoration: 'none'}}>*/}
                {/*        <RPFont>PLUS de 18</RPFont>*/}
                {/*    </Link>*/}

                {/*    <Link to='/press' style={{textDecoration: 'none'}}>*/}
                {/*        <RPFont>MÉDIAS</RPFont>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                <ImageGrid/>

            </div>
        </>
    );
}

//TODO: Change links-container to dynamic grid

export default App;