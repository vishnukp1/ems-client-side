import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../Reducers/useReducer';
import logo from '../assets/work-removebg-preview12.png'
import "../styles/company.css"

function Navbars() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth);
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
    setLogoutClick(true); 
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{background:"red"}}>
      <Container>
      <img style={{width:"6rem",height:"2rem" }} src={logo} alt='' onClick={()=>navigate("/")}></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/employees/staff">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    
      <button className='logout-btn' onClick={() =>logout()} >logout</button>
    </Navbar>
  );
}

export default Navbars;
