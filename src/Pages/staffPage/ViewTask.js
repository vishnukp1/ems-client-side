import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";

import axios from "../../Autherization/Autherization";
import "../../styles/company.css";

import StaffNav from "../../component/StaffNav";
import StaffSidebar from "../../component/StaffSidebar";

function ViewTask() {
  const [task, setTasks] = useState([]);

  const getStaffTasks = async () => {
    try {
      const staffId = localStorage.getItem("userid");
      const response = await axios.get(`/employee/task/${staffId}`);
      const responseData = response.data;

      setTasks(responseData.tasks);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    getStaffTasks();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <StaffNav />
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <StaffSidebar />
        <div
          className="form"
          style={{ width: "100rem", height: "100vh", marginTop: "0px" }}
        >
          <h4
            style={{
              textAlign: "left",
              marginTop: "1.3rem",
              marginBottom: "1.2rem",
              fontFamily: "Arial, sans-serif",
            }}
          >
            STAFF TASK{" "}
          </h4>
          <div
            className="sub-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "15px",
            }}
          >
            <div> </div>
          </div>
          <Table className="table-text" striped bordered hover size="sm">
            <thead className="table-head">
              <tr>
              <th style={{ width: "5%" ,color:"white" }}>#</th>
              <th style={{ width: "14%" ,color:"white" }}>Task Title</th>
              <th style={{ width: "10%" ,color:"white" }}>Start time</th>
              <th style={{ width: "10%" ,color:"white" }}>End time</th>
              <th style={{ width: "14%",color:"white"  }}>Status</th>
              </tr>
            </thead>
            {task.length > 0 ? (
              <tbody>
                {task.map((post, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{post.title}</td>
                    <td>{post.startTime}</td>
                    <td>{post.endTime}</td>
                    <td>{post.status}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="7">No tasks available</td>
                </tr>
              </tbody>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ViewTask;
