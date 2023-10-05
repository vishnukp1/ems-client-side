import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { Button } from "react-bootstrap";
import { MDBCol } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "../../Autherization/Autherization";
import "../../styles/company.css";
import Sidebars from "../../component/Sidebars";
import Navbars from "../../component/Navbars";

function Task() {
  const navigate = useNavigate();
  const buttonStyle = {
    fontSize: "8px",
    padding: "2px 5px",
    marginLeft: "2px",
    border: "1px solid #343a40",
  };
  const [task, setTasks] = useState([]);
  console.log(task);

  const [department, setDepartment] = useState([]);

  console.log("fhjfdfd",task)
  const getStaffTasks = async () => {
    try {
      const response = await axios.get(
        `/company/staff`
      );
      const responseData = response.data.data;

      setTasks(responseData);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };
  const deleteTask = async (staffId, taskId) => {
    try {
      await axios.delete(`/${staffId}/tasks/${taskId}`);

      getStaffTasks();
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  useEffect(() => {
    getStaffTasks();
  }, []);

  const searchHandle = async (e) => {
    let key = e.target.value;
    const response = await axios.get(
      `/company/search?name=${key}`
    );
    const responseData = response.data;
    console.log(responseData);
    if (responseData) {
      setTasks(responseData);
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
      setTasks(responseData);
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
  }, []);

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Navbars />
    <div style={{display:"flex", width:"100vw"}}>
      <Sidebars />
      <div
        className="form"
        style={{ width: "100%", height: "100vh",marginTop:"0rem" }}
      >
       <h2
          style={{
            textAlign: "left",
            marginTop: ".3rem",
            marginBottom: "1.2rem",
            fontFamily: "Arial, sans-serif",
          }}
        >
        TASKS
        </h2>
       
        <div style={{flex: 1, height: '2.9px', backgroundColor: '#1B1E36',marginBottom: "21px" ,marginTop:"-14px"}} />
        <div  className="sub-container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "15px",
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
                  value={post._id}
               
                >{post.title}</option>
              ))}
            </select>
          </div>
          <div>
            {" "}
            <MDBCol md="12">
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
        <Table className="table-text"  striped bordered hover size="sm">
          <thead className="table-head">
            <tr className="table-head">
              <th style={{ width: "5%" ,color:"white" }}>#</th>
              <th style={{ width: "14%" ,color:"white" }}>Task Title</th>
              <th style={{ width: "14%",color:"white"  }}>Assigned to</th>
              <th style={{ width: "10%" ,color:"white" }}>Start time</th>
              <th style={{ width: "10%" ,color:"white" }}>End time</th>
              <th style={{ width: "14%",color:"white"  }}>Status</th>
              <th style={{ width: "4.6%",color:"white"  }}>Actions</th>
            </tr>
          </thead>
          {task.length > 0 ? (
            <tbody className="table-body">
              {task.map((post, index) =>{
                 if (post.tasks.length > 0) {
      const fromDate = new Date(post.tasks[0]?.startTime);
      const toDate = new Date(post.tasks[0]?.endTime);
      
      const formattedStartTime = fromDate.toLocaleDateString('en-GB'); // Format: "dd/mm/yyyy"
      const formattedEndTime = toDate.toLocaleDateString('en-GB');     // Format: "dd/mm/yyyy"
      
               return (
                
                <tr key={index} >
                  <td>{index + 1}</td>
                  <td>{post.tasks[0]?.title}</td>
                  <td>{post.name}</td>
                  <td>{formattedStartTime}</td>
                  <td>{formattedEndTime}</td>
                  <td>{post.tasks[0]?.status}</td>
                  <td>
                    <div style={{ display: "flex", marginLeft:"8px" }}>
                     
                      <Button
                        variant="outline-dark"
                        style={buttonStyle}
                        onClick={() =>
                          navigate(
                            `/company/updatetask/${post._id}/${post.tasks[0]?._id}`
                          )
                        }
                      >
                        Update
                      </Button>
                      <Button
                        variant="outline-dark"
                        onClick={() => deleteTask(post._id, post.tasks[0]?._id)}
                        style={buttonStyle}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
               );
              }
              <td colSpan="7">No tasks available</td>
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="7">No tasks available</td>
              </tr>
            </tbody>
          )}
        </Table>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Task;
