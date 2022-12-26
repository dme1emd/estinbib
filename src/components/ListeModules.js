import React, { useState } from 'react'
import {IoIosArrowBack , IoIosArrowForward} from 'react-icons/io'
import { Module } from './Module'
export const ListeModules = () => {
    const [firstSem , setFirstSem] = useState(true)
    const listeModule = [
        {
            moduleName : 'ana1 - analyse'
        },
        {
            moduleName : 'ana1 - analyse'
        },        {
            moduleName : 'ana1 - analyse'
        },        {
            moduleName : 'ana1 - analyse'
        }, {
            moduleName : 'ana1 - analyse'
        }, {
            moduleName : 'ana1 - analyse'
        },
    ]
  return (
    <div className="liste-modules-container">
        <div className="header">
            <IoIosArrowBack 
            onClick={()=>setFirstSem(true)}
            className={firstSem ? "arr tr":"arr"}/>
            <div>semestre {firstSem ? 1:2}</div>
            <IoIosArrowForward onClick={()=>setFirstSem(false)}
            className={!firstSem ? 'arr tr':'arr'}
            />
        </div>
        <div className='body-liste'>
            {listeModule.map((e)=><Module module={e}/>)}
        </div>
    </div>
  )
}
