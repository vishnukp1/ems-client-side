import { useEffect, useState } from "react";
import React from "react"
import axios from "../../Autherization/Autherization";
import { Button, Table } from "react-bootstrap";
import StaffNav from "../../component/StaffNav";
import StaffSidebar from "../../component/StaffSidebar";
import { useDispatch, useSelector } from "react-redux";
import { requestLeave } from "../../Reducers/addstaffReducer";
import  ApplyLeave  from "../staffPage/ApplyLeave";

function Notification() {
    const [leave, setLeave] = useState([]);
    const applyLeave = useSelector((state) => state.addstaff);
    const dispatch = useDispatch([]);

    console.log(leave);

    console.log("apply",applyLeave);

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


 
      <Button
                style={{
                  height: "2rem",
                  width: "7rem",
                  fontSize: "10px",
                  background: "#14539A",
                }}
                onClick={() => dispatch(requestLeave())}
              >
                Add Staff
              </Button>
  
   
      
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
    {applyLeave ? (
            <div className="overlay">
              <ApplyLeave />
            </div>
          ) : null}
</div>
</div>
  )
}

export default Notification