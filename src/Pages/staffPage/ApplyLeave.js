import axios from "../../Autherization/Autherization";
import React, { useRef } from "react";
import { Form, Row } from "react-bootstrap";
import StaffNav from "../../component/StaffNav";
import StaffSidebar from "../../component/StaffSidebar";
import "../../styles/company.css";
import { useEffect, useState } from "react";


import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RemoveLeave } from "../../Reducers/addstaffReducer";



function Addemployee() {
  const formRef = useRef(null);
  const [leave, setLeave] = useState([]);
  const removeLeave = useSelector((state) => state.addstaff);
  const dispatch = useDispatch([]);

  console.log(leave);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if (menuRef.current && !menuRef.current.contains(e.target)){
  dispatch(RemoveLeave())
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  const getLeaveData = async () => {

      try {
      
          const id = localStorage.getItem("userid");
      
        const response = await axios.get(`/approvedleave/${id}`);
        setLeave(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching leave data:", error);
        setLeave([]); 
      }
    }

    
useEffect(() => {
  getLeaveData();
}, []);

  const submitButton = async (e) => {
    e.preventDefault();

    const id = localStorage.getItem("userid");

    const items = {
      reason: formRef.current.reason.value,
      fromDate: formRef.current.from.value,
      toDate: formRef.current.to.value,
      description: formRef.current.description.value,
    };

    await axios
      .post(`/applyleave/${id}`, items)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });

    formRef.current.reset();
  };

  return (
  
        <div
          class="add-employee-section"
          style={{ marginLeft: "15rem", marginTop: "7rem", fontSize: "18px" }}
          ref={menuRef}
        >
          <form
            className="container mt-3 mb-3"
            style={{ backgroundColor: "#E4E6F8" }}
            ref={formRef}
            onSubmit={submitButton}
          >
            <h3
              style={{
                textAlign: "center",
                marginTop: "1.3rem",
                marginBottom: "1.2rem",
                fontFamily: "Arial, sans-serif",
                paddingTop: "1.5rem",
              }}
            >
              APPLY LEAVE
            </h3>
            <Row className="mb-3">
              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <Form.Label>Reason</Form.Label>
                <Form.Control
                  type="title"
                  name="reason"
                  className="form-control"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="starttime"
                  name="from"
                  className="form-control"
                  placeholder="YYYY-MM-DD"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="endtime"
                  name="to"
                  className="form-control"
                  placeholder="YYYY-MM-DD"
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                name="description"
                className="col col-sm-6"
              >
                <Form.Label>Description</Form.Label>
                <br></br>
                <textarea
                  class="form-control"
                  name="description"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                style={{
                  marginLeft: "13rem",
                  marginBottom: "1.2rem",
                  width: "14rem",
                }}
                controlId="formGridCheckbox"
                className="col col-sm-6"
              >
                <button
                  type="submit"
                  className="apply-btn me-4 btn   btn-block"
                >
                  Submit
                </button>
                <button
                  type="reset"
              
                  className="apply-btn me-4 btn  btn-block"
                  onClick={() => dispatch(RemoveLeave())}
                >
                  Cancel
                </button>
              </Form.Group>
            </Row>
          </form>
    
         
     
    </div>
  
  );
}

export default Addemployee;
