import Dropdown from 'react-bootstrap/Dropdown';
import { MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../../styles/company.css"
import Sidebars from '../../component/Sidebars';
import { useDispatch, useSelector } from 'react-redux';
import CreateStaff from './CreateStaff';
import {addStaff}from '../../Reducers/addstaffReducer';





function Staff() {
  const addstaf = useSelector((state)=>state.addstaff)
  
  const dispatch = useDispatch()
  
  const navigate = useNavigate()
  const [staff,setStaff] = useState([])
  const buttonStyle = {
    fontSize: '8px',
    padding: '2px 5px',
    marginLeft:"2px",
    border: '1px solid #343a40',
    hover:{
      background:"black"
    }
  };

  const getStaffData = async () => {
    try {
      const response = await axios.get(`http://localhost:4444/company/staff`);
      const responseData = response.data;
  
      console.log(responseData);
      setStaff(responseData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      
    }
  };
  const handleDeleteStaff = async (staffId) => {
    try {
      await axios.delete(`http://localhost:4444/company/staff/${staffId}`);
      
      getStaffData();
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  useEffect(() => {
    getStaffData();
  }, [addstaf]);

  const searchHandle = async (e) =>{
    let key = e.target.value
    const response = await axios.get(`http://localhost:4444/company/search?name=${key}`);
    const responseData = response.data;
    if(responseData){
      setStaff(responseData)
    }

  }

  return (
    <>
  
    <Sidebars />
    <div className="col-sm mt-1 me-2" style={{width:"100%",height: '100vh',marginLeft:"1rem"}}>
      <h4 style={{textAlign:"left",marginTop:"1.3rem",marginBottom:"1.2rem",fontFamily:"Arial, sans-serif"}}>EMPLOYEES</h4>
  
     <div style={{width:"100%",display:"flex",justifyContent:"space-between" }}>
        <div style={{display:'flex',gap:".5rem"}}> <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{height:"2rem",width:"7rem",fontSize:".5rem",background:"#DDD6FF"}}>
       All Department
      </Dropdown.Toggle>
      

      <Dropdown.Menu style={{background:"#D8E5FB"}}> 
        <Dropdown.Item href="#/action-1">Design</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Front-developer</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
    <Button style={{height:"2rem",width:"6rem",fontSize:".5rem",background:"#14539A"}} onClick={()=>dispatch(addStaff())}>Add Staff</Button>
   
    </div>
    

    <div>  <MDBCol md="14">
      <div className="active-pink-3 active-pink-4 mb-4 ">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={searchHandle}/>
      </div>
    </MDBCol>
    </div>
   
    </div>
    <Table className="table-text" striped bordered hover size="sm" >
<thead>
 <tr className='table-head'>
    <th style={{ width: '3%' }}>#</th>
    <th style={{ width: '14%' }}>Name</th>
    <th style={{ width: '8%' }}>Photo</th>
    <th style={{ width: '12%' }}>Department</th>
    <th style={{ width: '6%' }}>Gender</th>
    <th style={{ width: '14%' }}>Phone</th>
    <th style={{ width: '14%' }}>Email</th>
    <th style={{ width: '8%' }}>Salary</th>
    <th style={{ width: '18%' }}>Address</th>
    <th style={{ width: '18%' }}>Actions</th>

 </tr>
</thead>
{staff.map((post,index) => (
<tbody>
 <tr>
 
  

   <td>{index + 1}</td>
   <td>{post.name}</td>
   <td><img style={{height:"55px",width:"55px"}} src={post.imagepath} alt="User" /></td>
   <td>{post.position}</td>
   <td>{post.gender}</td>
   <td>{post.phone}</td>
   <td>{post.email}</td>
   <td>{post.salary}</td>
   <td>{post.address}</td>
   <td>
   <div  style={{ display: "flex", alignItems: "center" }}>
  
   <Button  variant="outline-dark" style={buttonStyle} onClick={() => navigate(`/company/addtask/${post._id}`)}>addtask</Button>
              <Button className='delete-button' variant="outline-dark" style={buttonStyle} onClick={()=>handleDeleteStaff (post._id)}>Delete</Button>
              <Button  variant="outline-dark" style={buttonStyle} onClick={() => navigate(`/company/updatestaff/${post._id}`)}>Update</Button>
            </div>

   </td>
 


 </tr>
 {/* Repeat rows for more data */}
</tbody>
 ))}
</Table>
{addstaf ? (
          <div className="overlay">
            <CreateStaff />
          </div>
        ) : null}


   
 </div>
 </>


  )
}

export default Staff