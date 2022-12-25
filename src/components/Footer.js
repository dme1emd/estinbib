import React, { useState } from 'react'
import gdscLogo from '../images/gdscLogo.svg'
import estin from '../images/estin.svg'
import {AiFillFacebook , AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import last from '../images/last.svg'
const Footer = () => {
    const [informations , setInformations] = useState({
        name : '' , 
        email :'' , 
        message :'',
    })
    const handleTextArea = (e)=>{
        setInformations({...informations , message : e.target.value})
    }
    const handleEmail = (e)=>{
        setInformations({...informations , email : e.target.value})
    }    
    const handleName = (e)=>{
        setInformations({...informations , name : e.target.value})
    }
    const handleSend = ()=>{
        fetch('someurlehre' , {
            method:'POST' , 
            body:JSON.stringify(informations)
        })
    }
    console.log(informations)
  return (
    <div className='bg-[#4B7BEC] py-2 mt-6' id="footer-mobile">
        <div className='text-white my-4'>"sharing is caring"</div>
        <a className='bg-[#FA8231] rounded-md py-2 w-3/4 mx-auto mb-10 mt-4 px-20
        text-white text-lg
        '>
            contribuer
        </a>
        <div className='text-white text-3xl font-semibold
        mt-4
        '>Contact us</div>
        <input type='text' placeholder='Name' className='
        w-80 py-1 px-2 my-2 rounded-md 
        ' onChange={handleName}/>
        <input type='email' placeholder='Email' className='
        w-80 py-1 px-2  mb-2 rounded-md
        ' 
        onChange={handleEmail}
        value={informations.email}/>        
        <textarea type='text' placeholder='Message' className='
        w-80 px-2 rounded-md h-60 p-2
        '
        onChange={handleTextArea}
        value={informations.message}
        />
        <button className='bg-[#FA8231] text-white py-2
        w-80 rounded-md
        '
        onClick={handleSend}>send</button>
        <img src={gdscLogo} className='mx-auto mt-6'/>
        <div className='flex space-x-4 mb-10 mt-4 mx-auto  text-white text-2xl justify-center'>
            <a href="https://herewecode.io/">
                <AiFillFacebook/>
            </a>
            <a href="https://herewecode.io/">
                <AiFillLinkedin/>
            </a>
            <a href="https://herewecode.io/"> 
                <BsInstagram/>
            </a>
        </div>
        <img src={estin} className="mx-auto mb-6 w-16"/>
        <div className='flex flex-col space-y-2 items-center py-2 mb-0 absolute b-0 w-[100%]' id="footer-bottom-mobile">
            <div className='text-white font-semibold text-xl'>
                Made by
            </div>
            <img src={last} className="h-5"/>
        </div>
    </div>
  )
}
export default Footer;
