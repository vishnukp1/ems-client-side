import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function StaffDashboard() {
   const navigate = useNavigate()
    
   
      return (
        <div style={{ display: 'flex', height:"100vh", flexWrap: 'wrap' ,justifyContent:"space-around" ,alignContent:"space-around"}}>
       
      <Card style={{ width: '23%' ,background:"#e8b7b7"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>View Attendance</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/employees/viewattendance")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '23%' ,background:"#9fd0e3"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>All Employee</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/employees/viewstaff")}>More Info</Button>
        </Card.Body>
      </Card>
     

      <Card style={{ width: '23%' ,background:"#9fd0e3"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Add Leave</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/employees/addleave")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '23%' ,background:"#9fe3a2"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Attendance</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/company/attendance")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '25%' ,background:"#d9e39f"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>View Performance</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/employees/performance")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '25%' ,background:"#e3a19f" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>View Task</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/employees/viewtask")}>More Info</Button>
        </Card.Body>
      </Card>
      
      

      <Card style={{ width: '25%' ,background:"#e3a19f" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Add Performance</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/company/addperformance/:id")}>More Info</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '25%' ,background:"#e3a19f" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Staff Login</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/employees/stafflogin")}>More Info</Button>
        </Card.Body>
      </Card>
      </div>
      );
    }
    
   
export default StaffDashboard