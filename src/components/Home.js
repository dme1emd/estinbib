import React from 'react'
import bibliotheque from '../images/biblio.svg'
export const Home = () => {
  return (
    <div className={
        `flex flex-col
        items-center
         h-80 space-y-4 py-16 px-10
         text-white
         relative
         overflow-hidden mt-16
         `}
         id="mobile-home">
        <h1 className='text-2xl'>lorem ipsum</h1>
        <p className='text-base'>
        “ The greatest glory in living lies not in never
        falling, but in rising every time we fall”
        </p>
        <img src={bibliotheque} className={`absolute
        -bottom-11 w-5/9
        `}/>
    </div>
  )
}
