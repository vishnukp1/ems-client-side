import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Sidebars from '../../component/Sidebars';

function CompanyMain() {
   const navigate = useNavigate()
    
   
      return (
        <>
          <Sidebars />
        <div className='main-container' style={{ backgroundColor:"#1E1E2E" }}>
        <Card style={{ width: '23%',height:"10rem",background: "#27293D" ,color:"white"}}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>All employees</Card.Title>
          <Card.Text>
         
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}} onClick={()=>navigate("/company/staff")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '23%' ,height:"10rem",background:"#27293D",color:"white"}}>
        
        <Card.Body>
          <Card.Title>All Tasks</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}} onClick={()=>navigate("/company/task")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '23%',height:"10rem",background:"#27293D",color:"white"}}>
        
        <Card.Body>
          <Card.Title>Performance</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}} onClick={()=>navigate("/company/performance")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '23%',height:"10rem" ,background:"#27293D",color:"white"}}>
        
        <Card.Body>
          <Card.Title>Attendance</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}} onClick={()=>navigate("/company/attendance")}>More Info</Button>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '25%',height:"10rem" ,background:"#27293D",color:"white"}}>
        
        <Card.Body>
          <Card.Title>Leave</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}} onClick={()=>navigate("/company/leave")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '25%' ,height:"10rem",background:"#27293D" ,color:"white"}}>
       
        <Card.Body>
          <Card.Title>Salary Paid</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}}onClick={()=>navigate("/company/salary")}>More Info</Button>
        </Card.Body>
      </Card>
      
     
      <Card style={{ width: '25%',height:"10rem" ,background:"#27293D" ,color:"white"}}>
        
        <Card.Body>
          <Card.Title>Employee Dashboard</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}} onClick={()=>navigate("/employees/Dashboard")}>More Info</Button>
        </Card.Body>
      </Card>
      </div>
      </>
      );
    }
    
   
export default CompanyMain