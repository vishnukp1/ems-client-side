import axios from 'axios';
import React, {  useRef, } from 'react'
import { Button,  } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import  "../styles/company.css"

function CreateStaff() {
  const formRef = useRef(null)
  const navigate = useNavigate()
                                                                      
 const submitButton= async (e) => {
    e.preventDefault();
    
   console.log(formRef.current.salary.value);

    const items = {
    
      name: formRef.current.name.value,
      password: formRef.current.password.value,
      phone: formRef.current.phone.value,
      email: formRef.current.email.value,
      imagepath: formRef.current.image.value,
       gender: formRef.current.gender.value,
      salary: formRef.current.salary.value,
       position: formRef.current.position.value,
       address: formRef.current.address.value,
    };

     await axios.post( `http://localhost:4444/company/createuser`,items)
    .then(response => console.log(response.data))
    .catch(error => {
      console.error("Error fetching customer data:", error);
    
    });
    formRef.current.reset();
  }
  return (
    <div className="form">
    <form ref={formRef} onSubmit={submitButton}>
      <h2 style={{ textAlign: "center" }}>Add Staff</h2>
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="title"
            name="name"
          />
        </div>
        <div className="username">
          <label className="form__label" for="firstName">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="lastName"
            placeholder="image"
            name="password"
          />
        </div>
        <div className="username">
          <label className="form__label" for="firstName">
            Image{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="lastName"
            placeholder="image"
            name="image"
          />
        </div>
        <div className="username">
          <label className="form__label" for="firstName">
            Phone{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="lastName"
            placeholder="price"
            name="phone"
          />
        </div>

        <div className="username">
          <label className="form__label" for="firstName">
            Email{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="lastName"
            placeholder="price"
            name="email"
          />
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Address{" "}
          </label>
          <input id="email" className="form__input" name="address" />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Gender{" "}
          </label>
          <input className="form__input" id="password" name="gender" />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Salary{" "}
          </label>
          <input className="form__input" id="password" name="salary" />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Postion{" "}
          </label>
          <input className="form__input" id="password" name="position" />
        </div>
      </div>
      <div class="footer">
        <Button type="submit" class="btn" >
          Add Product
        </Button>
      </div>
    </form>
  </div>
  )
}

export default CreateStaff