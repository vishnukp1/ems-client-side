import logo from '../assets/work-removebg-preview12.png'
import "../styles/font.css"
import "../styles/nav.css"

function HomeNav() {

  return (

      <div className='nav-shadow' style={{display:"flex", justifyContent:"space-between",height:"2rem",marginTop:"1.2rem"}}>
        <div style={{marginTop:"-.6rem",marginLeft:"1.2rem"}}>
        <img style={{width:"6rem",height:"2rem" }} src={logo} alt=''></img>
        </div>
<div className='font-link1' style={{display:"flex",marginTop:"-.7rem",gap:"2rem",marginRight:"4rem",}}>
        <h5 className='textnav'>Pricing</h5>
        <h5 className='textnav'>About Us</h5>
        </div>
    
      
      </div>
   
  );
}

export default HomeNav;
