import React, { useState } from 'react';

function InputTracker() {
  /* Input traker */
  const [input, setInput] = useState('')

  const handletext = (e) => {
    setInput(e.target.value);
  }
  /* change color */
  const [bgColor, setBgColor] = useState('lightblue')

  const ChangeBgColor = () => {
    setBgColor((prevcolor) => prevcolor === 'lightblue' ? 'yellow' : 'lightblue')

  }
  /* Shooping Card */
  const [additem, setAdditem] = useState(0)

  const Increment = () => {
    setAdditem(additem + 1);
  }

  const decrement = () => {
    setAdditem((e) => e > 0 ? e - 1 : 0)
  }

  /* light bulb */
  
  const[bgColors,setBgColor1]=useState('gray')

  const on =()=>{
    setBgColor1((previouscolor) => previouscolor === 'gray'? 'yellow':'yellow' )
  }
  
  const off =()=>{
    setBgColor1((previouscolor) => previouscolor === 'yellow'? 'grey':'grey' )
  }

  /* input item */
  const [inputValue1,setInputvalue1]=useState()
  const[items1,setItem1]=useState([])

  const handleChangeInputvalue =(value1)=>{
    setInputvalue1(value1.target.value);
  };

  const additem1 = () =>{
     if(inputValue1.trim() !==''){
        setItem1 ([...items1,inputValue1]);
        setInputvalue1('')

     }
  };

  /* Calculator */
  
    const [text, setText] = useState('');
  
    const handleTextChange = (event) => {
      setText(event.target.value);
    };

    /* celesius */
  
      const [celsius, setCelsius] = useState('');
      const [fahrenheit, setFahrenheit] = useState('');
    
      const handleCelsiusChange = (event) => {
        const celsiusValue = event.target.value;
        setCelsius(celsiusValue);
        if (celsiusValue === '') {
          setFahrenheit('');
        } else {
          setFahrenheit((celsiusValue * 9/5 + 32).toFixed(2));
        }
      };
    
      const handleFahrenheitChange = (event) => {
        const fahrenheitValue = event.target.value;
        setFahrenheit(fahrenheitValue);
        if (fahrenheitValue === '') {
          setCelsius('');
        } else {
          setCelsius(((fahrenheitValue - 32) * 5/9).toFixed(2));
        }
      };

  return (
    <>
      <div><div>
        <h1>Input Tracker</h1>
        <input type="text" value={input}
          onChange={handletext}
          placeholder='Type here' />

      </div>
        <p>Current Input:{input}</p>
      </div>

      <div>
        <h2>Change Background Color</h2>
        <div>
          <p style={{ backgroundColor: bgColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio, nesciunt suscipit labore autem pariatur asperiores maxime itaque voluptates quia ipsum iure aliquam ullam assumenda magni. Maiores quo nulla eligendi!</p>
          <button onClick={ChangeBgColor}>Change color</button>
        </div>
      </div>

      <div>
        <h2>Shopping Cart Counter</h2>
        <div style={{ border: '2px solid black', width: '230px' }}>
          <h4 style={{ textAlign: 'center' }}>card</h4>
          <h6 style={{ textAlign: 'center' }}>item no:{additem}</h6>
          <button onClick={Increment}>Add item</button>
          <button onClick={decrement} style={{
            marginLeft: '10px'
          }} >Remove item :</button>
           
        </div>

        {/* light bulb */}
        <div style={{border:'2px solid black',width:'250px',marginTop:'30px'}}>
          <h2>Light bulb</h2>
          
          <div style={{ backgroundColor:bgColors,border:'2px solid black',width:'200px',height:'200px', borderRadius:'100px',marginLeft:'20px'}} >

          </div>

          <button onClick={on}>ON</button>
          <button onClick={off}>OFF</button>
        </div> <br /><br /><br />

        {/* Input item */}
        <div style={{border:'solid black 2px', width:'200px'}}>
          <h2>Item list</h2>
          <input type="text" onChange={handleChangeInputvalue} value={inputValue1} placeholder='Enter the item'/><br />
          <button onClick={additem1}>AddItem</button>

          <ul>
            {items1.map((item,index) =>( <li key={index}>{item}</li> ))}
          </ul>

        </div>
        {/* calculator */}

        <div>
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type here"
      
      />
      <p>Number of characters: {text.length}</p>
    </div> <br /><br />
    
    <div>
      <h1>Temperature Converter</h1>
      <div>
        <label>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Celsius"
          />
        </label>
      </div> <br />
      <div>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Fahrenheit"
          />
        </label>
      </div>
      </div>


      </div>
    </>
  );
}

export default InputTracker;
