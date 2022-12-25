import React , {Suspense}from 'react';
import './App.css';
import { Home } from './components/Home';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
const Footer = React.lazy(()=>import('./components/Footer'));
function App() {
  return (
    <div className="App text-center">
       <Navbar/>
       <Home/>
       <Main/>
       <Suspense fallback={<div>loading hhh</div>}>
        <Footer/>
       </Suspense>
    </div>
  );
}

export default App;
