import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";
import {
  PersonSimpleBike,
  UsersThree,
  HandWaving,
} from "@phosphor-icons/react";
import StaffNav from "../../component/StaffNav";
import StaffSidebar from "../../component/StaffSidebar";

function StaffDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <StaffNav />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <StaffSidebar/>
      <div
        className="main-container"
        style={{ backgroundColor: "#1E1E2E", display: "flex" }}
      >
        <div
          className="dashboard-div"
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
  <Card
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
              <UsersThree  style={{marginTop:".1rem",height:"4rem",width:"4rem"}} size={32} />
              <Card.Title>Profile</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`/employees/staffprofile`)}
                style={{marginTop:".2rem"}}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>


          <Card
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
              <UsersThree style={{marginTop:".1rem",height:"4rem",width:"4rem"}} size={32} />
              <Card.Title>All Employee</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/employees/viewstaff")}
                style={{marginTop:".2rem"}}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>

          <Card
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
              <PersonSimpleBike style={{marginTop:".1rem",height:"4rem",width:"4rem"}} size={32} />
              <Card.Title>View Task</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/employees/viewtask")}
                style={{marginTop:".2rem"}}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>
          <Card
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
              <HandWaving style={{marginTop:".1rem",height:"4rem",width:"4rem"}} size={32} />
              <Card.Title>Attendance</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/employees/viewattendance")}
                style={{marginTop:".2rem"}}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>
          <Card
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
              <HandWaving style={{marginTop:".1rem",height:"4rem",width:"4rem"}} size={32} />
              <Card.Title>Apply Leave</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/employees/addleave")}
                style={{marginTop:".2rem"}}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
  </div></div>
  );
}

export default StaffDashboard;
