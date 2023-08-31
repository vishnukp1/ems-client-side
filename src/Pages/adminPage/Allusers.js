import Dropdown from 'react-bootstrap/Dropdown';
  import { MDBCol, MDBIcon } from 'mdb-react-ui-kit'
  import React from 'react'
  import Table from 'react-bootstrap/esm/Table'
  import Button from 'react-bootstrap/esm/Button';
  import { useNavigate } from 'react-router-dom';
  
  
  function Allusers() {
    const navigate = useNavigate()
    const buttonStyle = {
      fontSize: '8px',
      padding: '2px 5px',
      marginLeft:"2px",
      border: '1px solid #343a40',
    };
    return (
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
  <tbody>
   <tr>
   
    
  
     <td>1</td>
     <td>Mark</td>
     <td>Otto</td>
     <td>@mdo</td>
     <td>1</td>
     <td>Mark</td>
     <td>Otto</td>
     <td>1</td>
     <td>Mark</td>
     <td>
     <div style={{ display: "flex", alignItems: "center" }}>
     <Button variant="outline-dark" style={buttonStyle} onClick={() => navigate("/company/addemployee")}>
      add
  </Button>
  
                <Button variant="outline-dark" style={buttonStyle}>Delete</Button>
                <Button variant="outline-dark" style={buttonStyle} onClick={() => navigate("/company/updatestaff")}>Update</Button>
              </div>
  
     </td>
   
  
  
   </tr>
   {/* Repeat rows for more data */}
  </tbody>
  </Table>
   </div>
    )
  }
  
  export default Allusers
