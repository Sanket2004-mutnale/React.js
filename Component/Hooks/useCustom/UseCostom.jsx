import React, { useState } from 'react';
import Useevenoddfinder from './Useevenoddfinder';

function UseCostom() {
    const[number,evenoddresult,oeresult,incre,decre,setnumber]=Useevenoddfinder();
   

  return (
    <>
    <h1>Custom Hook</h1>
    <input type="number" value={number} onChange={(e)=>{setnumber(parseInt(e.target.value))}} />
    <h3>The number is : {number}</h3>
    <h4>The given number is even or odd : {evenoddresult}</h4>
    <button onClick={()=>oeresult(number)}>Even odd click</button>
    <button onClick={()=>incre()}>increment </button>
    <button onClick={()=>decre()}>decrement</button>
      
    </>
  );
}

export default UseCostom;
