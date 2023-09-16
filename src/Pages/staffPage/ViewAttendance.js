import { MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";
import { Button } from "react-bootstrap";

function Attendance() {
  const [staff, setStaff] = useState([]);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [department, setDepartment] = useState([]);
  console.log(selectedStaff);

  const getStaffData = async () => {
    try {
      const response = await axios.get(`http://localhost:4444/company/staff`);
      const responseData = response.data.data;
      setStaff(responseData);
     
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };
  const searchHandle = async (e) => {
    let key = e.target.value;
    const response = await axios.get(
      `http://localhost:4444/company/search?name=${key}`
    );
    const responseData = response.data;
    if (responseData) {
      setStaff(responseData);
    }
  };

  useEffect(() => {
    getStaffData();
    getDepartment()
  }, []);

  const markAttendance = async (e) => {
    e.preventDefault();

    try {
      const data = {
        selectedStaff: selectedStaff,
        status: "Present",
      };

      await axios
        .post(`http://localhost:4444/company/mark`, data)
        .then((response) => {
          console.log(response.data);
          setAttendanceMarked(true); 
          getStaffData()
        });
    } catch (error) {
      console.error("Error marking attendance:", error);
    

    
  
    }

  
    setSelectedStaff([]);
  };

  
 

  const searchDepartment = async (key) => {
    console.log(key);
    const response = await axios.get(
      `http://localhost:4444/company/searchdepartment?department=${key}`
    );
    const responseData = response.data;
    if (responseData) {
      setStaff(responseData);
    }
  };

  const getDepartment = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4444/company/department`
      );
      const responseData = response.data.data;
      setDepartment(responseData);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };
  return (
    <>
      <Sidebars />
      <div className="col-sm mt-1 me-2"
        style={{
          width: "100%",
          height: "100vh",
          marginLeft: "1rem",
          backgroundColor: " rgb(233, 238, 247)",
        }}>
        <h2>ATTENDANCE</h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: ".5rem" }}>
              {" "}
              <select
              className="select-custom"
              onChange={(e) => searchDepartment(e.target.value)}
            >
              <option>Select Department</option>
              {department.map((post, index) => (
                <option
                  style={{ fontSize: "18px", textAlign: "start" }}
                  key={index}
                  value={post.title}
                >
                  {post.title}
                </option>
              ))}
            </select>
            </div>

            <div>
            {" "}
            <MDBCol md="14">
              <div className="active-pink-3 active-pink-4 mb-4 ">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search name"
                  aria-label="Search"
                  onChange={searchHandle}
                />
              </div>
            </MDBCol>
          </div>
          </div>
        </div>
        <Table className="table-text" striped bordered hover size="sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Status</th>
           
            </tr>
          </thead>
          <tbody>
            {staff.map((staff) => (
              <tr key={staff.id}>
                <td>{staff._id}</td>
                <td>{staff.name}</td>
                <td>{staff.department}</td>
                <td>
                  {staff.attendance.length > 0
                    ? staff.attendance[0].status
                    : "-"}
                </td>
              
              </tr>
            ))}
         
          </tbody>
        </Table>
        {selectedStaff.length > 0 ? (
        <Button     style={{
          height: "2rem",
          width: "6rem",
          fontSize: ".6rem",
          background: "#14539A",
          paddingTop:"2px"
        }}  onClick={markAttendance}>Add Attendance</Button>
      ) : (
        <p>Select staff members to add attendance.</p>
      )}
      {attendanceMarked && <p>Attendance has been marked for selected staff.</p>}
      </div>
    </>
  );
}

export default Attendance;
