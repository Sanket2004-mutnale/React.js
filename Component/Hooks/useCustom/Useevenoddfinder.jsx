import { useState } from "react";


function Useevenoddfinder(intial=1) {
    const [number,setnumber]=useState(intial);
    const[evenoddresult,setEvenoddresult]=useState();

    function oeresult(n){
        setEvenoddresult(n%2===0 ? 'even number' : 'odd number')
    }

    function incre(){
        setnumber(number+1)
    }
    function decre(){
        setnumber(number-1)
    }
  return [number,evenoddresult,oeresult,incre,decre,setnumber]
}

export default Useevenoddfinder;
