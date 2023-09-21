import { MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/company.css";
import Sidebars from "../../component/Sidebars";
import { useDispatch, useSelector } from "react-redux";
import Navbars from "../../component/Navbars";
import AddUsers from "./AddUsers";
import { addStaff } from "../../Reducers/addstaffReducer";

function Users() {
  const buttonStyle = {
    fontSize: "8px",
    padding: "2px 5px",
    marginLeft: "2px",
    border: "1px solid #343a40",
  };
  const addstaf = useSelector((state) => state.addCompany);

  const dispatch = useDispatch([]);



  const navigate = useNavigate();
  const [Company, setCompany] = useState([]);

  const getCompanyData = async () => {
    try {
      const response = await axios.get(`http://localhost:4444/admin/company`);
      const responseData = response.data.data;

      setCompany(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching Company data:", error);
    }
  };

  const handleDeleteCompany = async (CompanyId) => {
    try {
      await axios.delete(`http://localhost:4444/admin/company/${CompanyId}`);
      getCompanyData();
    } catch (error) {
      console.error("Error deleting Company:", error);
    }
  };

  useEffect(() => {
    getCompanyData();
  }, []);

  const searchHandle = async (e) => {
    let key = e.target.value;
    const response = await axios.get(
      `http://localhost:4444/admin/searchdepartment?name=${key}`
    );
    const responseData = response.data;
    if (responseData) {
      setCompany(responseData);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbars />
      <div style={{ display: "flex", width: "100vw" }}>
        <Sidebars />
        <div
          className="col-sm mt-1 me-2"
          style={{
            width: "100%",
            height: "100vh",
            marginLeft: "1rem",
            backgroundColor: " rgb(233, 238, 247)",
          }}
        >
          <h4
            style={{
              textAlign: "left",
              marginTop: "1.3rem",
              marginBottom: "1.2rem",
              fontFamily: "Arial, sans-serif",
            }}
          >
            EMPLOYEES
          </h4>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: ".5rem" }}>
              {" "}
              
              <Button
                style={{
                  height: "2rem",
                  width: "6rem",
                  fontSize: ".5rem",
                  background: "#14539A",
                  paddingTop:"0.3rem"
                }}
                onClick={() => dispatch(addStaff())}
              >
                Add Company
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
                  <th style={{ width: "5%" }}>#</th>
                  <th style={{ width: "14%" }}>Name</th>

                  <th style={{ width: "14%" }}>Phone</th>
                  <th style={{ width: "22%" }}>Email</th>

                  <th style={{ width: "9%" }}>Actions</th>
                </tr>
              </thead>
              {Company.length > 0 ? (
                <tbody>
                  {Company.map((post, index) => (
                    <tr key={post._id}>
                      <td>{index + 1}</td>
                      <td>{post.name}</td>
                    
           
                      <td>{post.phone}</td>
                      <td>{post.email}</td>
                
                      <td>
                        <div style={{ display: "flex", alignItems: "center" }}>
                    
                          <Button
                            style={buttonStyle}
                            variant="outline-dark"
                            onClick={() => handleDeleteCompany(post._id)}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="outline-dark"
                            style={buttonStyle}
                            onClick={() =>
                              navigate(`/admin/updateuser/${post._id}`)
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
                    <td colSpan="7">No Companys available</td>
                  </tr>
                </tbody>
              )}
            </Table>
          </div>
          {addstaf ? <div className="overlay"><AddUsers /></div> : null}
        </div>
      </div>
    </div>
  );
}

export default Users;
