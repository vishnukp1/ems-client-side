import { useEffect, useState } from "react";
import React from "react"
import axios from "../../Autherization/Autherization";
import { Table } from "react-bootstrap";
import StaffNav from "../../component/StaffNav";
import StaffSidebar from "../../component/StaffSidebar";

function Notification() {
    const [leave, setLeave] = useState([]);

    console.log(leave);

    const getLeaveData = async () => {

        try {
        
            const id = localStorage.getItem("userid");
        
          const response = await axios.get(`/approvedleave/${id}`);
          setLeave(response.data.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching leave data:", error);
          setLeave([]); 
        }
      }

      
  useEffect(() => {
    getLeaveData();
  }, []);


  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <StaffNav/>
    <div style={{display:"flex", width:"100vw"}}>
      <StaffSidebar />
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
      > NOTIFICATION
      </h3>


 
 
  
   
      
      <Table className="table-text" striped bordered hover size="sm">
    
       
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
      
    <h6>Approved Leave :</h6>
      <td style={{textAlign:"left"}}>Your leave approved for the reason {leave.reason} form {formattedFromDate} to {formattedToDate} and applied on {formattedApplyON}</td>

      <td>
        
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
  )
}

export default Notification