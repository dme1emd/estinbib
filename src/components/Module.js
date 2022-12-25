import React, { useState } from 'react'
import {RiFile3Line} from 'react-icons/ri'
import {IoIosArrowDown , IoIosArrowUp} from 'react-icons/io'
export const Module = ({module}) => {
    const [show , setShow] = useState(false)
  return (
    <div className='flex flex-col space-y-0'>
    <div className={`flex justify-between items-center
        border-b-2 border-grey py-3 last:border-b-0 rounded
    `}
    onClick={()=>{setShow(!show)}}
    >
        <div className={`flex space-x-2 items-center
        `}> 
            <RiFile3Line className='text-[#FA8231] text-xl'/>
            <div>{module.moduleName}</div>
        </div>
        {!show ?
        <IoIosArrowDown className='text-black font-bold text-xl'
        />
            :<IoIosArrowUp className='text-black font-bold text-xl'/>

        }
        
        </div>
    {show ? 
        <div className='flex justify-center items-center w-[100%] space-x-0
         border-b-2 border-grey'>
            <div className='px-6 py-3'>
                Cours
            </div>
            <div className='px-6 py-3'>
                TD
            </div>            
            <div className='px-6 px-3'>
                Examens
            </div>
        </div>
        :''
        }
    </div>
  )
}
