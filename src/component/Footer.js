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
      {/* <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Register for free</span>
            <MDBBtn type='button' outline color="light" rounded>
              Sign up!
            </MDBBtn>
          </p>
        </section>
      </MDBContainer> */}

      <div className='text-center p-3' style={{ backgroundColor: '#e6ebfc',fontSize:"12px",color:"black"}}>
        © 2020 Copyright:
        <a href='https://mdbootstrap.com/' style={{color:"GrayText"}}>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}