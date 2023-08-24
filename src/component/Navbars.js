import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../Reducers/useReducer';

function Navbars() {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth);
const dispatch = useDispatch()

 useEffect(() => {
  const token = localStorage.getItem("token");
  dispatch(setToken(token));

});

const logout = () =>{
localStorage.removeItem("token")
}

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{background:"red"}}>
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {token ? 
      <Button onClick={() =>logout()} >logout</Button>:<Button  onClick={() => navigate("company/login")}>login</Button>}
    </Navbar>
  );
}

export default Navbars;
