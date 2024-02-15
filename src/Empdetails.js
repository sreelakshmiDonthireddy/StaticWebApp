import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Empdetails = () => {
  //first we need to get the parameter values
  const{empid}=useParams();
  const[employeedetails,setEmployeeDetails]=useState({})
  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+empid)
    .then((res)=>res.json())
    .then((data)=>setEmployeeDetails(data))
    .catch((err)=>{
      console.log(err.mesaage)
    })

  },[]);
  console.log(employeedetails,"143")
  return (
    <div>
      <div className='card'style={{"textAlign":"left"}}>
        <div className='card-title'><h2>Emp Details</h2></div>
        <div className='card-body'>
          {employeedetails && 
          <div>
             <h2>Employee name is :{employeedetails.name} ({employeedetails.id})</h2>
             <h2>Email was:{employeedetails.email}</h2>
             <h2>Phone was:{employeedetails.phone}</h2>
             <Link to="/" className='btn btn-danger'>Back to List</Link>
          </div>            
          }
        </div>
      </div>
    </div>
  )
}

export default Empdetails
