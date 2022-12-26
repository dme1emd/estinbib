import React from 'react'
import { ListeModules } from './ListeModules'

export const Main = () => {
  return (
    <div className='main-sec'>
        <div className='cp'>
            <div className='btn' id='1cp'>
                1 cp
            </div>
            <div className='year'>
                <ListeModules/>
                <ListeModules className="sm-sc-none"/>
            </div>
            <div id="2cp" className='btn'>
                2 cp
            </div>
            <div className='year'>
                <ListeModules/>
                <ListeModules className="sm-sc-none"/>
            </div>
        </div>

        <div className='cs'>
        <div id="1cs" className='btn orange'>
            1cs
        </div>
        <div className='year'>
            <ListeModules/>
            <ListeModules className="sm-sc-none"/>
        </div>
        <div id="2cs" className='btn orange'>
            2 cs
        </div>
        <div className='year'>
            <ListeModules/>
            <ListeModules className="sm-sc-none"/>
        </div>

        <div id="3cs" className='btn orange'>
            3 cs
        </div>
        <div className='year'>
            <ListeModules/>
            <ListeModules className="sm-sc-none"/>
        </div>
        </div>
    </div>
  )
}
