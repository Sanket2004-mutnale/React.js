import React from 'react';
import {value1,value2} from './ParentCom'

function Child7() {
    const namehere = value1;
    const phoneNohere = value2;
  return (
    <>
    <h1>My name is {namehere}, and my phone No is {phoneNohere}</h1>
      
    </>
  );
}

export default Child7;
