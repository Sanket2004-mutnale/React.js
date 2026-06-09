import React, { useMemo, useState } from 'react';

function EvenOdd() {
    const [num,Setnum]=useState();


    function Eochecker(n){
       if(n%2==0){
        return 'Even Number'
       }
       else{
        return 'odd number'
       }

    }

    function primeno(n){
        if(n<0){
            return 'Given no is less then zero'
        }
        else {
            for(let i=2;i<=Math.sqrt(n);i++){
                if(n%1==0){
                    return ' prime number'
                }
            }
            return 'Not Prime Number'
        }
    }

    const evenoddhere =useMemo(()=>Eochecker(num),[num])
    const primenohere =useMemo(()=>primeno(num),[num])
  return (
    <>
      <h1>Number checker</h1>
      <input type="number" value={num} onChange={(e)=>{Setnum(parseInt(e.target.value))}} />
      <h2>The Given {num} is {evenoddhere}</h2>
      <h2>The Given {num} is {primenohere}</h2>
    </>
  );
}

export default EvenOdd;
