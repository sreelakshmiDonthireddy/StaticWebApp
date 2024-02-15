import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
const Employeelist = () => {
    const[empdata,setEmpdata]=useState(null);
    const navigate=useNavigate()
const loadDetails=(id)=>{
    navigate('/employee/detail/'+id);

}
const deleteDetails=(id)=>{
    if(window.confirm("do you want to delete?")){
        fetch("http://localhost:8000/employee/"+id,{
        method:"DELETE",

    }).then((res)=>{
      alert("Removed successfully")
      window.location.reload() // to reload the page 
    }).catch((err)=>{
        console.log(err.message)
    })

    }
} 
const editDetails=(id)=>{
    navigate('/employee/edit/'+id);
   
}

  useEffect(()=>{
    fetch("http://localhost:8000/employee")
    .then((res)=>res.json())
    .then((data)=>setEmpdata(data))
  },[])  
  console.log(empdata)
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h2>Employee List</h2>
            </div>
            <div className='card-body'>
                <div className='divbtn'>
                    <Link to="employee/create" className="btn btn-success">AddNew(+)</Link>
                </div>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {empdata && //if data is there we are mapping called conditional rendering
                        empdata.map((val,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <a onClick={()=>{editDetails(val.id)}} className='btn btn-success'>Edit</a>
                                        <a onClick={()=>{deleteDetails(val.id)}} className='btn btn-danger'>Remove</a>
                                        <a onClick={()=>{loadDetails(val.id)}} className='btn btn-primary'>Details</a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
      
    </div>
  )
}

export default Employeelist
