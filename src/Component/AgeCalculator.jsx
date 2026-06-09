import React,{useRef, useState} from 'react';
import './AgeCalculator.css'

function AgeCalculator() {
    
        const [dob, setDob] = useState('');
        const [today, setToday] = useState('');
        const [age, setAge] = useState('');

        const calculateAge = () => {
            if (dob && today) {
              const birthDate = new Date(dob);
              const todayDate = new Date(today);
              let age = todayDate.getFullYear() - birthDate.getFullYear();
              const monthDifference = todayDate.getMonth() - birthDate.getMonth();
              if (monthDifference < 0 || (monthDifference === 0 && todayDate.getDate() < birthDate.getDate())) {
                age--;
              }
              setAge(age);
            } else {
              alert('Please select both dates');
            }
          }

          const resetFields = () => {
            setDob('');
            setToday('');
            setAge('');
            HookuseRef1.current.focus();
           
          }

         const HookuseRef1 = useRef();
         const HookuseRef2 = useRef()
          
         function handlecolor (denote){
            denote.current.style.backgroundColor='lightblue';
            
         }

         function handleblur(denote){
          denote.current.style.backgroundColor='';
         }
        
      
  return (
    <>
    <div className='body'>
            <div className='header'>Age Calculator</div>
            <div className='discription'>Age Calculator can determine the age or interval between two dates.The calculated age will be displyed in years.</div>

       
                <div className='display-box'>
                   <p> Your Age is {age} year.</p>
                  
                </div>
                <div className='birthday'>
                    Date of Birth: 
                    <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)} onBlur={()=>handleblur(HookuseRef1)} onFocus={()=>handlecolor(HookuseRef1)}  ref={HookuseRef1} placeholder='DOB'/>
                </div>

                <div className='today-date'>
                    Today's Date : 
                    <input type="date" value={today} onChange={(e)=>setToday(e.target.value) } placeholder='Today-Date' onBlur={()=>handleblur(HookuseRef2)} onFocus={()=>handlecolor(HookuseRef2)} ref={HookuseRef2} />
                </div>
            
            <div className='buttons'>
                <button onClick={calculateAge}>Age Calculate</button>
                <button onClick={resetFields}>Reset</button>
            </div>
    </div>

      
    </>
  );
}

export default AgeCalculator;
