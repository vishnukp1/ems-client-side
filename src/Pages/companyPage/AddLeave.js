import axios from 'axios'
import React, { useRef } from 'react'
import { Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function Addleave() {
    const formRef = useRef(null)
    const { id } = useParams();
                                                                        
   const submitButton= async (e) => {
      e.preventDefault();

      const items = {
      
        fromDate: formRef.current.formDate.value,
        toDate: formRef.current.toDate.value,
        reason: formRef.current.reason.value,
        status: formRef.current.status.value,
        
      };
  
       await axios.post( `http://localhost:4444/company/task/${id}`,items)
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
            <Form.Label>Task formDate</Form.Label>
            <Form.Control type="formDate" name="formDate" className="form-control" />
        </Form.Group>
       
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Start time</Form.Label>
            <Form.Control type="toDate" name="toDate" className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>End time</Form.Label>
            <Form.Control type="reason" name="reason"className="form-control" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Status</Form.Label>
            <Form.Control type="status" name="status" className="form-control" />
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

export default Addleave