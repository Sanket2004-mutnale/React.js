import React from 'react'

function UserCard({name, age, location, Gender, Position, Salary}) {
  return (
    <>
    <div className='User Card' style={{color:'red',margin:'30px'}}>
        <div style={{wordSpacing:'30px',display:'grid'}}>
         <p>{name}</p>   
        <p>{age}</p>
        <p>{location}</p>
        <p>{Gender}</p>
        <p>{Position}</p>
        <p>{Salary}</p>
        </div>
    </div>
      
    </>
  )
}

export default function Userinformation(){
     
    const User =[
        {name:'S1 ',age:'20 ',location:'kolhapur',Gender:'male',Position:'designer',Salary:'50000'},
        {name:'S2',age:'20',location:'kolhapur',Gender:'male',Position:'designer',Salary:'50000'},
        {name:'S3',age:'20',location:'kolhapur',Gender:'male',Position:'designer',Salary:'50000'},
        {name:'S4',age:'20',location:'kolhapur',Gender:'male',Position:'designer',Salary:'50000'},
        {name:'S5',age:'20',location:'kolhapur',Gender:'male',Position:'designer',Salary:'50000'}
    ]

    return(
         <>
           <h1>User information</h1>
         
           {User.map((Us,index)=>(
               
                <UserCard
                   key={index}
                   name={Us.name}
                   age={Us.age}
                   location={Us.location}
                   Gender={Us.Gender}
                   Position={Us.Position}
                   Salary={Us.Salary}
                   
                   
                   
                   />
           ))}
           
           
           </>
    )

}
