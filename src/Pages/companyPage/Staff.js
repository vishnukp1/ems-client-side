
import { MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/company.css";
import Sidebars from "../../component/Sidebars";
import { useDispatch, useSelector } from "react-redux";
import CreateStaff from "./CreateStaff";
import { addStaff, setremove } from "../../Reducers/addstaffReducer";
import Navbars from "../../component/Navbars";

function Staff() {
  const buttonStyle = {
    fontSize: "8px",
    padding: "2px 5px",
    marginLeft: "2px",
    border: "1px solid #343a40",
  };
  const addstaf = useSelector((state) => state.addstaff);

  const dispatch = useDispatch([]);

  const [department, setDepartment] = useState([]);

  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);



  const getStaffData = async () => {
    try {
      const response = await axios.get(`http://localhost:4444/company/staff`);
      const responseData = response.data.data;

      setStaff(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };

  const handleDeleteStaff = async (staffId) => {
    try {
      await axios.delete(`http://localhost:4444/company/staff/${staffId}`);
      getStaffData();
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  useEffect(() => {
    getDepartment();
    getStaffData();
  }, [addstaf]);

  const searchHandle = async (e) => {
    let key = e.target.value;
    const response = await axios.get(
      `http://localhost:4444/company/search?name=${key}`
    );
    const responseData = response.data;
    if (responseData) {
      setStaff(responseData);
    }
  };

  const searchDepartment = async (key) => {
    console.log(key);
    const response = await axios.get(
      `http://localhost:4444/company/searchdepartment?department=${key}`
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
        `http://localhost:4444/company/department`
      );
      const responseData = response.data.data;
      setDepartment(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Navbars />
    <div style={{display:"flex", width:"100vw"}}>
      <Sidebars />
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
        <h3
          style={{
            textAlign: "left",
            marginTop: "1.3rem",
            marginBottom: "1.2rem",
            fontFamily: "Arial, sans-serif",
          }}
        >
          EMPLOYEES
        </h3>

        <div
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
            <Button
              style={{
                height: "2rem",
                width: "6rem",
                fontSize: ".5rem",
                background: "#14539A",
              }}
              onClick={() => dispatch(addStaff())}
            >
              Add Staff
            </Button>
          </div>

          <div>
            {" "}
            <MDBCol md="14">
              <div className="active-pink-3 active-pink-4 mb-4 ">
                <input
                  className="form-control"
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
                <th style={{ width: "3%" }}>#</th>
                <th style={{ width: "14%" }}>Name</th>
                <th style={{ width: "8%" }}>Photo</th>
                <th style={{ width: "12%" }}>Department</th>
                <th style={{ width: "6%" }}>Gender</th>
                <th style={{ width: "14%" }}>Phone</th>
                <th style={{ width: "14%" }}>Email</th>
                <th style={{ width: "8%" }}>Salary</th>
                <th style={{ width: "18%" }}>Address</th>
                <th style={{ width: "18%" }}>Actions</th>
              </tr>
            </thead>
            {staff.length > 0 ? (
              <tbody style={{fontSize:"17px"}}>
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
                    <td>{post.department[0]?.title}</td>
                    <td>{post.gender}</td>
                    <td>{post.phone}</td>
                    <td>{post.email}</td>
                    <td>{post.salary}</td>
                    <td>{post.address}</td>
                    <td style={{ display: "flex", alignItems: "center" ,fontSize:"17px" }}> 
                      <div >
                        <Button
                          variant="outline-dark"
                          style={buttonStyle}
                          onClick={() =>
                            navigate(`/company/addtask/${post._id}`)
                          }
                        >
                          addtask
                        </Button>
                        <Button
                          style={buttonStyle}
                          variant="outline-dark"
                          onClick={() => handleDeleteStaff(post._id)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="outline-dark"
                          style={buttonStyle}
                          onClick={() =>
                            navigate(`/company/updatestaff/${post._id}`)
                          }
                        >
                          Update
                        </Button>
                      </div>
                    </td>
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
          <div className="overlay"  >
            <CreateStaff />
          </div>
        ) : null}
      </div>
  </div> 
  </div>
  );
}

export default Staff;
