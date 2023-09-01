import Dropdown from 'react-bootstrap/Dropdown';
import { MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Sidebars from '../../component/Sidebars';
import Navbars from '../../component/Navbars';


function Staff() {
  const navigate = useNavigate()
  const [staff,setStaff] = useState([])
  const buttonStyle = {
    fontSize: '8px',
    padding: '2px 5px',
    marginLeft:"2px",
    border: '1px solid #343a40',
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
      await axios.delete(`http://localhost:4444/company/users/${staffId}`);
      
      getStaffData();
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  useEffect(() => {
    getStaffData();
  }, []);
  return (
    <>
  
    <Sidebars />
    <div style={{width:"100%",height: '100vh'}}><h2>Staff Management</h2>
  
     <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
        <div style={{display:'flex'}}> <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
       All Department
      </Dropdown.Toggle>
      

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Design</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Front-developer</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Button style={{height:"2.2rem",width:"8.8rem"}}>Show Report</Button>
    <Button style={{height:"2.2rem",width:"8.8rem"}} onClick={()=>navigate("/company/createstaff")}>Add Staff</Button>
   
    </div>

    <div>  <MDBCol md="12">
      <div className="active-pink-3 active-pink-4 mb-4 ">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
    </div>
   
    </div>
    <Table striped bordered hover size="sm" >
<thead>
 <tr>
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
{staff.map((post) => (
<tbody>
 <tr>
 
  

   <td>1</td>
   <td>{post.name}</td>
   <td><img style={{height:"55px",width:"55px"}} src={post.imagepath} alt="User" /></td>

   <td>{post.position}</td>
   <td>{post.gender}</td>
   <td>{post.phone}</td>
   <td>{post.email}</td>
   <td>{post.salary}</td>
   <td>{post.address}</td>
   <td>
   <div style={{ display: "flex", alignItems: "center" }}>
  
   <Button variant="outline-dark" style={buttonStyle} onClick={() => navigate(`/company/addtask/${post._id}`)}>addtask</Button>
              <Button variant="outline-dark" style={buttonStyle} onClick={()=>handleDeleteStaff (post._id)}>Delete</Button>
              <Button variant="outline-dark" style={buttonStyle} onClick={() => navigate(`/company/updatestaff/${post._id}`)}>Update</Button>
            </div>

   </td>
 


 </tr>
 {/* Repeat rows for more data */}
</tbody>
 ))}
</Table>
   
 </div>
 </>


  )
}

export default Staff