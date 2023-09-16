import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";
import {
  PersonSimpleBike,
  UsersThree,
  UserSwitch,
  HandWaving,
} from "@phosphor-icons/react";

function StaffDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Sidebars />
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
              width: "14rem",
              height: "10rem",
              background: "#27293D",
              color: "white",
              //  flexWrap:'wrap'
            }}
          >
            <Card.Body>
              <UsersThree size={32} />
              <Card.Title>All Employee</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/employees/viewstaff")}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "14rem",
              height: "10rem",
              background: "#27293D",
              color: "white",
              //  flexWrap:'wrap'
            }}
          >
            <Card.Body>
              <PersonSimpleBike size={32} />
              <Card.Title>View Task</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/employees/viewtask")}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "14rem",
              height: "10rem",
              background: "#27293D",
              color: "white",
              //  flexWrap:'wrap'
            }}
          >
            <Card.Body>
              <HandWaving size={32} />
              <Card.Title>Attendance</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate("/employees/viewattendance")}
              >
                More Info
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default StaffDashboard;
