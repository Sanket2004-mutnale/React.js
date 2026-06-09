import React, { useEffect, useState } from 'react';

function StopWatchuseeffct() {
  const [time,setTime]=useState(0);
  const [isrunning,setIsrumming]=useState(false);

  useEffect(()=>{
    let interval;
    if(isrunning){
      interval =setInterval(()=>{
        setTime((pretime)=> pretime + 1);
      },1000)
    }

    return() => clearInterval(interval);
  },isrunning)

  const handlestart=()=>setIsrumming(true)
  const handlestop =()=>setIsrumming(false)
  return (
    <>
      <h1>Timer:</h1>
      <button>Start Time</button>
      <button>Stop</button>
      <button>Restart</button>
    </>
  );
}

export default StopWatchuseeffct;
