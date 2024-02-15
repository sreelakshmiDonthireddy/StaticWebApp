import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link,useNavigate } from 'react-router-dom';
const Empedit = () => {
  const {empid}=useParams();
  const[data,setData]=useState({
    id:"",
    name:"",
    email:"",
    phone:"",
  })
  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+empid)
    .then((res)=>res.json())
    .then((data)=>setData(data))
    .catch((err)=>{
      console.log(err.mesaage)
    })
  },[]);
  
  const[active,activechnage]=useState(true);
  const[validation,setValidation]=useState(false)
  const changeHandler = (e) => {
    let updateData = data;
    updateData[e.target.name] = e.target.value;
    setData({ ...updateData });
    
  };
  const navigate=useNavigate()// to redirect to listing page
  const submitHandler=(e)=>{
    e.preventDefault();
    //console.log(data,active)
    fetch("http://localhost:8000/employee/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          id:data.id,
            name:data.name,
            email:data.email,
            phone:data.phone
        })
    }).then((res)=>{
      alert("saved successfully")
      navigate('/')

    }).catch((err)=>{
        console.log(err.message)
    })
  }
  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={submitHandler}>
            <div className='card' style={{"text-align":"left"}}>
              <div className='card-title'>
                <h2>Edit Employee Details</h2>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>ID</label>
                      <input className='form-control' value={data.id} disabled="disabled"></input>
                      {/* Here id is disabled because id is genarating dynamic manner */}
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Name</label>
                      <input required  onMouseDown={e=>setValidation(true)} className='form-control' name='name'value={data.name} onChange={changeHandler}></input>
                      {/* <input className='form-control' value={data.name} onChange={e=>nameChange(e.target.value)}></input> */}
                      {data.name.length <=0 && validation && <span className='text-danger'>Enter the name</span>}
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input type='email' name='email' className='form-control' value={data.email} onChange={changeHandler}></input>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Phone</label>
                      <input type="number" name='phone' className='form-control' value ={data.phone} onChange={changeHandler}></input>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <input type="checkbox"checked={active} onChange={e=>activechnage(e.target.checked)}></input>
                      <label className='form-check-label'>Is Active</label>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <button className='btn btn-success' type='submit'>Save</button>
                      <Link to="/" className='btn btn-danger'>Back</Link> 
                      {/* this is also button */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Empedit
