import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <NavLink to="/">
        <Navbar.Brand >📚</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <NavLink to="/" style={{textDecoration: "none"}}>
              Home
            </NavLink>
            <NavLink to="/About" style={{textDecoration: "none"}}>
            About
            </NavLink>
            <NavLink to="/Product" style={{textDecoration: "none"}}>
            Product
            </NavLink>
            <NavLink to="/blogs" style={{textDecoration: "none"}}>
            Blogs
            </NavLink>
            <NavLink to="/Register" style={{textDecoration: "none"}}>
            Register
            </NavLink>
            <NavLink to="/Login" style={{textDecoration: "none"}}>
            Login
            {/* </NavLink>
            {/* <NavLink to="/details" style={{textDecoration: "none"}}>
            details */}
            </NavLink> 
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
    </Navbar>
  );
}

export default Menu;