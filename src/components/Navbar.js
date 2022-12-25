import React, { useState } from 'react'
import estinBibLogo from '../images/logo_estin_bib.svg'
import menuHam from '../images/menu_ham.svg'
export const Navbar = ({fun}) => {
  const [showNavLinks , setShowNavLinks] = useState(false)
  return (
    <div className='flex justify-between 
    p-4  bg-gradient-to-r from-[#89a5e7] to-[#3867D6]
     px-6 fixed top-0 w-[100%] z-30'>
        <img src={estinBibLogo} />
        <img src={menuHam} onClick={()=>{setShowNavLinks(true)}}/>
      {showNavLinks ?<ul className='flex flex-col space-y-4 fixed top-0 left-0 bg-blue-500 h-auto
    list-none z-30 w-[100%] py-6 text-white text-xl
    '>
        <li>
            <a href='#1cp'>1 cp</a>
        </li>        
        <li>
            <a href='#2cp'>2 cp</a>
        </li>        
        <li>
            <a href='#1cs'>1 cs</a>
        </li>       
        <li>
            <a href='#2cs'>2 cs</a>
        </li>
        <li>
            <a href='#3cs'>3 cs</a>
        </li>
        <li>
            <a href="#footer" className='bg-[#FA8231] w-40 px-5 py-3 text-white rounded-xl'>contribuer</a>
        </li>
    </ul>:''}
    </div>
  )
}
