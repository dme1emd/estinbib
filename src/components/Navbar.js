import React, { useState } from 'react'
import estinBibLogo from '../images/logo_estin_bib.svg'
import menuHam from '../images/menu_ham.svg'
export const Navbar = () => {
  return (
    <div className='flex justify-between p-4  bg-gradient-to-r from-[#89a5e7] to-[#3867D6] px-6'>
        <img src={estinBibLogo}/>
        <img src={menuHam}/>
    </div>
  )
}
