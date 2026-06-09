import React, { useMemo, useState } from 'react';

function UseMemo() {
    const [num,setnum] =useState();
    const [factorial,setfactorial] =useState()
    const factorialnum =(n)=>{
        var fact =1;
       if(n<0){
          return 'Factorial is not negative'
       }
       else if (n===0){
          return "Factorial never zero"
       }
       else{
          for(let i=2; i<=n;i++){
                fact*=i;
          }
          return fact;
       }
    }

    /* UseMemo */
   const factorialnoHere =useMemo(()=>factorialnum(num),[num])

  return (
    <>
    <h2>UseMemo Hook</h2>
    <input type="number" value={num} onChange={(e)=>{setnum(parseInt(e.target.value))}}/>
    <h3 >The factorial of {num} is {factorialnoHere} </h3>
    {/*  <button onClick={()=>{setfactorial(factorialnum(num))}}>Click here </button>  */}
    </>
  );
}

export default UseMemo;
