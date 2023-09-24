import axios from "../../Autherization/Autherization";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/company.css";
import { useDispatch } from "react-redux";
import { setremove } from "../../Reducers/addstaffReducer";

function CreateStaff() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [department, setDepartment] = useState([]);

  
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

  return (
    <div className="form-taskadd" ref={menuRef}>
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
              name="name"
            />
          </div>
          
          <div className="username" style={{ display: "flex" }}>
            <label className="form__label" for="firstName">
              Image{" "}
            </label>
            <input
              style={{ marginLeft: "48px" }}
              className="input_form"
              type="file"
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
              className="input_form"
              type="text"
              id="lastName"
              name="phone"
            />
          </div>

          <div className="username">
            <label className="form__label" for="firstName">
              Email{" "}
            </label>
            <input className="input_form" id="lastName" name="email" />
          </div>

          <div className="email">
            <label className="form__label" for="email">
              Address{" "}
            </label>
            <input className="input_form" name="address" />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Gender{" "}
            </label>
            <select name="gender" className="select-custom-addstaff">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Salary{" "}
            </label>
            <input className="input_form" id="password" name="salary" />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Department{" "}
            </label>
            <select
              className="select-custom-addstaff"
              style={{ backgroundColor: "white" }}
              name="position"
              onChange={(e) => searchDepartment(e.target.value)}
            >
              <option name="position" value="">
                Select Department
              </option>
              {department.map((post, index) => (
                <option
                  name="position"
                  style={{ fontSize: "18px", textAlign: "start" }}
                  key={index}
                  value={post.title}
                >
                  {post.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div class="footer">
          <button className="btn-task" type="submit">
            Add Staff
          </button>
          <button className="btn-task" onClick={() => dispatch(setremove())}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateStaff;
