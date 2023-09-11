import axios from 'axios';
import React, {  useRef, } from 'react'
import  "../../styles/company.css"
import { useDispatch } from 'react-redux';
import { setremove } from '../../Reducers/addstaffReducer';

function CreateStaff() {
  const formRef = useRef(null)
 
  const dispatch = useDispatch()
                                                                      
 const submitButton= async (e) => {
    e.preventDefault();
    
   console.log(formRef.current.salary.value);

    const items = {
    
      name: formRef.current.name.value,
      password: formRef.current.password.value,
      phone: formRef.current.phone.value,
      email: formRef.current.email.value,
      imagepath: formRef.current.image.files[0],
       gender: formRef.current.gender.value,
      salary: formRef.current.salary.value,
       position: formRef.current.position.value,
       address: formRef.current.address.value,
    };

     await axios.post( `http://localhost:4444/company/createstaff`,items, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }} )
   
    .then(response => console.log(response.data))
   
    .catch(error => {
      console.error("Error fetching customer data:", error);
    
    });
    formRef.current.reset();
  
  }
  return (
    <div className="form-taskadd">
    <form ref={formRef} onSubmit={submitButton}>
      <h2 style={{ textAlign: "center" }}>Add Staff</h2>
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            Name{" "}
          </label>
          <input
            className="input_form"
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
            className="input_form"
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
           className="input_form"
           type="file"
           id="lastName"
           placeholder="image"
           name="image" // Update the name attribute to "image"
          />
        </div>
        <div className="username">
          <label className="form__label" for="firstName">
            Phone{" "}
          </label>
          <input
            className="input_form"
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
            className="input_form"
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
          <input id="email" className="input_form" name="address" />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Gender{" "}
          </label>
          <input className="input_form" id="password" name="gender" />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Salary{" "}
          </label>
          <input className="input_form" id="password" name="salary" />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Postion{" "}
          </label>
          <input className="input_form" id="password" name="position" />
        </div>
      </div>
      <div class="footer">
        <button className='btn-task' type="submit" >
          Add Staff
        </button>
        <button className='btn-task' onClick={()=>dispatch(setremove())}>cancel</button>
      </div>
    </form>
  </div>
  )
}

export default CreateStaff