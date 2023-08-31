import { MDBCol } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

function Attendance() {
  const [attendance, setAttendances] = useState([]);

  const getStaffData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4444/company/attendance`
      );
      const responseData = response.data;
      setAttendances(responseData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    getStaffData();
  }, []);
  return (
    <div className="App " style={{width:"100%",height: '100vh'}}><h2>Attendance Management</h2>
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
      <th style={{ width: '5%' }}>#</th>
      <th style={{ width: '15%' }}>Staff</th>
      <th style={{ width: '10%' }}>Date</th>
      <th style={{ width: '10%' }}>Time-In</th>
      <th style={{ width: '10%' }}>Time-out</th>
      <th style={{ width: '10%' }}>Working Time</th>
      <th style={{ width: '10%' }}>Status</th>
  
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
    
    </tr>
    {/* Repeat rows for more data */}
  </tbody>
</Table>
    </div>
  )
}

export default Attendance