import { MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";

function Leave() {
  const navigate = useNavigate();
  const [leave, setLeave] = useState([]);
  const { staffId, leaveId } = useParams();
  const daysInMonth = 30; // Change this to 31 or adjust for different months
  const tableHeaders = ['Number', 'Name', ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  // Sample data (you can replace this with your own data)
  const data = [
    { number: 1, name: 'Person 1', days: Array.from({ length: daysInMonth }, (_, i) => i + 1) },
    { number: 2, name: 'Person 2', days: Array.from({ length: daysInMonth }, (_, i) => i + 1) },
    // Add more data rows as needed
  ];
  useEffect(() => {
    const fetchleaveDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4444/company/leave`);
        const leaveData = response.data;
        setLeave(leaveData.leave);
        console.log(leaveData.leave);
      } catch (error) {
        console.error("Error fetching leave details:", error);
      }
    };

    fetchleaveDetails();
  }, [staffId, leaveId]);

  const getStaffData = async () => {
    try {
      const response = await axios.get(`http://localhost:4444/company/leave`);
      const responseData = response.data;
      setLeave(responseData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    getStaffData();
  }, []);
  return (
    <>
    <Sidebars />
    <div className="App " style={{ width: "100%", height: "100vh" }}>
      <h2>Leave Management</h2>
      <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: ".5rem" }}>
            {" "}
          
            <select  className="select-custom"  >
  <option>Select Department</option>
  
</select>

            <Button
              style={{
                height: "2rem",
                width: "6rem",
                fontSize: ".5rem",
                background: "#14539A",
              }}
            
            >
              Add Staff
            </Button>
          </div>

          <div>
            {" "}
            <MDBCol md="14">
              <div className="active-pink-3 active-pink-4 mb-4 ">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
              
                />
              </div>
            </MDBCol>
          </div>
        
      </div>
      <Table className="table-text" striped bordered hover size="sm">
     
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row.number}</td>
            <td>{row.name}</td>
            {row.days.map((day, dayIndex) => (
              <td key={dayIndex}>{day}</td>
            ))}
          </tr>
        ))}
      </tbody>
   

      </Table>
    </div>
    </>
  );
}

export default Leave;
