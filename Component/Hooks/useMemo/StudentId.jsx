import React, { useMemo, useState } from 'react';
const students = [
    { id: 1, name: 'ram' },
    { id: 2, name: 'dhanu' },
    { id: 3, name: 'Ajit' },
    { id: 4, name: 'sham' },
    { id: 5, name: 'sanket' },
    { id: 6, name: 'sohel' },
    { id: 7, name: 'pranav' },
    { id: 8, name: 'suyash' },
    { id: 9, name: 'panu' },
    { id: 10, name: 'balu' },
  ];
  
function StudentId() {
    const [searchname,setSearchName] =useState('');

    const studentnameshere = useMemo(()=>{
        return students.filter(student => student.name.toLowerCase().includes(searchname.toLowerCase()))
    },[searchname])
  return (
    <>
     <input type="text" value={searchname}  placeholder='Search by name' onChange={(e)=>{setSearchName(e.target.value)}}/> 
    <ul>
    {studentnameshere.length > 0 ? (
          studentnameshere.map((student) => (
            <li >
              {student.name}
            </li>
          ))
        ) : (
          <li >No results found</li>
        )}
    </ul>
    </>
  );
}

export default StudentId;
