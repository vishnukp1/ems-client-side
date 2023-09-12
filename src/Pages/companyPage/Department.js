import { MDBCol } from 'mdb-react-ui-kit';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Dropdown, Table } from 'react-bootstrap';
import Sidebars from '../../component/Sidebars';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/company.css"

function Department() {
    const navigate = useNavigate();
    const formRef = useRef()
    const buttonStyle = {
      fontSize: "8px",
      padding: "2px 5px",
      marginLeft: "2px",
      border: "1px solid #343a40",
    };
    const [task, setTasks] = useState([]);

 const addDepartment = async (e) =>{
    e.preventDefault();
    try{
    const dprtment = formRef.current.department.value
    const department ={
        title:dprtment
    }
    console.log(dprtment);
    const response=await axios.post(`http://localhost:4444/company/createdprt`,department)
    console.log(response.data);
  
}
  catch(error) {
    console.error("Error fetching customer data:", error);
  
  };
}
    
  
    const getDepartment = async () => {
       
      try {
        const response = await axios.get(
          `http://localhost:4444/company/department`
        );
        const responseData = response.data;
  
        setTasks(responseData)
        console.log(responseData.de);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };
    const deleteTask = async (taskId) => {
      try {
        await axios.delete(`http://localhost:4444/company/department/${taskId}`);
        
        getDepartment();
      } catch (error) {
        console.error('Error deleting staff:', error);
      }
    };
  
    useEffect(() => {
      getDepartment();
    }, []);
  
 
  
    return (
      <>
        <Sidebars />
      <div className="form" style={{ width: "100%", height: "100vh" ,marginTop:"0px"}}>
      <h4 style={{textAlign:"left",marginTop:"1.3rem",marginBottom:"1.2rem",fontFamily:"Arial, sans-serif"}}>STAFF TASK </h4>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "15px",
          }}
        >
          <div style={{display:'flex',gap:".5rem"}}> 
          <form ref={formRef} onSubmit={addDepartment}>
      
          <input className="form-control" type="text"  name='department'/>

<Button type="submit">Add</Button>
          </form>
          </div>
         
        </div>
        <Table className="table-text" striped bordered hover size="sm" >
          <thead className='table-head'>
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th style={{ width: "14%" }}>Departments</th>
            
              <th style={{ width: "10%" }}>Actions</th>
              
            </tr>
          </thead>
          {task.length > 0 ? (
            <tbody>
              {task.map((post, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{post.title}</td>
                 
                 
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      
                      <Button variant="outline-dark" onClick={()=>deleteTask(post._id)} style={buttonStyle}>
                        Delete
                      </Button>
                     
                    </div>
                  </td>
                </tr>
              ))}
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
      </>
  )
}

export default Department