import React, { useRef, useState } from 'react';

function Input() {
    const [reset,setreset]=useState('')

    const handleInputChange = (event) => {
        setreset(event.target.value);
      };
    function Reset(){
         setreset('');
         HookuseRef.current.focus();
    }

    function changeColor(){
        HookuseRef.current.style.color='red';
        HookuseRef.current.style.backgroundColor='blue'
    }

    /* useRef sysntax : scope variable = useRef */

    const HookuseRef =useRef();
    console.log(HookuseRef);
  return (
    <>
      <input type="text" onChange={handleInputChange} value={reset} ref={HookuseRef}/>
      <button onClick={Reset}>reset</button>
      <button onClick={changeColor}>changeColor</button>
    </>
  );
}

export default Input;
