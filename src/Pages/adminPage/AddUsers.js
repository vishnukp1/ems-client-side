import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/company.css";
import { useDispatch } from "react-redux";
import { setremove } from "../../Reducers/addstaffReducer";


function AddUsers() {
  const formRef = useRef(null);
  const dispatch = useDispatch();


  
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


  const submitButton = async (e) => {
    e.preventDefault();

    const items = {
      name: formRef.current.name.value,
  
      phone: formRef.current.phone.value,
      email: formRef.current.email.value,
   
   
      
    };

    await axios
      .post(`http://localhost:4444/admin/createcompany`, items, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
    
      formRef.current.reset();

  };




  return (
    <div className="form-taskadd" ref={menuRef}>
      <form ref={formRef} onSubmit={submitButton}>
        <h2 style={{ textAlign: "center" }}>Add Company</h2>
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              Name{" "}
            </label>
            <input
              className="input_form"
              type="text"
              id="firstName"
              name="name"
            />
          </div>
          
          <div className="username" style={{ display: "flex" }}>
            <label className="form__label" for="firstName">
              Email{" "}
            </label>
            <input
              style={{ marginLeft: "48px" }}
              className="input_form"
              type="file"
              id="lastName"
              placeholder="image"
              name="email"
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
              name="phone"
            />
          </div>

       

       
     
        </div>
        <div class="footer">
          <button className="btn-task" type="submit">
            Add Company
          </button>
          <button className="btn-task" onClick={() => dispatch(setremove())}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUsers;
