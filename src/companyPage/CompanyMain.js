import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CompanyMain() {
   const navigate = useNavigate()
    
   
      return (
        <div style={{ display: 'flex', height:"100vh", flexWrap: 'wrap' ,justifyContent:"space-around" ,alignContent:"space-around"}}>
        <Card style={{ width: '23%',background: "#e4b7e8" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>All employees</Card.Title>
          <Card.Text>
         
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/company/staff")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '23%' ,background:"#e8b7b7"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>All Tasks</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/company/task")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '23%' ,background:"#9fd0e3"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Performance</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/company/performance")}>More Info</Button>
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
          <Card.Title>Leave</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/company/leave")}>More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '25%' ,background:"#e3a19f" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Salary Paid</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate("/company/salary")}>More Info</Button>
        </Card.Body>
      </Card>
     
      </div>
      );
    }
    
   


export default CompanyMain