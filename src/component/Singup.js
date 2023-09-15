import React, {  useRef} from 'react'
import "../styles/Login.css"
import { useDispatch } from 'react-redux';
import { setLogin, setSignup } from '../Reducers/loginReducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from "../Reducers/useReducer";

function SignUp () {
  
  const navigate = useNavigate();
  const inputref = useRef(null);
  const submithandle = async () => {
    try{
    const userFirstName = inputref.current.name.value;
    const company = inputref.current.company.value;
    const userPassword = inputref.current.password.value;
    const userEmail = inputref.current.email.value;
    const phone = inputref.current.phone.value;
    // setemail([
    //   ...email,
    //   { userFirstName, userLastName, userEmail, userPassword },
    // ]);
  
    const item = {
     name: userFirstName,
     company:company,
     email:userEmail,
      password: userPassword,
      phone:phone
   
    };

    const response =await axios
      .post(`http://localhost:4444/company/register`, item)
      const data = response.data;
      console.log(response.data);
     
     
      localStorage.setItem("token", data.token);
      const token = localStorage.getItem("token");
      dispatch(setToken(data.token));
      console.log(token)
  }catch(error)  {
        console.error("Error fetching customer data:", error);
        // Handle the error, show an error message, etc.
      };
   
navigate("/company/dashboard")

  };

  console.log(inputref);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  const dispatch = useDispatch()
    return (
      <div className='form-logout'>
      <form ref={inputref} onSubmit={handleSubmit}>
        <h3  style={{marginTop:"1rem"}}>Sign Up</h3>
        <div className='form-text'>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
          name='name'
          />
        </div>
     
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name='email'
            
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name='password'
            
          />
          </div>
          <div className="mb-3">
          <label>Company</label>
          <input
            type="company"
            className="form-control"
            name='company'
            
          />
          </div>
          <div className="mb-3">
          <label>Phone</label>
          <input type="text" className="form-control" name='phone' />
        </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="form-btn" onClick={submithandle}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <h6 style={{color:'red'}} onClick={()=>dispatch(setSignup())}>sign in?</h6>
        </p>
      </form>
      </div>
    )
  }


export default SignUp;