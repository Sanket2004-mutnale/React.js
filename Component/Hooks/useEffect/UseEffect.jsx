import React, {  useEffect, useState } from 'react';

function UseEffect() {
const [number,setNumber] = useState(0)
const [number1,setnumber1] =useState(10)

const increment = ()=>{
    setNumber(number+1);
}
const decrement =()=>{
  setnumber1(number1-2)
}
 const reset =()=>{
    setNumber(0)
 }
 useEffect(()=>{
  console.log('here is my resent value:',number,number1)
  return function(){
    console.log("unmount component")
  }
  
 })

  return (
    <>
     <div>
        <h1>UseEffect hook</h1>
        <p>Counting start here: {number}</p>
        <button onClick={increment} >increment..</button>
        <button onClick={decrement} >decrement..</button>
        <button onClick={reset}>Reset</button>
    </div> 
    </>
  );
}

export default UseEffect;
