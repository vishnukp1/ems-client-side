import React, { Component } from 'react'
import "../styles/Login.css"
import { useDispatch } from 'react-redux';
import { setSignup } from '../Reducers/loginReducer';

function Login () {
  const dispatch = useDispatch()
 
    return (
        <div >
      <form >
        <h3 style={{marginTop:"1rem"}}>Sign In</h3>
        <div className='form-text' style={{marginTop:"3rem"}}>
        <div className="mb-3 ">
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
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right">
          I didn't registered <h6 style={{color:'red'}}  onClick={()=>dispatch(setSignup())}>sign Up?</h6>
        </p>
      </form>
      </div>
    )
  }

  export default Login