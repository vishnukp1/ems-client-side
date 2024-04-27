import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#F1F1F1' }}>
   

      <div className='text-center p-3' style={{ backgroundColor: '#e6ebfc',fontSize:"12px",color:"black"}}>
        © 2020 Copyright:
        <a href='https://mdbootstrap.com/' style={{color:"GrayText"}}>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}