import { MDBCol } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Table } from 'react-bootstrap'
import Sidebars from '../../component/Sidebars'
import Navbars from '../../component/Navbars'
import axios from "../../Autherization/Autherization";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import DatePicker from "react-datepicker";

function Salary() {
  const buttonStyle = {
    fontSize: "10px",
    padding: "2px 5px",
    marginLeft: "2px",
    border: "1px solid #343a40",
  };
 


  const dispatch = useDispatch([]);
  const [startDate, setStartDate] = useState(new Date());

  const [dataChanged, setDataChanged] = useState(false);

  const [department, setDepartment] = useState([]);
  const [page, setPage] = useState(1)

  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);

  // http://localhost:4444

  const getStaffData = async () => {
    try {
      const response = await axios.get(`http://localhost:4444/company/staffPage?page=${page}`);
      const responseData = response.data.data;
console.log(page);
      setStaff(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };

  const handleDeleteStaff = async (staffId) => {
    try {
      await axios.delete(`/company/staff/${staffId}`);
      getStaffData();
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  useEffect(() => {
    getDepartment();
    getStaffData();
  }, [page]);

  const searchHandle = async (e) => {
    let key = e.target.value;
    const response = await axios.get(`/company/search?name=${key}`);
    const responseData = response.data;
    console.log(responseData);
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
      const response = await axios.get(`/company/department`);
      const responseData = response.data.data;
      console.log(responseData);
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
     <div style={{
            width: "100%",
            height: "100vh",
            paddingLeft: "1rem",
            backgroundColor: " rgb(233, 238, 247)",
            paddingRight: "1rem",
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
            SALARY
          </h2>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
       
          <div
            className="sub-container"
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
                  >
                    {post.title}
                  </option>
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
                  <th style={{ width: "3%", color: "white" }}>#</th>
                  <th style={{ width: "14%", color: "white" }}>Name</th>
                  <th style={{ width: "8%", color: "white" }}>Photo</th>
                  <th style={{ width: "18%", color: "white" }}>Salary Per Month</th>
                  <th style={{ width: "6%", color: "white" }}>Allowance</th>
                  <th style={{ width: "14%", color: "white" }}>Deduction</th>
                  <th style={{ width: "14%", color: "white" }}>Net Salary</th>
                  <th style={{ width: "14%", color: "white" }}>Actions</th>
                </tr>
              </thead>
              {staff.length > 0 ? (
                <tbody className="table-body">
                  {staff.map((post, index) => (
                    <tr key={post._id} style={{}}>
                      <td>{index + 1}</td>
                      <td>{post.name}</td>
                      <td>
                        <img
                          style={{
                            height: "55px",
                            width: "55px",
                            objectFit: "cover",
                          }}
                          src={post.imagepath}
                          alt="User"
                        />
                      </td>
                      <td>{post.department?.title}</td>
                      <td>{post.gender}</td>
                      <td>{post.phone}</td>
                      <td>5000</td>
                    
                      <td style={{ fontSize: "17px" }}>
                        <div style={{ display: "flex" }}>
                       
                        <Button
                            style={buttonStyle}
                            variant="outline-dark"
                            onClick={() =>navigate("/company/salary-payment") }
                          >
                            Submit
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
            <PaginationControl
    page={page}
    between={4}
    total={250}
    limit={20}
    changePage={(page) => {
      setPage(page)
    }}
    ellipsis={1}
  />
          </div>
          
        
     </div>
     </div>
     </div>
  )
}

export default Salary