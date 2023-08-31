import { MDBCol } from 'mdb-react-ui-kit'
import React from 'react'
import { Button, Dropdown, Table } from 'react-bootstrap'

function Salary() {
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
     <th style={{ width: '14%' }}>Staff</th>
     <th style={{ width: '14%' }}>Salary per Month</th>
     <th style={{ width: '10%' }}>Allowance</th>
     <th style={{ width: '10%' }}>Deductions</th>
     <th style={{ width: '14%' }}>Net salary</th>
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
       <td>  nahi</td>
    
     
   
   
     </tr>
     {/* Repeat rows for more data */}
   </tbody>
 </Table>
     </div>
  )
}

export default Salary