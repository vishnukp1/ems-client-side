import axios from "../../Autherization/Autherization";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/CreateStaff.css";
import { useDispatch } from "react-redux";
import { setremove } from "../../Reducers/addstaffReducer";
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import TextareaAutosize from 'react-textarea-autosize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const options = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
 
]



function CreateStaff() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [department, setDepartment] = useState([]);
  const [validated, setValidated] = useState(false);


  
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if (menuRef.current && !menuRef.current.contains(e.target)){
  dispatch(setremove())
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  
  const submitButton = async (event) => {
    const form = event.currentTarget;
    setValidated(true);
  
    if (form.checkValidity() === false) {
      event.preventDefault(); 
    
    } else {
      const items = {
        name: formRef.current.name.value,
        phone: formRef.current.phone.value,
        email: formRef.current.email.value,
        imagepath: formRef.current.image.files[0],
        gender: formRef.current.gender.value,
        salary: formRef.current.salary.value,
        department: formRef.current.position.value,
        address: formRef.current.address.value,
      };
  
      await axios
        .post(`/company/createstaff`, items, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => console.log(response.data))
       
      
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
  
      formRef.current.reset();
      toast.success('STAFF CREATED....!')
    
    }
  };
  

  const searchDepartment = async (key) => {
    console.log(key);
  };

  const getDepartment = async () => {
    try {
      const response = await axios.get(
        `/company/department`
      );
      const responseData = response.data.data;
      setDepartment(responseData);
      console.log("department:", responseData);
    } catch (error) {
      console.error("Error fetching department data:", error);
    }
  };

  useEffect(() => {
    getDepartment();
  }, []);

  return(
    <div className="form-taskadd" ref={menuRef}>
  <Form noValidate ref={formRef} validated={validated} onSubmit={submitButton}>
    <h2 style={{ textAlign: "center" }}>Add Staff</h2>
    
    {/* Name */}
    <div className="input-field">
      <Form.Group className="form__label" controlId="validationCustom01">
        <Form.Label>Name</Form.Label>
        <div style={{ display: "flex" }}>
          <Form.Control
           className="input_form"
            required
            type="text"
            placeholder="Name"
            name="name"
          />
        </div>
        <Form.Control.Feedback className="input-feedback" type="invalid">
          Please provide a valid name.
        </Form.Control.Feedback>
      </Form.Group>
    </div>
 

    {/* Phone */}
    <div className="input-field">
      <Form.Group className="form__label" controlId="validationCustom02">
        <Form.Label>Phone</Form.Label>
        <div style={{ display: "flex" }}>
          <Form.Control
           className="input_form"
            required
            type="text"
            placeholder="Phone"
            name="phone"
          />
        </div>
        <Form.Control.Feedback className="input-feedback" type="invalid">
          Please provide a valid phone number.
        </Form.Control.Feedback>
      </Form.Group>
    </div>

    {/* Image */}
    <div className="input-field">
      <Form.Group className="form__label" controlId="validationCustomImage">
        <Form.Label>Image</Form.Label>
        <div className="username" style={{ display: "flex" }}>
          <input
          
            className="input_form"
            type="file"
            id="lastName"
            placeholder="image"
            name="image"
            required
          />
        </div>
        <Form.Control.Feedback className="input-feedback" type="invalid">
          Please choose an image.
        </Form.Control.Feedback>
      </Form.Group>
    </div>

    {/* Email */}
    <div className="input-field">
      <Form.Group className="form__label" controlId="validationCustom03">
        <Form.Label>Email</Form.Label>
        <div style={{ display: "flex" }}>
          <Form.Control
            className="input_form"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <Form.Control.Feedback className="input-feedback" type="invalid">
          Please provide a valid email address.
        </Form.Control.Feedback>
      </Form.Group>
    </div>

    {/* Address */}
    <div className="input-field">
      <Form.Group className="form__label" controlId="validationCustom04">
        <Form.Label>Address</Form.Label>
        <div style={{ display: "flex" }}>
        
             <TextareaAutosize   className="input_form"
                 style={{ backgroundColor: "white",height:"65px",borderRadius:"5px" }}
            type="text"
            placeholder="  Address"
            name="address"
            required />
        </div>
        <Form.Control.Feedback className="input-feedback" type="invalid">
          Please provide a valid address.
        </Form.Control.Feedback>
      </Form.Group>
    </div>
 
    {/* Gender */}
    <div className="input-field">
      <label className="form__label" htmlFor="password">
        Gender
      </label>
      <div style={{width:"49rem"}}>
      <Select name="gender" options={options} />
      </div>
    </div>

    {/* Salary */}
    <div className="input-field">
      <Form.Group className="form__label" controlId="validationCustom05">
        <Form.Label>Salary</Form.Label>
        <div style={{ display: "flex" }}>
          <Form.Control
            className="input_form"
            type="text"
            placeholder="Salary"
            name="salary"
            required
          />
        </div>
        <Form.Control.Feedback className="input-feedback" type="invalid">
          Please provide a valid salary.
        </Form.Control.Feedback>
      </Form.Group>
    </div>

    {/* Department */}
    <div className="input-field">
      <label className="form__label" htmlFor="password">
        Department
      </label>
      <div style={{ display: "flex" }}>
        <select
          className="select-custom-addstaff"
          style={{ backgroundColor: "white",height:"37px" ,border:"0px"}}
          name="position"
          onChange={(e) => searchDepartment(e.target.value)}
        >
          <option name="position" value=""  style={{ fontSize: "18px",textAlign:"center"}}>
            Select Department
          </option>
          {department.map((post, index) => (
            <option
              name="position"
              style={{ fontSize: "22px",textAlign:"center"}}
              key={index}
              value={post.title}
            >
              {post.title}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Submit and Cancel Buttons */}
    <div className="input-field">
      <div className="footer">
        <button className="btn-task" type="submit">
          Add Staff
        </button>
        <button className="btn-task cancel" onClick={() => dispatch(setremove())}>
          Cancel
        </button>
    
      </div>
    </div>
             
    <ToastContainer />
  </Form>
</div>
  );
}

export default CreateStaff;
