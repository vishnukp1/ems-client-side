import axios from 'axios'
import React, { useRef } from 'react'
import { Form, InputGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function AddPerformance() {
    const formRef = useRef(null)
    const { id } = useParams();
                                                                        
   const submitButton= async (e) => {
      e.preventDefault();

     
  
      const items = {
      
        rating: formRef.current.rating.value,
        month: formRef.current.month.value,
       
      };
  
       await axios.post( `http://localhost:4444/company/performance/:id`,items)
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
            <Form.Label>Rating</Form.Label>
            <Form.Control type="formDate" name="rating" className="form-control" />
        </Form.Group>
       
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Month</Form.Label>
            <Form.Control type="toDate" name="month" className="form-control" />
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

export default AddPerformance;