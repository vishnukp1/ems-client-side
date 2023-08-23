import { MDBCol } from 'mdb-react-ui-kit'
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Table from 'react-bootstrap/esm/Table'

function ViewPerformance() {
  return (
    <div style={{width:"100%",height: '100vh'}}>Leave
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
      
  <thead style={{background:"#e4ebf0"}}>
 
    <tr>
    <th style={{ width: '5%' }}>#</th>
    <th style={{ width: '15%' }}>Staff</th>
    <th style={{ width: '6.42%' }}>Jan</th>
    <th style={{ width: '6.42%' }}>Feb</th>
    <th style={{ width: '6.42%' }}>Mar</th>
    <th style={{ width: '6.42%' }}>Apr</th>
    <th style={{ width: '6.42%' }}>May</th>
    <th style={{ width: '6.42%' }}>Jun</th>
    <th style={{ width: '6.42%' }}>Jul</th>
    <th style={{ width: '6.42%' }}>Aug</th>
    <th style={{ width: '6.42%' }}>Sep</th>
    <th style={{ width: '6.42%' }}>Oct</th>
    <th style={{ width: '6.42%' }}>Nov</th>
    <th style={{ width: '6.42%' }}>Dec</th>
    <th style={{ width: '15%' }}>Total Rating</th>
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
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
  
    </tr>
    {/* Repeat rows for more data */}
  </tbody>
</Table>
    </div>
  )
}

export default ViewPerformance