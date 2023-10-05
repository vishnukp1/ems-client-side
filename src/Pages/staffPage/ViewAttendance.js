import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "../../Autherization/Autherization";
import "../../styles/company.css";
import "react-datepicker/dist/react-datepicker.css";
import { MDBCol } from "mdb-react-ui-kit";
import DatePicker from "react-datepicker";
import StaffNav from "../../component/StaffNav";
import StaffSidebar from "../../component/StaffSidebar";

function ViewAttendance() {
  const [staff, setStaff] = useState([]);
  const [department, setDepartment] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const getAttendance = async (date) => {
    try {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      console.log("get date", formattedDate);

      const response = await axios.get(`/company/attendance/${formattedDate}`);
      const responseData = response.data.data;
      setStaff(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };
  const searchDepartment = async (key) => {
    console.log(key);
    const response = await axios.get(
      `/company/searchdepartments?department=${key}`
    );
    const responseData = response.data.data;

    if (responseData) {
      setStaff(responseData);
    }
  };

  const searchHandle = async (e) => {
    let key = e.target.value;
    const response = await axios.get(`/attendance/name?name=${key}`);
    const responseData = response.data.data;
    console.log(responseData);

    if (responseData) {
      setStaff(responseData);
    }
  };

  const getDepartment = async () => {
    try {
      const response = await axios.get(`/company/department`);
      const responseData = response.data.data;
      setDepartment(responseData);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  // When updating the state in handleInputChange, also store in local storage
  useEffect(() => {
    // Check for and set data from local storage
    const storedAttendanceData = localStorage.getItem(
      `attendance_${staff._id}`
    );
    if (storedAttendanceData) {
      const parsedData = JSON.parse(storedAttendanceData);
      // Update the state with parsedData
      setStaff(parsedData);
    }

    getDepartment();
    getAttendance(startDate);
  }, []);

  useEffect(() => {
    getDepartment();
    getAttendance(startDate);
  }, [startDate]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <StaffNav />
      <div style={{ display: "flex", width: "100vw" }}>
        <StaffSidebar />
        <div
          className="col-sm mt-1 me-2"
          style={{
            width: "100%",
            height: "100vh",
            marginLeft: "0rem",
            paddingLeft: "1.3rem",
            backgroundColor: " rgb(233, 238, 247)",
          }}
        >
          <h2
            style={{
              textAlign: "left",
              marginTop: "1.3rem",
              marginBottom: "1.2rem",
              fontFamily: "Arial, sans-serif",
            }}
          >
            ATTENDANCE
          </h2>
          <div
            style={{
              flex: 1,
              height: "2.9px",
              backgroundColor: "#1B1E36",
              marginBottom: "21px",
              marginTop: "-14px",
            }}
          />
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
              className="sub-container"
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
                      style={{ fontSize: "18px" }}
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
                      className="form-control-pages"
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
          <div className="table-responsive">
            <Table className="table-text" striped bordered hover size="sm">
              <thead>
                <tr className="table-head">
                  <th scope="col" style={{ color: "white" }}>
                    No
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                    Name
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                    Department
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                    Time In
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                    Time Out
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                 Status
                  </th>
                </tr>
              </thead>

              <tbody>
              {staff.map((staff, index) => {
  if (staff.attendance.length > 0) {
    const fromDate = new Date(staff.attendance[0]?.TimeIn);
    const toDate = new Date(staff.attendance[0]?.TimeOut);

    const formattedTimeIn = fromDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const formattedTimeOut = toDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    return (
      <tr key={staff._id} className="table-body">
        <td>{index + 1}</td>
        <td>{staff.name}</td>
        <td>{staff.department}</td>
        <td style={{ width: "180px" }}>{formattedTimeIn}</td>
        <td style={{ width: "180px" }}>{formattedTimeOut}</td>
        <td>{staff.attendance[0]?.status}</td>
      </tr>
    );
  }
  return null; // Return null for staff with no attendance
})}

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAttendance;
