import { MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";
import { Button } from "react-bootstrap";

function Attendance() {
  const [staffList, setStaffList] = useState([]);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState([]);

  const getStaffData = async () => {
    try {
      const response = await axios.get(`http://localhost:4444/company/staff`);
      const responseData = response.data.data;

      setStaffList(responseData);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };

  useEffect(() => {
    getStaffData();
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
          setAttendanceMarked(true); // Set attendanceMarked to true on success
        });
    } catch (error) {
      console.error("Error marking attendance:", error);
    }

    // Reset selectedStaff after marking attendance
    setSelectedStaff([]);
  };

  const handleCheckboxChange = (staffId) => {
    setSelectedStaff((prevSelectedStaff) =>
      prevSelectedStaff.includes(staffId)
        ? prevSelectedStaff.filter((id) => id !== staffId)
        : [...prevSelectedStaff, staffId]
    );
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
        <h2>Attendance Management</h2>
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
              <select className="select-custom">
                <option>Select Department</option>
              </select>
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
        </div>
        <Table className="table-text" striped bordered hover size="sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Status</th>
              <th scope="col">Select</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id}>
                <td>{staff._id}</td>
                <td>{staff.name}</td>
                <td>{staff.department}</td>
                <td>
                  {staff.attendance.length > 0
                    ? staff.attendance[0].status
                    : "-"}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedStaff.includes(staff._id)}
                    onChange={() => handleCheckboxChange(staff._id)}
                  />
                </td>
              </tr>
            ))}
            {/* Repeat rows for more data */}
          </tbody>
        </Table>
        {selectedStaff.length > 0 ? (
        <Button     style={{
          height: "2rem",
          width: "6rem",
          fontSize: ".5rem",
          background: "#14539A",
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
