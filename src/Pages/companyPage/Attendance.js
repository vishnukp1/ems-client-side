import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "../../Autherization/Autherization";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";

import "react-datepicker/dist/react-datepicker.css";
import { MDBCol } from "mdb-react-ui-kit";
import Navbars from "../../component/Navbars";
import { TimePicker } from "@mui/x-date-pickers";
import DatePicker from "react-datepicker";
import ReactSelect from "react-select";
const options = [
  { value: "Present", label: "Present" },
  { value: "Absent", label: "Absent" },
  { value: "Late", label: "Late" },
  { value: "Halfday", label: "Halfday" },
];

function Attendance() {
  const buttonStyle = {
    fontSize: '17px',
    padding: '3px 7px',
marginTop:"2REM",
    border: 'solid #6bb7fa',
    backgroundColor: '#6bb7fa',
    borderRadius: '4px',
    width:"5rem",
    marginLeft:"-2rem"
};


  const [staff, setStaff] = useState([]);
  const [department, setDepartment] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const [dataChanged, setDataChanged] = useState(false);

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
  const handleInputChange = (staffId, field, value) => {
    try {
      const updatedStaff = staff.map((staffMember) => {
        if (staffMember._id === staffId) {
          const attendanceArray = staffMember.attendance || [];
          const updatedAttendance = attendanceArray[0] || {};
  
          if (field === "TimeIn") {
            updatedAttendance.TimeIn = new Date(value);
          } else if (field === "TimeOut") {
            updatedAttendance.TimeOut = new Date(value);
          } else if (field === "status") {
            updatedAttendance.status = value.value;
        
            if (value.value === "Absent") {
              updatedAttendance.TimeIn = null;
              updatedAttendance.TimeOut = null;
            }
          }
  
          return {
            ...staffMember,
            attendance: [updatedAttendance],
          };
        }
  
        return staffMember;
      });
  
      setStaff(updatedStaff);
      setDataChanged(true);
    } catch (error) {
      console.error("Error updating attendance:", error);
    }
  };
  

  const handleSubmit = async () => {
    try {
      if (!dataChanged) {
        return;
      }

      console.log("Submitting attendance data...");

      const attendanceDataArray = staff
        .map((staffMember) => {
          if (staffMember) {
            return {
              staffId: staffMember._id,
              date: startDate.toISOString(),
              TimeIn: staffMember.attendance[0]?.TimeIn,
              TimeOut: staffMember.attendance[0]?.TimeOut,
              status: staffMember.attendance[0]?.status,
            };
          }
          return null;
        })
        .filter((data) => data !== null);

      console.log(attendanceDataArray);

      const response = await axios.post(`/company/mark`, attendanceDataArray);

      setStaff(response.data.data);
      setDataChanged(false);
      getAttendance(startDate);

      console.log("Attendance data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting attendance:", error);
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

  useEffect(() => {
    const storedAttendanceData = localStorage.getItem(
      `attendance_${staff._id}`
    );
    if (storedAttendanceData) {
      const parsedData = JSON.parse(storedAttendanceData);

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
      <Navbars />
      <div style={{ display: "flex", width: "100vw" }}>
        <Sidebars />
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
                  <th scope="col" style={{ color: "white" ,width:"3rem" }}>
                    No
                  </th>
                  <th scope="col" style={{ color: "white" ,width:"18rem" }}>
                    Name
                  </th>
                  <th scope="col" style={{ color: "white",width:"18rem" }}>
                    Department
                  </th>
                  <th scope="col" style={{ color: "white" ,width:"11rem"  }}>
                    Time In
                  </th>
                  <th scope="col" style={{ color: "white"  ,width:"11rem" }}>
                    Time Out
                  </th>
                  <th scope="col" style={{ color: "white" ,width:"22px"}}>
                    Select
                  </th>
                </tr>
              </thead>
              {staff.length > 0 ? (
              <tbody>
                {staff.map((staff, index) => (
                  <tr key={staff._id} className="table-body">
                    <td>{index + 1}</td>
                    <td>{staff.name}</td>
                    <td>{staff.department}</td>
                    <td style={{ width: "180px" }}>
                      <TimePicker
                        className="TimerPicker"
                        value={
                          staff.attendance && staff.attendance[0]
                            ? new Date(staff.attendance[0].TimeIn)
                            : null
                        }
                        onChange={(value) =>
                          handleInputChange(
                            staff._id,
                            "TimeIn",
                            value,
                            startDate
                          )
                        }
                        animateYearScrolling
                      />
                    </td>
                    <td style={{ width: "180px" }}>
                      <TimePicker
                        value={
                          staff.attendance && staff.attendance[0]
                            ? new Date(staff.attendance[0].TimeOut)
                            : null
                        }
                        onChange={(value) =>
                          handleInputChange(
                            staff._id,
                            "TimeOut",
                            value,
                            startDate
                          )
                        }
                        animateYearScrolling
                      />
                    </td>
                    <td>
                      <ReactSelect
                        name="status"
                        options={options}
                        className="react-select"
                       
                        value={
                          staff.attendance && staff.attendance[0]
                            ? options.find(
                                (option) =>
                                  option.value === staff.attendance[0].status
                              )
                            : null
                        }
                        onChange={(value) =>
                          handleInputChange(
                            staff._id,
                            "status",
                            value,
                            startDate
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
               ) : (
                <tbody>
                  <tr>
                    <td colSpan="7">No staffs available</td>
                  </tr>
                </tbody>
              )}
            </Table>
          </div>
          <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
        </div>
      
      </div>
    </div>
  );
}

export default Attendance;
