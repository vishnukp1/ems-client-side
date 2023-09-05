import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function MarkAttendance() {
  const [staffList, setStaffList] = useState([]);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState([]);

  useEffect(() => {
    // Simulate fetching staff data from your backend API
    // Replace this with your actual API endpoint
    // In this example, we're using a mock staff list
    const mockStaffList = [
      { id: 1, name: 'John Doe', department: 'HR' },
      { id: 2, name: 'Jane Smith', department: 'Finance' },
      { id: 3, name: 'Bob Johnson', department: 'IT' },
      // Add more staff members as needed
    ];

    setStaffList(mockStaffList);
  }, []);

  const markAttendance = () => {
    // Implement your attendance marking logic here for selected staff
    // You can make an API request to mark attendance for selected staff members
    // After marking attendance, you can update the state or show a success message
    console.log('Attendance marked for selected staff:', selectedStaff);
    // Reset the selected staff array
    setSelectedStaff([]);
  };

  const handleCheckboxChange = (staffId) => {
    // Toggle the selected staff based on checkbox state
    setSelectedStaff((prevSelectedStaff) =>
      prevSelectedStaff.includes(staffId)
        ? prevSelectedStaff.filter((id) => id !== staffId)
        : [...prevSelectedStaff, staffId]
    );
  };

  return (
    <div className="App">
      <h1>Staff Attendance Management</h1>
      <MDBTable bordered borderColor="primary">
        <MDBTableHead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Department</th>
            <th scope='col'>Select</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {staffList.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.department}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedStaff.includes(staff.id)}
                  onChange={() => handleCheckboxChange(staff.id)}
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
      <input type='file' name='image'></input>
    </div>
  );
}

export default MarkAttendance;
