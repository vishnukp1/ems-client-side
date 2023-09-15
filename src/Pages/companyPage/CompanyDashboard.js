import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css"

import {
  PersonSimpleBike,
  UsersThree,
  UserSwitch,
  HandWaving,
} from "@phosphor-icons/react";

function CompanyMain() {
  const navigate = useNavigate();

  return (
    <>
      <Sidebars />
      <div className="main-container" style={{ backgroundColor: "#1E1E2E",display:"flex" }}>
        <div className="dashboard-div" style={{display:"flex",justifyContent:"space-around",width:"100%",flexWrap: "wrap"}}>
       
        <Card 
          style={{
         width:"14rem",
            height: "10rem",
            background: "#27293D",
            color: "white",
            // flexWrap:'wrap'

          }}
        >
          <Card.Img variant="top" src="" />
          <Card.Body >
            <UsersThree size={32} />
            <Card.Title>EMPLOYEES</Card.Title>
            <Card.Text></Card.Text>
            <Button
              style={{ backgroundColor: "#1E1E2E" }}
              onClick={() => navigate("/company/staff")}
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
        
        <Card
          style={{
            width:"14rem",
            height: "10rem",
            background: "#27293D",
            color: "white",
          //  flexWrap:'wrap'
          }}
        >
          <Card.Body>
            <PersonSimpleBike size={32} />
            <Card.Title>TASKS</Card.Title>
            <Card.Text></Card.Text>
            <Button
              style={{ backgroundColor: "#1E1E2E" }}
              onClick={() => navigate("/company/task")}
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
        {/* <Card style={{ width: '23%',height:"10rem",background:"#27293D",color:"white"}}>
        
        <Card.Body>
          <Card.Title>Performance</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}} onClick={()=>navigate("/company/performance")}>More Info</Button>
        </Card.Body>
      </Card> */}
        <Card
          style={{
            width:"14rem",
            height: "10rem",
            background: "#27293D",
            color: "white",
            // flexWrap:'wrap'
          }}
        >
          <Card.Body>
            <HandWaving size={32} />
            <Card.Title>ATTENDANCE</Card.Title>
            <Card.Text></Card.Text>
            <Button
              style={{ backgroundColor: "#1E1E2E" }}
              onClick={() => navigate("/company/attendance")}
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
       

        <Card
          style={{
            width:"14rem",
            height: "10rem",
            background: "#27293D",
            color: "white",
            // flexWrap:'wrap'
          }}
        >
          <Card.Body>
            <UserSwitch size={32} />
            <Card.Title>LEAVE</Card.Title>
            <Card.Text></Card.Text>
            <Button
              style={{ backgroundColor: "#1E1E2E" }}
              onClick={() => navigate("/company/leave")}
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
        {/* <Card style={{ width: '25%' ,height:"10rem",background:"#27293D" ,color:"white"}}>
       
        <Card.Body>
          <Card.Title>Salary Paid</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button style={{backgroundColor:"#1E1E2E"}}onClick={()=>navigate("/company/salary")}>More Info</Button>
        </Card.Body>
      </Card> */}
</div>

        <Card
          style={{
            width:"14rem",
            height: "10rem",
            background: "#27293D",
            color: "white",
            // flexWrap:'wrap'
          }}
        >
          <Card.Body>
            <Card.Title>Employee Dashboard</Card.Title>
            <Card.Text></Card.Text>
            <Button
              style={{ backgroundColor: "#1E1E2E" }}
              onClick={() => navigate("/employees/Dashboard")}
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
        

      </div>
    </>
  );
}

export default CompanyMain;
