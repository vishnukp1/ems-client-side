import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function MarkAttendance() {
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
        status: "Present"
      };

      await axios.post(`http://localhost:4444/company/mark`, data)
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
    <div className="App">
      <h1>Staff Attendance</h1>
      <MDBTable bordered borderColor="primary">
        <MDBTableHead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Department</th>
            <th scope='col'>Status</th>
            <th scope='col'>Select</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {staffList.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.department}</td>
              <td>{staff.attendance.length > 0 ? staff.attendance[0].status : '-'}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedStaff.includes(staff._id)}
                  onChange={() => handleCheckboxChange(staff._id)}
                />
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      {selectedStaff.length > 0 ? (
        <button onClick={markAttendance}>Add Attendance for Selected</button>
      ) : (
        <p>Select staff members to add attendance.</p>
      )}
      {attendanceMarked && <p>Attendance has been marked for selected staff.</p>}
    </div>
  );
}

export default MarkAttendance;
