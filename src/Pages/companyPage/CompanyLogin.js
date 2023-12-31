import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../Reducers/useReducer";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function CompanyLogin() {
  const navigate = useNavigate();
  const inputref = useRef();
  const dispatch = useDispatch();

  const loginPass = async (e) => {
    e.preventDefault();
    const setPassword = inputref.current.upassword.value;
    const setUsername = inputref.current.username.value;
    const items = {
      username: setUsername,
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
          navigate("/");
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
        navigate("/company/login");
      }
    } catch (error) {
      console.error("Error getting customer data:", error);
    }
  };

  return (
    <>
      {/* <form ref={inputref} onSubmit={loginPass}>
      <input name="username"></input>
      <input name="upassword"></input>
      <button>sigin</button>
    </form> */}

      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>
                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
                <form ref={inputref} onSubmit={loginPass}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    name="username"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    name="upassword"
                  />

                  <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                    Login
                  </MDBBtn>
                </form>
                <GoogleOAuthProvider clientId="323449366596-pi4nerf06act4c6bcp9f2n1iedmkstnn.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      var decoded = jwt_decode(credentialResponse.credential);
                      console.log(decoded);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  ;
                </GoogleOAuthProvider>
                ;
                <a className="small text-muted" href="#!">
                  Forgot password?
                </a>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="#!" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>
                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default CompanyLogin;
