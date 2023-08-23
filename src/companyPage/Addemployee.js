import React from 'react'
import { Form, InputGroup, Row } from 'react-bootstrap'

function Addemployee() {
  return (
     <div className="add-employee-section">
  <form className="container mt-3 mb-3">
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" name="first_name" value="{form.first_name}" onChange="{handleChange}" className="form-control" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" name="last_name" value="{form.last_name}" onChange="{handleChange}" className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formBasicMobile" className="col col-sm-6">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                <Form.Control aria-label="Mobile Number" type="mobile" aria-describedby="basic-addon1" className="form-control" name="mobile" value="{form.mobile}" onChange="{handleChange}" />
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Email</Form.Label>
            <InputGroup>
                <Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" type="email" name="email" value="{form.email}" onChange="{handleChange}" />
                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control className="form-control" type="text" name="address1" value="{form.address1}" onChange="{handleChange}" />
        </Form.Group>
        <Form.Group className="col col-sm-6" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control className="form-control" name="address2" value="{form.address2}" onChange="{handleChange}" type="text" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCity" className="col col-sm-4">
            <Form.Label>City</Form.Label>
            <Form.Control className="form-control" type="text" name="city" value="{form.city}" onChange="{handleChange}" />
        </Form.Group>
        <Form.Group controlId="formGridState" className="col col-sm-4">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="a_state" value="{form.a_state}" onChange="{handleChange}">
                <option value="Choose...">Choose...</option>
                <option value="Delhi">Delhi</option>
                <option value="Bombay">Bommbay</option>
                <option value="New York">New York</option>
                <option value="Kashmir">Kashmir</option>
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGridpin" className="col col-sm-4">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control className="form-control" type="pin" name="pin" value="{form.pin}" onChange="{handleChange}" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <Form.Label>Menu</Form.Label>
            <Form.Select defaultValue="Choose..." className="form-control" name="menu" value="{form.menu}" onChange="{handleChange}">
                <option value="Choose...">Choose...</option>
                <option value="Veg Biryani">Veg Biryani</option>
                <option value="BBQ Chicken Wings">BBQ Chicken Wings</option>
                <option value="Rasmalai">Rasmalai</option>
                <option value="Beer">Beer</option>
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGridlabel" className="col col-sm-6">
            <Form.Label>Order Details</Form.Label>
            <Form.Control as="textarea" rows="{3}" className="form-control" name="order" value="{form.order}" onChange="{handleChange}" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button type="submit" onClick="{submitButton}" className="me-4 btn btn-success btn-lg btn-block">Submit</button>
            <button type="reset" onClick="{resetButton}" className="me-4 btn btn-danger btn-lg btn-block">Cancel</button>
        </Form.Group>
    </Row>
</form>
    </div>
  )
}

export default Addemployee