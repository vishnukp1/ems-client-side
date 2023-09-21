import axios from 'axios'
import React, { useRef } from 'react'
import { Form,  Row } from 'react-bootstrap'

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
     <div class="add-employee-section">
  <form className="container mt-3 mb-3" ref={formRef} onSubmit={submitButton}>
    
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
            <Form.Label>Description</Form.Label>
            <Form.Control type="status" name="description" className="form-control" />
        </Form.Group>
        
    </Row>

 
    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button type="submit" className="me-4 btn btn-success btn-lg btn-block">Submit</button>
            <button type="reset" onClick="{resetButton}" className="me-4 btn btn-danger btn-lg btn-block">Cancel</button>
        </Form.Group>
    </Row>

</form>
    </div>
  )
}

export default Addemployee