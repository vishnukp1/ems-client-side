import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Sidebars from "../../component/Sidebars";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ViewLeave() {
  const [startDate, setStartDate] = useState(new Date());
  const [leave, setLeave] = useState([]);

  console.log("leave",leave);

  const buttonStyle = {
    fontSize: "8px",
    padding: "2px 5px",
    marginLeft: "2px",
    border: "1px solid #343a40",
  };

  const getLeaveData = async (date) => {

    try {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

      
console.log(formattedDate)
      

     
      await axios.get(`http://localhost:4444/leaves/${formattedDate}`)
      .then((response) => setLeave(response.data.data))
     
      .catch((error) => {
        console.error("Error fetching customer data:", error);
        setLeave([])
      });
    } catch (error) {
      console.error("Error fetching leave data:", error);
    }
  };

  const approveLeave = async (leaveid) => {
    try {
      const approved = {
        status: "approved",
      };
      const response = await axios.put(`http://localhost:4444/leave/approve/${leaveid}`, approved);
      console.log("Leave application submitted:", response.data);
      getLeaveData(startDate); 
    } catch (error) {
      console.error("Error submitting leave application:", error);
    }
  };

  useEffect(() => {
    getLeaveData(startDate); 
  }, [startDate]);
  return (
    <>
    <Sidebars />
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

  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
 
 
  
   
      
      <Table className="table-text" striped bordered hover size="sm">
    
        <thead>
          <tr>
            <th>From Date</th>
            <th>To Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Description</th>
            <th>Apply On</th>
          </tr>
        </thead>
        {leave.length > 0 ?(
        <tbody>
    {leave.map((leave, index) => {

const fromDate = new Date(leave.fromDate);
const toDate = new Date(leave.toDate);
const ApplyOn = new Date(leave.applyOn)

const formattedFromDate = fromDate.toLocaleDateString('en-GB'); // Format: "dd/mm/yyyy"
const formattedToDate = toDate.toLocaleDateString('en-GB'); 
const formattedApplyON = ApplyOn.toLocaleDateString('en-GB'); 

  return (
    <tr key={index}>
      <td>{formattedFromDate}</td>
      <td>{formattedToDate}</td>
      <td>{leave.reason}</td>
      <td>{leave.status}</td>
      <td>{leave.description}</td>
      <td>{formattedApplyON}</td>
      <td>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="outline-dark"
            style={buttonStyle}
            onClick={()=>approveLeave(leave._id)}
          >
            Approve
          </Button>
        </div>
      </td>
    </tr>
  );
})}

          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="7">No leave application</td>
            </tr>
          </tbody>
        )}
      </Table>
    </div>
  </>
  );
}

export default ViewLeave;
