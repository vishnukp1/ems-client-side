import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function MonthAttendance() {
  const [staff, setStaff] = useState([]);
  const [monthlyAttendance, setMonthlyAttendance] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date()); // Default to the current month

  useEffect(() => {
    getStaffData();
  }, []);

  const getStaffData = async () => {
    try {
      // Fetch staff data as before
      const response = await axios.get(`http://localhost:4444/company/staff`);
      const responseData = response.data.data;
      setStaff(responseData);

      // Fetch monthly attendance data for the selected month
      const year = selectedMonth.getFullYear();
      const month = selectedMonth.getMonth() + 1; // Months are zero-indexed
      const responseMonthly = await axios.get(`http://localhost:4444/company/monthly-attendance/${year}/${month}`);
      const monthlyData = responseMonthly.data.data;
      setMonthlyAttendance(monthlyData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to calculate daily totals for "Present" status
  const calculateDailyTotals = () => {
    const totals = Array(31).fill(0); // Assuming a month has 31 days
    monthlyAttendance.forEach((record) => {
      const day = new Date(record.date).getDate();
      if (record.status === "Present") {
        totals[day - 1]++; // Subtract 1 because array index starts from 0
      }
    });
    return totals;
  };

  return (
    <div>
      {/* Month selection */}
      <select value={selectedMonth.getMonth()} onChange={(e) => setSelectedMonth(new Date(selectedMonth.setMonth(e.target.value)))}>
        <option value={0}>January</option>
        <option value={1}>February</option>
        {/* Add more months */}
      </select>

      {/* Table to display daily totals */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Daily Total Present</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 31 }, (_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{calculateDailyTotals()[index]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MonthAttendance;
