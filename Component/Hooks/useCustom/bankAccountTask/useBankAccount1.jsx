import {useState} from 'react';

function useBankAccount1(initial=100) {
    const[amount,setAmount]=useState();
    const[currentamount,setcurrentamount]=useState(initial);
    
    
    function credit(){
        setcurrentamount(amount+currentamount);
    }

    function debit(){
        if(currentamount<amount){
            setcurrentamount(0)
        }
        else{
        setcurrentamount(currentamount-amount);
        }
    }
  return [amount,setAmount,currentamount,credit,debit]
}


export default useBankAccount1;