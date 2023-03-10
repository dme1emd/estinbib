import './Navbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
export default function Navbar() {
   
   

var lastScrollTop = 0;
setTimeout(()=>{
   const nav=document.querySelector(".Navbar")
    const navMob = document.querySelector('.nav-mobile')
  window.addEventListener("scroll",function(){
    var scrollTop=window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        nav.style.top="-80px"
        setShow(false)
    } else{
        nav.style.top="0"
        nav.style.background="linear-gradient(to right,rgba(122, 152, 220, 0.565) 10% ,rgb(56, 103, 214,1)  )";
        
    }
    if(scrollTop===0){
        nav.style.top="0";
        nav.style.background="#ffffff00";
        
    }
    console.log(nav.style.backgroundColor)
    lastScrollTop=scrollTop;

   })},1000)



 
   
      const [show , setShow] = useState(false)
   

    return(
        <>
        <nav  className="Navbar">
                    <img className='logo' src='/logo.svg'/>  
                    <AiOutlineMenu className='menu' onClick={()=>setShow(!show)}/>
                    <div className='navbarRight'>
                        <span className='navSpan '><a href='#accueil'>Accueil</a></span>
                        <span className='navSpan '><a href='#1CP'>1CP</a></span>
                        <span className='navSpan '><a href='#2CP'>2CP</a></span>
                        <span className='navSpan '><a href='#1CS'>1CS</a></span>
                        <span className='navSpan '><a href='#2CS'>2CS</a></span>
                        <span className='navSpan '><a href='#3CS'>3CS</a></span>
                        <button className='contribuer'><a href=''>Contribuer</a></button>
                    </div> 
                    {
                        show?<div className='nav-mobile'>
                        <span><a href='#accueil'>Accueil</a></span>
                        <span><a href='#1CP'>1CP</a></span>
                        <span><a href='#2CP'>2CP</a></span>
                        <span><a href='#1CS'>1CS</a></span>
                        <span><a href='#2CS'>2CS</a></span>
                        <span><a href='#3CS'>3CS</a></span>
                        <button className='contribuer'><a href=''>Contribuer</a></button>
                    </div> :""}
                </nav>
        </>
    )


}