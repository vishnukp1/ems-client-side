import axios from '../../Autherization/Autherization';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SalaryPaymentForm = () => {
  const [salary, setSalary] = useState(null);
  const [allowances, setAllowances] = useState({
    housingAllowance: null,
    transportAllowance: null,
    mealAllowance: null,
    // Add more allowance options as needed
  });
  const [deductions, setDeductions] = useState({
    taxDeduction: null,
    insuranceDeduction: null,
    loanDeduction: null,
    // Add more deduction options as needed
  });

  const calculateNetSalary = () => {
    const allowanceTotal = Object.values(allowances).reduce((acc, val) => acc + val, 0);
    const deductionTotal = Object.values(deductions).reduce((acc, val) => acc + val, 0);
    return salary + allowanceTotal - deductionTotal;
  };

  const handleSubmit = async () => {
    const paymentData = {
      staffId: '651e311575ec245144df8da1', // Replace with the actual staff member's ID
      salary, // Replace with the salary amount (from your component's state)
      allowances, // Replace with allowances (from your component's state)
      deductions, // Replace with deductions (from your component's state)
      month: 'October', // Replace with the selected month (from your component's state)
      datePaid: new Date('2023-10-16T08:00:00.000Z'), // Replace with the actual payment date (from your component's state)
    };

    console.log(paymentData);
  const id= "651e30a075ec245144df8c75"
    try {
      const response = await axios.post(`/pay-salary/${id}`, paymentData);
      console.log(response.data);
      // Handle success or display a success message
    } catch (error) {
      console.error('Error:', error);
      // Handle error or display an error message
    }
  };
  

  return (
    <div style={{width:"41rem",background:"rgb(249 249 251)",marginLeft:"28rem",paddingLeft:"1rem",marginTop:"7rem"}}> {/* Wrap the form in a div */}
      
      
      <h1>Salary Payment Form</h1>
      <Form style={{width:"12rem"}} >
<h6>Name: </h6>MACHUVA
        <Form.Group controlId="salary">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            value={salary}
            onChange={(e) => setSalary(parseFloat(e.target.value) || 0)}
          />
        </Form.Group>
        <div style={{display:"flex",gap:"2rem"}}>
<div>
        <h2>Allowances</h2>
       
        <Form.Group controlId="housingAllowance">
          <Form.Label>Housing Allowance</Form.Label>
          <Form.Control
            type="number"
            value={allowances.housingAllowance}
            onChange={(e) => setAllowances({ ...allowances, housingAllowance: parseFloat(e.target.value) || 0 })}
          />
        </Form.Group>

        <Form.Group controlId="transportAllowance">
          <Form.Label >Transport Allowance</Form.Label>
          <Form.Control
            type="number"
            value={allowances.transportAllowance}
            onChange={(e) => setAllowances({ ...allowances, transportAllowance: parseFloat(e.target.value) || 0 })}
          />
        </Form.Group>

        <Form.Group controlId="mealAllowance">
          <Form.Label>Meal Allowance</Form.Label>
          <Form.Control
            type="number"
            value={allowances.mealAllowance}
            onChange={(e) => setAllowances({ ...allowances, mealAllowance: parseFloat(e.target.value) || 0 })}
          />
        </Form.Group>
        </div>
        <div style={{border:"1rem"}}>
        {/* Add more allowance fields as needed */}
        
        <h2>Deductions</h2>
        
        <Form.Group controlId="taxDeduction">
          <Form.Label>Tax Deduction</Form.Label>
          <Form.Control
            type="number"
            value={deductions.taxDeduction}
            onChange={(e) => setDeductions({ ...deductions, taxDeduction: parseFloat(e.target.value) || 0 })}
          />
        </Form.Group>

        <Form.Group controlId="insuranceDeduction">
          <Form.Label>Insurance Deduction</Form.Label>
          <Form.Control
            type="number"
            value={deductions.insuranceDeduction}
            onChange={(e) => setDeductions({ ...deductions, insuranceDeduction: parseFloat(e.target.value) || 0 })}
          />
        </Form.Group>

        <Form.Group controlId="loanDeduction">
          <Form.Label>Loan Deduction</Form.Label>
          <Form.Control
            type="number"
            value={deductions.loanDeduction}
            onChange={(e) => setDeductions({ ...deductions, loanDeduction: parseFloat(e.target.value) || 0 })}
          />
        </Form.Group>
        </div>
        </div>
      </Form>
    
      <Form.Group>
        <h2>Net Salary: {calculateNetSalary()}</h2>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
  Submit
</Button>

    </div>
  );
};

export default SalaryPaymentForm;
