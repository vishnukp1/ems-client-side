import React, { Component, useState } from 'react'
import "../styles/Login.css"
import { useDispatch } from 'react-redux';
import { setLogin } from '../Reducers/loginReducer';

function SignUp () {

  const dispatch = useDispatch()
    return (
      <form>
        <h3  style={{marginTop:"1rem"}}>Sign Up</h3>
        <div className='form-text'>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
          
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control"  />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            
          />
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="form-btn">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <h6 style={{color:'red'}} onClick={()=>dispatch(setLogin())}>sign in?</h6>
        </p>
      </form>
    )
  }


export default SignUp;