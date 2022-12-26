import React, { useState } from 'react'
import {RiFile3Line} from 'react-icons/ri'
import {IoIosArrowDown , IoIosArrowUp} from 'react-icons/io'
export const Module = ({module}) => {
    const [show , setShow] = useState(false)
  return (
    <div className='module-container'>
        <div className='main'
        onClick={()=>{setShow(!show)}}
        >
            <div className='module'> 
                <RiFile3Line className='file'/>
                <div>{module.moduleName}</div>
            </div>
            {!show ?
            <IoIosArrowDown className=''
            />
                :<IoIosArrowUp className=''/>

            }
            
        </div>
    {show ? 
        <div className='drop'>
            <div className='drop-elem'>
                Cours
            </div>
            <div className='drop-elem'>
                TD
            </div>            
            <div className='drop-elem'>
                Examens
            </div>
        </div>
        :''
        }
    </div>
  )
}
