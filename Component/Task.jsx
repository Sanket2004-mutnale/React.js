import React, {useState} from 'react'
import {Form ,Button ,Table} from 'react-bootstrap'
import './Form.css' 

function Task() {
   const [interns , setInterns]= useState([]);
      const [formData, setFormData]=useState({
          fullName:"",
          email:"",
          phoneNo:"",
          address:"",
          dob:"",
          education:"",
          startDate:"",
          endDate:"",
          skills:"",
          comments:"",
      });
      
      const [ editIndex , setEditIndex] = useState(null);
  
      const handlechange = (e) =>{
          const {name , value } =e.target;
          setFormData({...formData,[name]:value});
      };
  
      const handlesubmit= (e)=>{
          e.preventDefault();
          if(editIndex!==null){
              const updatedInterns = interns.map((form,index) =>
                  index ===editIndex? formData: form);
              setInterns(updatedInterns);
              setEditIndex(null);
          } else{
              setInterns([...interns,formData]);
          }
      
      setFormData({
          fullName:"",
          email:"",
          phoneNo:"",
          address:"",
          dob:"",
          education:"",
          startDate:"",
          endDate:"",
          skills:"",
          comments:"",
      });
  };
  
  const handleEdit = (index) => {
      setFormData(interns[index]);
      setEditIndex(index);
  };
  const handleDelete =(index)=>{
       const updatedInterns = interns.filter((_,i) => i !==index);
       setInterns (updatedInterns);
  };
     
     
      return (
       <div>
     
         <form onSubmit={handlesubmit}>
         <div className='Container'>
         <div className='header'>
             <div className='text'>Information form</div>
             <div className='underline'></div>
         </div>
         <div className='inputs'>
             <Form.Group controlId = "fullName">
               <div className='input'>
                  <Form.Label className='item'>Name:</Form.Label>
                  <Form.Control type="text" name="fullName " value={formData.fullName} onchange={handlechange} required ></Form.Control>
               </div>
             </Form.Group>
            
             <Form.Group controlId = "email">
               <div className='input'>
                  <Form.Labelabel className='item'>Email:</Form.Labelabel>
                  <Form.Control type="email" name="email " value={formData.email} onchange={handlechange} required ></Form.Control>
               </div>
             </Form.Group>
             
             <Form.Group controlId = "phoneNo">
               <div className='input'>
                  <Form.Label className='item'>Phone no:</Form.Label>
                  <Form.Control type="tel" name="phoneNo " value={formData.phoneNo} onchange={handlechange} required ></Form.Control>
               </div>
             </Form.Group>
             
             <Form.Group controlId = "address">
             <div className='input'>
                <Form.Label className='item'>Address:</Form.Label>
                <Form.Control type="text" name="address " value={formData.address} onchange={handlechange} required ></Form.Control>
             </div>
               </Form.Group>
  
              <Form.Group controlId = "dob">
                <div className='input'>
                   <Form.Label className='item'>Date of birth:</Form.Label>
                   <Form.Control type="date" name="dob " value={formData.dob} onchange={handlechange} required ></Form.Control>
                </div>
              </Form.Group>
  
              <Form.Group controlId = "education">
                <div className='input'>
                  <Form.Label className='item'>Education:</Form.Label>
                  <Form.Control type="text" name="education " value={formData.education} onchange={handlechange} required ></Form.Control>
                </div>
              </Form.Group>
  
              <Form.Group controlId = "startDate">
                <div className='input'>
                   <Form.Label className='item'>Start Date:</Form.Label>
                  <Form.Control type="date" name="startDate " value={formData.startDate} onchange={handlechange} required ></Form.Control>
                </div>
               </Form.Group>
  
               <Form.Group controlId = "endDate">
                  <div className='input'>
                      <Form.Label className='item'>End Date:</Form.Label>
                       <Form.Control type="date" name="endDate " value={formData.endDate} onchange={handlechange} required ></Form.Control>
                  </div>
               </Form.Group>
  
               <Form.Group controlId = "skills">
                 <div className='input'>
                      <Form.Label className='item'>Skills:</Form.Label>
                      <Form.Control type="text" name="skills " value={formData.skills} onchange={handlechange} required ></Form.Control>
                 </div>
               </Form.Group>
  
               <Form.Group controlId = "comments">
               <div className='input'>
                  <Form.Label className='item'>Comments:</Form.Label>
                  <Form.Control type="text" name="comments " value={formData.comments} onchange={handlechange} required ></Form.Control>
               </div>
             </Form.Group>
                
             <div className="Submit-container">
                <Button className='submit' variant="primary" type='submit'>{editIndex !== null ? "Update" :"Submit"}</Button>
               
             </div>
         </div>
     </div>
  
   </form>
  
   <h2>Information Table</h2>
   <Table striped bordered hover>
     <thead>
          <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>phoneNo</th>
              <th>Address</th>
              <th> DOB</th>
              <th>Education</th>
              <th>Start date</th>
              <th>end Date</th>
              <th>skill</th>
              <th>comments</th>
          </tr>
     </thead>
  
     <tbody>
         {interns.map((form , index)=>(
          <tr key={index}>
              <td>{form.fullName}</td>
              <td>{form.email}</td>
              <td>{form.phoneNo}</td>
              <td>{form.address}</td>
              <td>{form.dob}</td>
              <td>{form.education}</td>
              <td>{form.startDate}</td>
              <td>{form.endDate}</td>
              <td>{form.skills}</td>
              <td>{form.comments}</td>
              <td><Button variant="warning" onClick={() => handleEdit(index)}>Edit</Button>{" "}
                 <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>{" "} 
              
              
              </td>
          </tr>
         ))}
     </tbody>
   </Table>
          
  </div>
   
      
    );
}

export default Task
