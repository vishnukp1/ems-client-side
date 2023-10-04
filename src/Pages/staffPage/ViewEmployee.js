import { MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import axios from "../../Autherization/Autherization";
import "../../styles/company.css";


import CreateStaff from "./../companyPage/CreateStaff";

import StaffSidebar from "../../component/StaffSidebar";
import StaffNav from "../../component/StaffNav";
import { useSelector } from "react-redux";

function ViewEmployee() {

  const addstaf = useSelector((state) => state.addstaff);


  const [department, setDepartment] = useState([]);

 
  const [staff, setStaff] = useState([]);

  const getStaffData = async () => {
    try {
      const response = await axios.get(`/company/staff`);
      const responseData = response.data.data;

      setStaff(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };



  useEffect(() => {
    getDepartment();
    getStaffData();
  }, [addstaf]);

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

  const searchDepartment = async (key) => {
    console.log(key);
    const response = await axios.get(
      `/company/searchdepartment?department=${key}`
    );
    const responseData = response.data.data;
    console.log(responseData);
    if (responseData) {
      setStaff(responseData);
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

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <StaffNav />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <StaffSidebar/>
     
<div
   
        className="col-sm mt-1 me-2"
        style={{
          width: "100%",
          height: "100vh",
          paddingLeft:"1rem",
          backgroundColor: " rgb(233, 238, 247)",
          paddingRight:"1rem",
        }}
      >
        <h2
          style={{
            textAlign: "left",
            marginTop: "1.3rem",
            marginBottom: "1.2rem",
            fontFamily: "Arial, sans-serif",
          }}
        >
         EMPLOYEES
        </h2>
       
        <div style={{flex: 1, height: '2.9px', backgroundColor: '#1B1E36',marginBottom: "21px" ,marginTop:"-14px"}} />

        <div className="sub-container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: ".5rem" }}>
        
            <select
              className="select-custom"
              onChange={(e) => searchDepartment(e.target.value)}
            >
              <option>Select Department</option>
              {department.map((post, index) => (
                
                <option
                  style={{ fontSize: "18px" }}
                  key={index}
                  value={post._id}
               
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
                  placeholder="Search"
                  aria-label="Search"
                  onChange={searchHandle}
                />
              </div>
            </MDBCol>
          </div>
        </div>
        <div className="table-responsive">
          <Table className="table-text" striped bordered hover size="sm">
            <thead>
              <tr className="table-head">
              <th style={{ width: "3%",color:"white" }}>#</th>
                <th style={{ width: "14%",color:"white"  }}>Name</th>
                <th style={{ width: "8%" ,color:"white"  }}>Photo</th>
                <th style={{ width: "12%" ,color:"white" }}>Department</th>
                <th style={{ width: "6%" ,color:"white"  }}>Gender</th>
                <th style={{ width: "14%",color:"white"  }}>Phone</th>
                <th style={{ width: "14%" ,color:"white" }}>Email</th>
                <th style={{ width: "8%"  ,color:"white" }}>Salary</th>
                <th style={{ width: "18%",color:"white"  }}>Address</th>
              
              </tr>
            </thead>
            {staff.length > 0 ? (
              <tbody>
                {staff.map((post, index) => (
                  <tr key={post._id}>
                    <td>{index + 1}</td>
                    <td>{post.name}</td>
                    <td>
                      <img
                        style={{ height: "55px", width: "55px" }}
                        src={post.imagepath}
                        alt="User"
                      />
                    </td>
               <td>{post.department.title || ''}</td>
                    <td>{post.gender}</td>
                    <td>{post.phone}</td>
                    <td>{post.email}</td>
                    <td>{post.salary}</td>
                    <td>{post.address}</td>
                  
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan="7">No staffs available</td>
                </tr>
              </tbody>
            )}
          </Table>
        </div>
        {addstaf ? (
          <div className="overlay">
            <CreateStaff />
          </div>
        ) : null}
      </div>
    </div></div>
  );
}

export default ViewEmployee;
