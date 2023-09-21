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
import Navbars from "../../component/Navbars";

function CompanyMain() {
  const navigate = useNavigate();

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Navbars />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <Sidebars />
      <div className="main-container" style={{ backgroundColor: "#1E1E2E",display:"flex", }}>
        <div className="dashboard-div" style={{display:"flex",justifyContent:"space-around",width:"100%",flexWrap: "wrap" ,marginTop:"-55px"}}>
       
        <Card 
        className="card-dashboard"
          style={{
            width: "20rem",
            height: "13rem",
            background: "#27293D",
            color: "white",
            // flexWrap:'wrap'
            marginTop:"2rem"

          }}
        >
          <Card.Img variant="top" src="" />
          <Card.Body >
            <UsersThree style={{marginTop:".1rem",height:"4rem",width:"4rem"}} size={32} />
            <Card.Title>EMPLOYEES</Card.Title>
            <Card.Text></Card.Text>
            <Button
              style={{ backgroundColor: "#1E1E2E",marginTop:".2rem" }}
              onClick={() => navigate("/company/staff")}
             
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
        
        <Card
         className="card-dashboard"
          style={{
            width: "20rem",
              height: "13rem",
            background: "#27293D",
            color: "white",
          //  flexWrap:'wrap'
          marginTop:"2rem"
          }}
        >
          <Card.Body>
            <PersonSimpleBike style={{marginTop:".1rem",height:"4rem",width:"4rem"}}  size={32} />
            <Card.Title>TASKS</Card.Title>
            <Card.Text></Card.Text>
            <Button
               style={{ backgroundColor: "#1E1E2E",marginTop:".2rem" }}
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
         className="card-dashboard"
          style={{
            width: "20rem",
              height: "13rem",
            background: "#27293D",
            color: "white",
            // flexWrap:'wrap'
            marginTop:"2rem"
          }}
        >
          <Card.Body>
            <HandWaving style={{marginTop:".1rem",height:"4rem",width:"4rem"}}  size={32} />
            <Card.Title>ATTENDANCE</Card.Title>
            <Card.Text></Card.Text>
            <Button
               style={{ backgroundColor: "#1E1E2E",marginTop:".2rem" }}
              onClick={() => navigate("/company/attendance")}
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
       

        <Card
         className="card-dashboard"
          style={{
            width: "20rem",
            height: "13rem",
            background: "#27293D",
            color: "white",
            // flexWrap:'wrap'
            marginTop:"2rem"
          }}
        >
          <Card.Body>
            <UserSwitch style={{marginTop:".1rem",height:"4rem",width:"4rem"}}  size={32} />
            <Card.Title>LEAVE</Card.Title>
            <Card.Text></Card.Text>
            <Button
               style={{ backgroundColor: "#1E1E2E",marginTop:".2rem" }}
              onClick={() => navigate("/company/viewleave")}
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


        <Card
  
          style={{
            width: "20rem",
              height: "13rem",
            background: "#27293D",
            color: "white",
            // flexWrap:'wrap'
            marginTop:"2rem"
          }}
        >
          <Card.Body>
          <UserSwitch style={{marginTop:".1rem",height:"4rem",width:"4rem"}}  size={32} />
            <Card.Title>Employee Dashboard</Card.Title>
            <Card.Text></Card.Text>
            <Button
               style={{ backgroundColor: "#1E1E2E",marginTop:".2rem" }}
              onClick={() => navigate("/employees/home")}
            >
              More Info
            </Button>
          </Card.Body>
        </Card>
        </div>

      </div>
  </div> </div>
  );
}

export default CompanyMain;
