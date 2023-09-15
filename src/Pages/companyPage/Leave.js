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
          <tr className="table-head">
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "15%" }}>Staff</th>
            <th style={{ width: "10%" }}>Photo</th>
            <th style={{ width: "10%" }}>Department</th>
            <th style={{ width: "10%" }}>Reason</th>
            <th style={{ width: "10%" }}>From</th>
            <th style={{ width: "10%" }}>To</th>
            <th style={{ width: "10%" }}>Status</th>
            <th style={{ width: "30%" }}>Description</th>
            <th style={{ width: "10%" }}>Applied On</th>
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
          </tr>
          {/* Repeat rows for more data */}
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default Leave;
