import React, { useState } from 'react'
import './login.css'
import user_icon from './Image/user_icon.jpg'
import Email_icon from './Image/Email_icon.png'
import Paasword_icon from './Image/Passsword_icon.png'
import { NavLink } from 'react-bootstrap'


function Login() {

    const [action,setAction] = useState("Sign Up")
  return (
    <>
    <div className='Container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
           {action==="Log in"?<div></div>:<div className='input'>
                <img src={user_icon} alt=''/>
                
                <input type='text' placeholder='User Name' />

            </div>} 
            
            <div className='input'>
                <img src={Email_icon} alt=''/>
                <input type='Email' placeholder='Email id' />

            </div>
            <div className='input'>
                <img src={Paasword_icon} alt=''/>
                <input type='Password' placeholder='Password'/>

            </div>
            <div className="Submit-container">
                <NavLink to='/R' className="sumbit" onClick={()=>{setAction("Sign up")}} >Sing Up</NavLink>
                <div className="sumbit" onClick={()=>{setAction("Log in")}}>Log in
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Login
