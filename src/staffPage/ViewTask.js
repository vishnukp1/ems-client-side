import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import { MDBCol } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function ViewTask() {
  const navigate = useNavigate()
  const buttonStyle = {
    fontSize: '8px',
    padding: '2px 5px',
    marginLeft:"2px",
    border: '1px solid #343a40',
  };
  return (
    <div style={{width:"100%",height: '100vh'}}>task management
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
    <Button variant="bg-light" style={{ height: "2.2rem", width: "8.8rem" }} onClick={()=>navigate("/company/addtask")}>
    Add Task
</Button>

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
    <th style={{ width: '5%' }}>#</th>
    <th style={{ width: '14%' }}>Task Title</th>
    <th style={{ width: '14%' }}>Assigned to</th>
    <th style={{ width: '10%' }}>Start time</th>
    <th style={{ width: '10%' }}>End time</th>
    <th style={{ width: '14%' }}>Status</th>
    <th style={{ width: '4.6%' }}>Actions</th>

    </tr>
  </thead>
  <tbody>
    <tr>
    
     
  
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>1</td>
      <td>Mark</td>
      <td>  <div style={{ display: "flex", alignItems: "center" }}>
              <Button variant="outline-dark" style={buttonStyle}>Delete</Button>
              <Button variant="outline-dark" style={buttonStyle}>Update</Button>
            </div></td>
   
    
  
  
    </tr>
    {/* Repeat rows for more data */}
  </tbody>
</Table>
    </div>
  )
}

export default ViewTask