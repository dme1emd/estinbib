import React , {Suspense, useState}from 'react';
import './App.css';
import { Home } from './components/Home';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
const Footer = React.lazy(()=>import('./components/Footer'));
function App() {
  return (
    <div className="App text-center">
       <Navbar/>
       <Home id="home"/>
       <Main/>
       <Suspense id="footer" fallback={<div >loading</div>}>
        <Footer/>
       </Suspense>
    </div>
  );
}

export default App;
