import React from 'react'
import { ListeModules } from './ListeModules'

export const Main = () => {
  return (
    <div>
        <div className='bg-[#4B7BEC] text-xl text-white font-bold px-4 py-2 mx-auto my-6 w-20 rounded-md' id='1cp'>
            1 cp
        </div>
        <ListeModules/>
        <div id="2cp" className='bg-[#4B7BEC] text-xl text-white font-bold px-4 py-2 mx-auto my-6 w-20 rounded-md'>
            2 cp
        </div>
        <ListeModules/>
        <div id="1cs" className='bg-[#FA8231] text-xl text-white font-bold px-4 py-2 mx-auto my-6 w-20 rounded-md'>
            1cs
        </div>
        <ListeModules/>
        <div id="2cs" className='bg-[#FA8231] text-xl text-white font-bold px-4 py-2 mx-auto my-6 w-20 rounded-md'>
            2 cs
        </div>
        <ListeModules/>
        <div id="3cs" className='bg-[#FA8231] text-xl text-white font-bold px-4 py-2 mx-auto my-6 w-20 rounded-md'>
            3 cs
        </div>
        <ListeModules/>
    </div>
  )
}
