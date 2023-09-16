import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios if not already done (npm install axios)

function UpdateAttendance() {
  const [staffId, setStaffId] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  

  const handleUpdateAttendance = async () => {
    try {
      const response = await axios.put(`/updateAttendance/${staffId}`, {
        date,
        status,
      });

      if (response.status === 200) {
        setMessage('Attendance updated successfully');
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Error updating attendance');
      }
    }
  };

  return (
    <div>
      <h2>Update Attendance</h2>
      <div>
        <label>
          Staff ID:
          <input
            type="text"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdateAttendance}>Update Attendance</button>
      <p>{message}</p>
    </div>
  );
}

export default UpdateAttendance;
