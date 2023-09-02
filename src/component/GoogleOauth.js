import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react'
import jwt_decode from "jwt-decode";

function googleOauth() {
  return (
    <div>                 
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
  )
}

export default googleOauth