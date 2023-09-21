import { MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StaffNav from "../../component/StaffNav";
import StaffSidebar from "../../component/StaffSidebar";

function ViewAttendance() {
  const [staff, setStaff] = useState([]);

  const [department, setDepartment] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  console.log(staff);

  const getStaffData = async (date) => {
    try {
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

      const response = await axios.get(
        `http://localhost:4444/company/attendance/${formattedDate}`
      );
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
    getStaffData(startDate);
  }, [startDate]);

  useEffect(() => {
    getStaffData();
    getDepartment();
  }, []);

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
    <div style={{display:'flex', flexDirection:'column'}}>
    <StaffNav />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <StaffSidebar/>
      <div
        className="col-sm mt-1 me-2"
        style={{
          width: "100%",
          height: "100vh",
          marginLeft: "1rem",
          backgroundColor: " rgb(233, 238, 247)",
        }}
      >
        <h2>ATTENDANCE</h2>

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
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
              <tr key={staff._id}>
                <td>{staff.staffId}</td>
                <td>{staff.staffName}</td>

                <td>{staff.department}</td>
                <td>{staff.attendance ? staff.attendance.status : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
   </div></div>
  );
}

export default ViewAttendance;
