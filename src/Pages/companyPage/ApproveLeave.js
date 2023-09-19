import React, { useEffect, useState } from "react";
import axios from "axios"; // You may need to install axios if not already done
import { useParams } from "react-router-dom";

const ApproveLeave = () => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
    description:"",
  });

  const {leaveid} = useParams()

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const approved= {
            status : "approved"

        }
      // Send the leave application data to your server (POST request)
      const response = await axios.put(`http://localhost:4444/leave/approve/${leaveid}`,approved );
      console.log("Leave application submitted:", response.data);
    } catch (error) {
      console.error("Error submitting leave application:", error);
    }
  };

  const getLeaveData = async () => {
  
    try {
      const response = await axios.get(`http://localhost:4444/leave/${leaveid}`);
      const responseData = response.data;
      console.log(responseData);
      setFormData(responseData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  

  useEffect(() => {
    getLeaveData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
         {Object.keys(formData).map((leave, index) => {

const fromDate = new Date(leave.fromDate);
const toDate = new Date(leave.toDate);


const formattedFromDate = fromDate.toLocaleDateString('en-GB'); 
const formattedToDate = toDate.toLocaleDateString('en-GB'); 

return(
    <div>
      <div>
        <span>From Date:</span>
        <span>{formattedFromDate}</span>
      </div>
      <div>
        <span>To Date:</span>
        <span>{formattedToDate}</span>
      </div>
      <div>
        <span>Reason:</span>
        <span>{formData.reason}</span>
      </div>
      <div>
        <span>Description:</span>
        <span>{formData.description}</span>
      </div>

      </div>
);
})}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ApproveLeave;
