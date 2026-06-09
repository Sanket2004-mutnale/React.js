import React, { useRef, useState } from 'react';
import useBankAccount1 from './useBankAccount1';

import './BankApplication.css'


function BankApplication1() {
  

  let name2 = 'Suyash'
  function name() {
    return name2
  }



  const [amount, setAmount,currentamount, credit, debit] = useBankAccount1(700)



  function handlefocuce() {
    hookref.current.focus();
    hookref.current.style.color = "black"
    hookref.current.style.backgroundColor = 'lightblue'
  }
  var hookref = useRef()


  return (
    <>
      <div className='bank-account'>

        <h1>Bank Application</h1> <hr />
       
       

        <h3>Accounter name:-{name()}</h3>

        <input type="number" value={amount} placeholder='Enter the amount' onChange={(e) => { setAmount(parseInt(e.target.value)) }} ref={hookref} onFocus={handlefocuce} />
        <h2> Amount : {amount} </h2>
        <h2>Bank balance: {currentamount}</h2>

        <div className='buttons'>
          <button onClick={() => credit()}>Add money</button>
          <button onClick={() => debit()}>debit money</button></div>
      </div>

    </>
  );
}
export default BankApplication1;
