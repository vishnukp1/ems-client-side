
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "../../Autherization/Autherization";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";
import { Button } from "react-bootstrap";


import "react-datepicker/dist/react-datepicker.css";
import { MDBCol } from "mdb-react-ui-kit";
import Navbars from "../../component/Navbars";
import { TimePicker } from '@mui/x-date-pickers'
import DatePicker from "react-datepicker";
import ReactSelect from "react-select";
const options = [
  { value: 'Present', label: 'Present' },
  { value: 'Absent', label: 'Absent' },
  { value: 'Late', label: 'Late' },
 
]


function Attendance() {
  const [staff, setStaff] = useState([]);
  const [Newdata, setnewData] = useState({});
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [department, setDepartment] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, handleDateChange] = useState(null);
  console.log(staff);

  

  const getAttendance = async (date) => {
    try {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

     
  
      const response = await axios.get(`/company/attendance/${formattedDate}`);
      const responseData = response.data.data;
      setStaff(responseData);
      console.log("data",responseData);
     
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };
  const searchDepartment = async (key) => {
    console.log(key);
    const response = await axios.get(
      `/company/searchdepartments?department=${key}`
    );
    const responseData = response.data.data;
  
    if (responseData) {
      setStaff(responseData);
    }
  };


  
  
  const searchHandle = async (e) => {
    let key = e.target.value;
    const response = await axios.get(
      `/attendance/name?name=${key}`
    );
    const responseData = response.data;
console.log(responseData);
    
    if (responseData) {
      setStaff(responseData);
    }
  };

  const handleInputChange = async (staffId, field, value) => {
 
    // Find the staff member in the state based on the staffId
  try{
    // Prepare the data to send to the backend
    const attendanceData = {
      staffId,
      TimeIn: field === 'TimeIn' ? new Date(value) : new Date("2023-09-28T09:15:00Z"),
      TimeOut: field === 'TimeOut' ? new Date(value) : new Date("2023-09-28T09:15:00Z"),
      status: field === 'status' ? value.value : "present", // Assuming 'value' is an object with a 'value' property
    };
  
    console.log(attendanceData);
    await axios
        .post(`/company/mark`, attendanceData)
        .then((response) => {
          console.log(response.data);
      
        });
        getAttendance(startDate);
    } catch (error) {
      console.error("Error marking attendance:", error);
    }
  };
  






  
  const deleteAttendance = async (staffId, date) => {
    console.log(date);
    try {
   
      await axios.delete(`/deleteAttendance/${staffId}`, {
        data: { date: date },
      });
  
    
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };
  



  const getDepartment = async () => {
    try {
      const response = await axios.get(
        `/company/department`
      );
      const responseData = response.data.data;
      setDepartment(responseData);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  useEffect(() => {
    getDepartment();
    getAttendance(startDate) 
  }, []);
  
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Navbars />
    <div style={{display:"flex", width:"100vw"}}>
      <Sidebars />
      <div className="col-sm mt-1 me-2"
        style={{
          width: "100%",
          height: "100vh",
          marginLeft: "0rem",
          paddingLeft:"1.3rem",
          backgroundColor: " rgb(233, 238, 247)",
        }}>
        <h2      style={{
           textAlign: "left",
           marginTop: "1.3rem",
           marginBottom: "1.2rem",
           fontFamily: "Arial, sans-serif",
          }}>ATTENDANCE</h2>
 <div style={{flex: 1, height: '2.9px', backgroundColor: '#1B1E36',marginBottom: "21px" ,marginTop:"-14px"}} />
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div  className="sub-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: ".5rem" }}>
              {" "}
              <select
              className="select-custom"
              onChange={(e) => searchDepartment(e.target.value)}
            >
              <option>Select Department</option>
              {department.map((post, index) => (
                
                <option
                  style={{ fontSize: "18px" }}
                  key={index}
                  value={post.title}
                >{post.title}</option>
              ))}
            </select>
            </div>

            <div>
            {" "}
            <MDBCol md="14">
              <div className="active-pink-3 active-pink-4 mb-4 ">
                <input
                className="form-control-pages"
                  type="text"
                  placeholder="Search name"
                  aria-label="Search"
                  onChange={searchHandle}
                />
              </div>
            </MDBCol>
          </div>
          </div>
        </div>
        <div className="table-responsive">
        <Table className="table-text" striped bordered hover size="sm">
          <thead>
            <tr className="table-head">
              <th scope="col" style={{color:"white" }}>No</th>
              <th scope="col" style={{color:"white" }}>Name</th>
              <th scope="col" style={{color:"white" }}>Department</th>
              <th scope="col" style={{color:"white" }}>Time In</th>
              <th scope="col" style={{color:"white" }}>Time Out</th>
              <th scope="col" style={{color:"white" }}>Select</th>
            
            </tr>
          </thead>
          <tbody>
          {staff.map((staff,index) => (
 <tr key={staff._id} className="table-body">
    <td>{index+1}</td>
    <td>{staff.staffName}</td>
    <td>{staff.department}</td> 
    <td style={{ width: "180px" }}>
    <TimePicker
  value={new Date(staff.attendance.TimeIn) || null}
  onChange={(value) => handleInputChange(staff.staffId, 'TimeIn', value)}
  animateYearScrolling
/>
</td>

   <td style={{width:"180px"}}>   <TimePicker
  value={new Date(staff.attendance.TimeOut) || null}
  onChange={(value) => handleInputChange(staff.staffId, 'TimeOut', value)}
  animateYearScrolling
/> </td>
    <td> <ReactSelect
  name="status"
  options={options}
  value={options.find(option => option.value === staff.attendance.status)}
  onChange={(value) => handleInputChange(staff.staffId, 'status', value)}
/></td>
   
  </tr>
))}

          </tbody>
        </Table>
        </div>
        
   
      </div>
   </div></div>
  );
}

export default Attendance;