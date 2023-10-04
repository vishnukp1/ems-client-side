import axios from "axios";
import React, { useRef } from "react";
import { Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../styles/company.css";
import Sidebars from "../../component/Sidebars";
import Navbars from "../../component/Navbars";

function Addemployee() {
  const formRef = useRef(null);
  const { id } = useParams();

  const submitButton = async (e) => {
    e.preventDefault();
    try {
      const items = {
        title: formRef.current.title.value,
        startTime: formRef.current.starttime.value,
        endTime: formRef.current.endtime.value,
        status: formRef.current.status.value,
      };

      const postResponse = await axios.post(
        `http://localhost:4444/company/task/${id}`,
        items
      );
      console.log(postResponse.data);

      formRef.current.reset();
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };
  const resetButton = () => {
    formRef.current.reset();
  };

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Navbars />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <Sidebars />
      <div class="add-task-section">
        <form
          className="container mt-3 mb-3"
          ref={formRef}
          onSubmit={submitButton}
        >
          <h2 style={{marginBottom:"2rem",fontFamily:'serif',fontSize:"40px",color:"black"}}>Add Task</h2>
          <div style={{display:"flex", flexDirection:"column"}}>
         
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
<div style={{display:"flex",width:"62vh",justifyContent:"space-between"}}>
<Form.Label style={{fontFamily:"sans-serif",fontSize:"23px",color:"black" ,marginBottom:"1rem"}}>Task Title</Form.Label>
              <Form.Control
                type="title"
                name="title"
                className="form-control"
                style={{  maxWidth: '16.5rem' }}
              />
              </div>
            </Form.Group>
            
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
           <div style={{display:"flex",width:"62vh",justifyContent:"space-between"}}>
              <Form.Label style={{fontFamily:"sans-serif",fontSize:"23px",color:"black" ,marginBottom:"1rem"}}>Start Time</Form.Label>
              <Form.Control
                type="starttime"
                name="starttime"
                placeholder="DD/MM/YYYY"
                className="form-control"
                style={{  maxWidth: '16.5rem' }}
              />
                </div>
            </Form.Group>
        
      
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
           <div style={{display:"flex",width:"62vh",justifyContent:"space-between"}}>
           <Form.Label style={{fontFamily:"sans-serif",fontSize:"23px",color:"black" ,marginBottom:"1rem"}}>End Time</Form.Label>
              <Form.Control
                type="endtime"
                name="endtime"
                className="form-control"
                placeholder="DD/MM/YYYY"
                style={{  maxWidth: '16.5rem' }}
              />
                </div>
            </Form.Group>
          
            <Form.Group controlId="formBasicEmail" className="col col-sm-6">
           <div style={{display:"flex",width:"62vh",justifyContent:"space-between"}}>
           <Form.Label style={{fontFamily:"sans-serif",fontSize:"23px",color:"black" ,marginBottom:"1rem"}}>Status</Form.Label>
              <Form.Control
                type="status"
                name="status"
                className="form-control"
                style={{  maxWidth: '16.5rem' }}
              />
                </div>
            </Form.Group>
       
          </div>
          <Row className="mb-3">
            <Form.Group
              controlId="formGridCheckbox"
              className="col col-sm-5"
              style={{ marginLeft: "8.5rem",marginTop:".8rem" }}
            >
              <button type="submit" className="btn-task me-4  btn-lg btn-block">
                Submit
              </button>
              <button
                type="reset"
                onClick={resetButton}
                className="btn-task me-4   btn-lg btn-block"
              >
                Cancel
              </button>
            </Form.Group>
          </Row>
        </form>
      </div>
 </div> 
 </div>
  );
}
 
export default Addemployee;
