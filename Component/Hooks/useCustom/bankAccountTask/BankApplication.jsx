import React, { useRef,useState} from 'react';
import useBankAccount1 from './useBankAccount1';
import BankApplication1 from './BankApplication1'
import BankApplication2 from './BankApplication2'

import './BankApplication.css'



function BankApplication() {

 
  let name1 = 'Dhanajay'
  function name(){
  return name1
  }
  const[selectedAccount,setSelectedAccount]=useState('Account2')
  

    const Account =[
      
     { Account2 : BankApplication1},
     { Account3 : BankApplication2}

    ]
   
    // const {amount,setAmount,currentamount,credit,debit}=Account[selectedAccount](100) 
    const {amount,setAmount,currentamount,credit,debit}=useBankAccount1(100)
    
  function handlefocuce (){
      hookref.current.focus();
      hookref.current.style.color ="black"
      hookref.current.style.backgroundColor ='lightblue'
  } 
  var hookref = useRef() 
  
    
  return (
    <>
    <div className='bank-account'>
     
    <h1>Bank Application</h1> <hr />
    <label htmlFor="">Select Account no:- 
      <select name="" value={selectedAccount} onChange={(e)=>setSelectedAccount(e.target.value)} id="">
        <option value="Account1">Account 1</option>
        <option value="Account2">Account 2</option>
        <option value="Account3">Account 3</option>
      </select>
    </label>
   
    <h3>Accounter name:-{name()}</h3>
    
    <input type="number" value={amount} placeholder='Enter the amount' onChange={(e)=>{setAmount(parseInt(e.target.value))}} ref={hookref} onFocus={handlefocuce}/>
    <h2> Amount : {amount} </h2>
    <h2>Bank balance: {currentamount}</h2>
    
    <div className='buttons'>
      <button onClick={()=>credit()}>Add money</button>
    <button onClick={()=>debit()}>debit money</button></div>
    </div>
      
    </>
  );
}
export default BankApplication;
