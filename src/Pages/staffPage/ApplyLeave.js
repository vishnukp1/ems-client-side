import axios from 'axios'
import React, { useRef } from 'react'
import { Form,  Row } from 'react-bootstrap'
import StaffNav from '../../component/StaffNav'
import StaffSidebar from '../../component/StaffSidebar'
import "../../styles/company.css";

function Addemployee() {
    const formRef = useRef(null)
   
                                                                        
   const submitButton= async (e) => {
      e.preventDefault();

      const id = localStorage.getItem("userid");

     

      const items = {
      
        reason: formRef.current.reason.value,
        fromDate: formRef.current.from.value,
        toDate: formRef.current.to.value,
        description: formRef.current.description.value,
 
        
      };

      
  
       await axios.post( `http://localhost:4444/applyleave/${id}`,items)
      .then(response => console.log(response.data))
      .catch(error => {
        console.error("Error fetching customer data:", error);
      
      });
    
  
      formRef.current.reset();
    }

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <StaffNav />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <StaffSidebar />
     <div class="add-employee-section" style={{marginLeft:"15rem",marginTop:"7rem",fontSize:"18px"}}>
  <form className="container mt-3 mb-3" style={{backgroundColor:"#E4E6F8"}} ref={formRef} onSubmit={submitButton}>
    <h3     style={{
            textAlign: "center",
            marginTop: "1.3rem",
            marginBottom: "1.2rem",
            fontFamily: "Arial, sans-serif",
            paddingTop:"1.5rem"
          }}>APPLY LEAVE</h3>
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Reason</Form.Label>
            <Form.Control type="title" name="reason" className="form-control" />
        </Form.Group>
       
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>From</Form.Label>
            <Form.Control type="starttime" name="from" className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>To</Form.Label>
            <Form.Control type="endtime" name="to"className="form-control" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Description</Form.Label><br></br>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
        </Form.Group>
        
    </Row>

 
    <Row className="mb-3" >
        <Form.Group style={{marginLeft:"13rem",marginBottom:"1.2rem",width:"14rem"}} controlId="formGridCheckbox" className="col col-sm-6">
            <button type="submit" className="apply-btn me-4 btn   btn-block">Submit</button>
            <button type="reset" onClick="{resetButton}" className="apply-btn me-4 btn  btn-block">Cancel</button>
        </Form.Group>
    </Row>

</form>
    </div>
    </div> </div>
  )
}

export default Addemployee