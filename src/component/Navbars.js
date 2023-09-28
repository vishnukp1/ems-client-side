import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../Reducers/useReducer';
import logo from '../assets/work-removebg-preview12.png'
import "../styles/company.css"

function Navbars() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutClick, setLogoutClick] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    dispatch(setToken(storedToken));
    if (logoutClick) {
   
      window.location.reload();
    }
  }, [dispatch, logoutClick]);

  const logout = () => {
    localStorage.removeItem("token");
  navigate("/")
  }

  return (
    <Navbar className='navbar-navbr' style={{display:"flex",justifyContent:"space-between"}} >
     <div>
      <img className='navbar-img' style={{width:"6rem",height:"2rem" ,marginLeft:"1rem"}} src={logo} alt='' onClick={()=>navigate("/")}></img>
        
      </div>
      <div>
      <button style={{marginRight:"2rem"}} className='logout-btn' onClick={() =>logout()} >logout</button>
      </div>
    
    </Navbar>
  );
}

export default Navbars;
