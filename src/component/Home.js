import React, { useState } from 'react';
import HomeNav from './HomeNav';
import Footer from './Footer';
import SignUp from './Singup';
import "../styles/Login.css"
import Login from './Login';
import { useSelector } from 'react-redux';

function Home() {
  const signup = useSelector((state)=>state.login)
  console.log(signup);
  return (
    <div>
      <HomeNav />
      <div
        style={{
          backgroundImage: `url('https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt6acdcb4a2fdd4a24/5ffdc9f449cfff488f0f6b2b/blog-thumb-generic-pattern-color.png')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          minHeight: '100vh',
          display: 'flex', 
          justifyContent:"space-between"
        }}
      ><div style={{width:"35rem",marginLeft:"4rem",marginTop:"6rem"}}>    <h2 style={{color:"white",fontSize:"2.5rem"}}>WorkWale Software is the #1 staff development tool used by companies</h2>
      
      <br></br>
      <h4 style={{color:"white"}}>Trusted by 100K+ teams , they can plan task,manage performance, attendance, and salaries .</h4>
      </div>
    
       <div style={{marginRight:"8rem"}}> 
        {signup ? <Login /> : <SignUp/> } </div> 
      </div>

      <Footer />
    </div>
  );
}

export default Home;
