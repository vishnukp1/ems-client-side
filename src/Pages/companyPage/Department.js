import React, { useEffect, useRef, useState } from 'react'
import { Button,  Table } from 'react-bootstrap';
import Sidebars from '../../component/Sidebars';
import axios from 'axios';

import "../../styles/company.css"
import Navbars from '../../component/Navbars';

function Department() {
  
    const formRef = useRef()
    const buttonStyle = {
      fontSize: "8px",
      padding: "2px 5px",
      marginLeft: "2px",
      border: "1px solid #343a40",
    };
    const [department, setDepartment] = useState([]);

 const addDepartment = async (e) =>{
    e.preventDefault();
    try{
    const dprtment = formRef.current.department.value
    const deprtment ={
        title:dprtment
    }
    console.log(dprtment);
    
    const response=await axios.post(`http://localhost:4444/company/createdprt`,deprtment)
    console.log(response.data);
    getDepartment()
  
}
  catch(error) {
    console.error("Error fetching customer data:", error);
  
  };
  formRef.current.reset()
}
    
  
    const getDepartment = async () => {
       
      try {
        const response = await axios.get(
          `http://localhost:4444/company/department`
        );
        const responseData = response.data.data;
  
        setDepartment(responseData)
        console.log(responseData);
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
      <div style={{display:'flex', flexDirection:'column'}}>
      <Navbars />
      <div style={{display:"flex", width:"100vw",height:"100vh"}}>
        <Sidebars />
      <div className="form" style={{ width: "100%", height: "100vh" ,marginTop:"0px"}}>
      <h3 style={{textAlign:"left",marginTop:"1.3rem",marginBottom:"1.2rem",fontFamily:"Arial, sans-serif"}}>DEPARTMENTS</h3>
        <div
        className='department-div'
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "15px",
          }}
        >
          <div >
          <div  style={{display:'flex',gap:".5rem"}}> 
          <form ref={formRef} onSubmit={addDepartment}>
          <div  style={{display:'flex',gap:".5rem"}}> 
      <div>
          <input className="form-control" type="text"  name='department'/>
          </div>
          <div>
<Button style={{height:"32px",marginBottom:"22px",background:"#14539A",paddingTop:"8px"}} type="submit">Add</Button>
</div>
</div>
          </form>
          </div>
         
        </div>
        <Table className="department-table-text" striped bordered hover size="sm" >
          <thead className='table-head'>
            <tr>
              <th style={{ width: "10%" }}>#</th>
              <th style={{ width: "55%" }}>Departments</th>
            
              <th style={{ width: "10%" }}>Actions</th>
              
            </tr>
          </thead>
          {department.length > 0 ? (
            <tbody>
              {department.map((post, index) => (
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
      </div>
      </div> </div>
  )
}

export default Department