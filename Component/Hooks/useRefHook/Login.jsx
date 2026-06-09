/* import React, {useState, useRef } from 'react';
import './Login.css'

function Login(){
    const uesrHookref = useRef();
    const emailHookref = useRef();
    const passwordHookref = useRef();
    /* const [reset,setreset]=useState('') */
    
       /*  const handleInputChange = (event) => {
            setreset(event.target.value);
          }; */

        /* const color =['blue','yellow',]   */
       /*  function Reset(){ */
            /*  setreset(''); */
           /*   uesrHookref.current.focus();
             uesrHookref.current.style.color='yellow';
             uesrHookref.current.style.backgroundColor='lightblue'
             emailHookref.current.focus();
             emailHookref.current.style.color='yellow';
             emailHookref.current.style.backgroundColor='lightblue'
             passwordHookref.current.focus();
             passwordHookref.current.style.color='yellow';
             passwordHookref.current.style.backgroundColor='lightblue'
        }

    
    
  return (
    <>
      <div id='body'>
        <h2>Login </h2><hr />
      <form action="">
        <label htmlFor="">UserName:</label><br />
        <input type="text" id='input' required  ref={uesrHookref}  /><br /> <br />
         <label htmlFor="">Email-Id:</label><br />
        <input type="email" id='input' required ref={emailHookref} /><br /><br />
        <label htmlFor="">Password</label><br />
        <input type="password" id='input' required ref={passwordHookref} /><br /><br />
        <button>Submit</button> 
        <button onClick={Reset} >Reset</button>
        

      </form>
      </div>
    </>
  );
}

export default Login;
 */ 
import React, { useRef } from 'react';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFocus = (ref) => {
    ref.current.style.backgroundColor = 'lightblue';
    ref.current.style.fontFamily = 'Arial, sans-serif';
  };

  const handleBlur = (ref) => {
    ref.current.style.backgroundColor = '';
    ref.current.style.fontFamily = '';
  };

  return (
    <div>
      <h1>Login Form</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          ref={emailRef}
          onFocus={() => handleFocus(emailRef)}
          onBlur={() => handleBlur(emailRef)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          ref={passwordRef}
          onFocus={() => handleFocus(passwordRef)}
          onBlur={() => handleBlur(passwordRef)}
        />
      </div>
      <button onClick={() => emailRef.current.focus()}>Focus Email</button>
      <button onClick={() => passwordRef.current.focus()}>Focus Password</button>
    </div>
  );
}

export default Login;