import React, { useState } from 'react';

function Calculator() {

  const [input,setInput]=useState()
  const [result,setResult]=useState(0)

  const handleInput = (value) => {
    setInput(input + value);
  };

  const add = () => {
    setResult(result + parseFloat(input));
    setInput('');
  };

  const subtract = () => {
    setResult(result - parseFloat(input));
    setInput('');
  };
  return (
    <>
      <div style={{border:'2px solid black',width:'200px' }}>
      <h1>Calculator</h1>
      <div style={{border:'2px solid black'}}>
        <input type="text" value={input} />
        <h4>result:{result}</h4>
      </div>

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={add}>+</button>
      </div>

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:'10px'}}>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={subtract}>-</button>
      </div>

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:'10px'}}>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button>*</button>
      </div>

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:'10px'}}>
        <button>00</button>
        <button>0</button>
        <button>=</button>
        <button>/</button>
      </div>
      
      </div>
    </>
  );
}

export default Calculator;
