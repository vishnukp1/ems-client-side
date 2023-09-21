import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import "../../styles/staffProfile.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Staff from '../companyPage/Staff';
import StaffNav from '../../component/StaffNav';
import StaffSidebar from '../../component/StaffSidebar';

export default function Profile() {

  const [staff,setStaff] = useState([])

  const [department,setDepartment] = useState()

  const navigate = useNavigate()

  const getStaffData = async () => {
    try {

      const id = localStorage.getItem("userid");

      const response = await axios.get(`http://localhost:4444/staff/users/${id}`);
      const responseData = response.data.staff;
      const departmenttitle = response.data.department;
setDepartment(departmenttitle);
      setStaff([responseData]);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching staff data:", error);
    }
  };

  useEffect(() => {
    getStaffData();
  }, []);
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <StaffNav />
    <div style={{display:"flex", width:"100vw",height:"100vh"}}>
      <StaffSidebar />
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' ,width:"100%"}}>
     
            
                {staff.map((staff, index) => (
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={staff.imagepath}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{staff.name}</MDBTypography>
                  <MDBCardText>{department}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{staff.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{staff.phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                 
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">{staff.address}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Salary</MDBTypography>
                        <MDBCardText className="text-muted">{staff.salary}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    
                    <button type="submit" className="me-4 btn btn-success btn-lg btn-block"   onClick={() =>navigate(`/employees/addleave`)
                          }>Apply Leave</button>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
       ))}
    </section>
    </div></div>
  );
}