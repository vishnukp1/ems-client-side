import React, { useEffect, useState } from 'react';
import "../../styles/Login.css"
import HomeNav from '../../component/HomeNav';
import Footer from '../../component/Footer';
import StaffLogin from './StaffLogin';


function StaffHome() {

  const [token, setToken] = useState(null); 


  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token)
  },[token])
  
  return (
   
    <div style={{ width:"100vw",height:"100vh"}}>
     
    : <HomeNav />
      <div className='home-main'
        style={{
          backgroundImage: `url('https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt6acdcb4a2fdd4a24/5ffdc9f449cfff488f0f6b2b/blog-thumb-generic-pattern-color.png')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          minHeight: '100vh',
          display: 'flex', 
          justifyContent: "space-between"
        }}
      >
        <div className='home-text' style={{width: "50rem", marginLeft: "4rem", marginTop: "6rem"}}>
          <h2 className='home-h4-text' style={{color: "white", fontSize: "2.5rem"}}>WorkWale Software is the #1 staff development tool used by companies</h2>
          <br></br>
          <h4 className='home-h4-text' style={{color: "white"}}>Trusted by 100K+ teams, they can plan tasks, manage performance, attendance, and salaries.</h4>
        </div>
    
        <div className='home-login' style={{marginRight: "8rem"}}> 
        <StaffLogin />
        </div> 
      </div>

      <Footer />
    </div>
  );
}

export default StaffHome;
