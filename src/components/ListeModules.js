import React from 'react'
import {IoIosArrowBack , IoIosArrowForward} from 'react-icons/io'
import { Module } from './Module'
export const ListeModules = () => {
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
    <div className={`flex flex-col space-y-0
    my-6 w-3/4 mx-auto shadow-2xl rounded-b-lg
    `}>
        <div className={`bg-[#4B7BEC] flex justify-center items-center
            text-white space-x-4 rounded-t-lg py-2
        `}>
            <IoIosArrowBack/>
            <div>semestre 1</div>
            <IoIosArrowForward/>
        </div>
        <div className='px-6 rounded-b-lg'>
            {listeModule.map((e)=><Module module={e}/>)}
        </div>
    </div>
  )
}
