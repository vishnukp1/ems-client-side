
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "../../Autherization/Autherization";
import Sidebars from "../../component/Sidebars";
import "../../styles/company.css";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MDBCol } from "mdb-react-ui-kit";
import Navbars from "../../component/Navbars";


function Attendance() {
  const [staff, setStaff] = useState([]);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [department, setDepartment] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
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
    console.log(responseData);
    if (responseData) {
      setStaff(responseData);
    }
  };


  const getAttendanceDay = async (date) => {
    try {
    
      const response = await axios.get(`/company/attendance`);
      const responseData = response.data.data;
      setStaff(responseData);
      console.log("today attendance",responseData);
     
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };
  const searchHandle = async (e) => {
    let key = e.target.value;
    const response = await axios.get(
      `/company/search?name=${key}`
    );
    const responseData = response.data;

    
    if (responseData) {
      setStaff(responseData);
    }
  };




  useEffect(() => {
    getAttendance(startDate);
    getDepartment()
  }, [startDate]);

  useEffect(() => {
    getAttendance();

  }, [staff]);

  useEffect(() => {

getAttendanceDay()
  }, []);


  const markAttendance = async (e) => {
    e.preventDefault();

    try {
      const data = {
        selectedStaff: selectedStaff,
        status: "Present",
      };

      await axios
        .post(`/company/mark`, data)
        .then((response) => {
          console.log(response.data);
          setAttendanceMarked(true); 
          getAttendance(startDate);
        });
    } catch (error) {
      console.error("Error marking attendance:", error);
    

    
  
    }

  
    setSelectedStaff([]);
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
  
  const handleCheckboxChange = (staffId) => {
    setSelectedStaff((prevSelectedStaff) =>
      prevSelectedStaff.includes(staffId)
        ? prevSelectedStaff.filter((id) => id !== staffId)
        : [...prevSelectedStaff, staffId]
    );
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

        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
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
                  className="form-control"
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
        <Table className="table-text" striped bordered hover size="sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Status</th>
              <th scope="col">Select</th>
            
            </tr>
          </thead>
          <tbody>
            {staff.map((staff) => (
              <tr key={staff._id}>
                <td>{staff.staffId}</td>
                <td>{staff.staffName}</td>
                
                <td>{staff.department}</td>
                <td>
                  {staff.attendance ? staff.attendance.status : "N/A"}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedStaff.includes(staff.staffId)}
                    onChange={() => handleCheckboxChange(staff.staffId)}
                  />
                </td>
            
              </tr>
            ))}
         
          </tbody>
        </Table>
        {selectedStaff.length > 0 ? (
        <Button     style={{
          height: "2rem",
          width: "6rem",
          fontSize: ".6rem",
          background: "#14539A",
          paddingTop:"2px"
        }}  onClick={markAttendance}>Add Attendance</Button>
      ) : (
        <p>Select staff members to add attendance.</p>
      )}
      {attendanceMarked && <p>Attendance has been marked for selected staff.</p>}
      </div>
   </div></div>
  );
}

export default Attendance;