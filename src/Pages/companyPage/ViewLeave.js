import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "../../Autherization/Autherization";
import Sidebars from "../../component/Sidebars";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbars from "../../component/Navbars";

function ViewLeave() {
  const [startDate, setStartDate] = useState(new Date());
  const [leave, setLeave] = useState([]);

  console.log("leave",leave);

  const buttonStyle = {
    fontSize: "8px",
    padding: "2px 5px",
    marginLeft: "2px",
    border: "1px solid #343a40",
    textAlign:"center"
  };

  const getLeaveData = async (date) => {

    try {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
    
      console.log(formattedDate);
    
      const response = await axios.get(`/leaves/${formattedDate}`);
      setLeave(response.data.data );
    } catch (error) {
      console.error("Error fetching leave data:", error);
      setLeave([]); 
    }
  }
    
  const approveLeave = async (leaveid) => {
    try {
      const approved = {
        status: "approved",
      };
      const response = await axios.put(`/leave/approve/${leaveid}`, approved);
      console.log( response.data.data);
      getLeaveData(startDate); 
    } catch (error) {
      console.error("Error submitting leave application:", error);
    }
  };

  useEffect(() => {
    getLeaveData(startDate); 
  }, [startDate]);
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Navbars />
    <div style={{display:"flex", width:"100vw"}}>
      <Sidebars />
    <div
      className="form"
      style={{ width: "100rem", height: "100vh", marginTop: "0px" }}
    >
      <h3
        style={{
          textAlign: "left",
          marginTop: "1.3rem",
          marginBottom: "1.2rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        VIEW LEAVE{" "}
      </h3>

  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
 
 
  
  <div className="table-responsive">
      
      <Table className="table-text" striped bordered hover size="sm">
    
        <thead>
          <tr className="table-head">
            <th style={{color:"white" }}>From Date</th>
            <th style={{color:"white" }}>To Date</th>
            <th style={{color:"white" }}>Reason</th>
            <th style={{color:"white" }}>Status</th>
            <th style={{color:"white" }}>Apply On</th>
            <th style={{color:"white" }}>Actions</th>
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
    <tr key={index} className="table-body">
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
    </div>
</div>
</div>
  );
}

export default ViewLeave;
