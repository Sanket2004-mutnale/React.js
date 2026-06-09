import React,{useState} from 'react'

function StateChange() {
    
    /* useState hook syntax : sxope[initialState,updateState]=useState (intial value provide) */
     
    const [number,setnumber]=useState(0)

    function increment(){
        setnumber(number+2);
    }

    function decrement(){
        setnumber(number-2);
    }
     return (
    <>
      <h1>Hoks</h1>
      <h1>useState hook in React js</h1>
      <h4>Addition:{number} </h4>

      <button onClick={increment}>
       Increment
      </button>
      <button onClick={decrement}>
       decrement
      </button>
      
    </>
  )
}

export default StateChange
