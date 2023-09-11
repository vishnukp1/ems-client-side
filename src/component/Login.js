import React, { Component, useRef } from 'react'
import "../styles/Login.css"
import { useDispatch } from 'react-redux';
import { setLogin, setSignup } from '../Reducers/loginReducer';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from "../Reducers/useReducer";
import jwt_decode from "jwt-decode";


function Login () {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const inputref = useRef();
 
 

  const loginPass = async (e) => {
    e.preventDefault(); 
    const setPassword = inputref.current.upassword.value;
    const setUsername = inputref.current.username.value;
    console.log(setUsername);
    console.log(setPassword);
    const items = {
      email: setUsername,
      password: setPassword,
    };

    try {
      const response = await axios.post(
        "http://localhost:4444/company/login",
        items
      );
      const data = response.data;
      console.log(response.data);

      if (data.token) {
        try {
          alert("Login Successfully!");
          navigate("/company/dashboard");
          localStorage.setItem("token", data.token);
          const token = localStorage.getItem("token");
          dispatch(setToken(data.token));
          console.log(token);
       
        } catch (error) {
          console.error("Error in token:", error);
        }
      } else {
        alert("Email and Password did not match");
        localStorage.clear("token");
        dispatch(setToken(data.token));
        navigate("/company/login")
      }
    } catch (error) {
      console.error("Error getting customer data:", error);
    }
  };
 
    return (
        <div className='form-login'>
      <form ref={inputref} onSubmit={loginPass}>
        <h3 style={{marginTop:"1rem"}}>Sign In</h3>
        <div className='form-text' style={{marginTop:"3rem"}}>
        <div className="mb-3 ">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="upassword"
          />
          </div>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="form-btn">
            Submit
          </button>
        </div>
        <div style={{width:"2px",height:"5px"}}>
        <GoogleOAuthProvider clientId="323449366596-pi4nerf06act4c6bcp9f2n1iedmkstnn.apps.googleusercontent.com">
         <GoogleLogin
    onSuccess={credentialResponse => {
        var decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded);
    }}
    onError={() => {
    console.log('Login Failed');
    }}
    />;
           
            </GoogleOAuthProvider>;
            </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right">
          I didn't registered <h6 style={{color:'red'}}  onClick={()=>dispatch(setLogin())}>sign Up?</h6>
        </p>
      </form>
      </div>
    )
  }

  export default Login