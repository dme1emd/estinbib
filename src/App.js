import React from 'react';
import { useState } from 'react';
import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import { Main } from './components/Main';




function App() {

 return(

    <div className='App'>
        <div className='blur1'></div>
        <div className='blur2'></div>
        <img src='/left1.svg' className='left1'/>
        <img src='/left2.svg' className='left2'/>
        <img src='/right.svg' className='right'/>
        <Navbar />
        <Intro />
        <Main/>
        <Footer />
        
        
    </div>
  )
}

export default App; 