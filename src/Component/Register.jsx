import React from 'react'
import './Register.css'
import user_icon from './Image/user_icon.jpg'
import Email_icon from './Image/Email_icon.png'
import Paasword_icon from './Image/Passsword_icon.png'
import Bg_image from './Image/background.jpg'
import Login from './Login'
import Submit from './Submit'

function Register() {
  return (
    <>
     <div className='Container1'>
            <div className='header1'>
                <div className='text1'>Registration Form</div>
                <div className='underline1'></div>
            </div>
            <div className='inputs1'>
               <div className='input1'>
                    <img src={user_icon} alt=''/>
                    
                    <input type='text' placeholder='User Name' />
    
                </div>
                
                <div className='input1'>
                    <img src={Email_icon} alt=''/>
                    <input type='Email' placeholder='Email id' />
    
                </div>
                <div className='input1'>
                    <img src={Paasword_icon} alt=''/>
                    <input type='Password' placeholder='Create Password'/>
    
                </div>
                <div className='input1'>
                    <img src={Paasword_icon} alt=''/>
                    <input type='Password' placeholder='Confirm Password'/>
    
                </div>
                <div className="Submit-container1">
                    <div > <button className="sumbit1" onClick={Submit} >Register</button> </div>
                    <div> <button className="sumbit1"  onClick={Login}>Log in</button></div>
                </div>
            </div>
        </div>
          
        </>
  )
}

export default Register
