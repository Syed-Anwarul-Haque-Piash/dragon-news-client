import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import { useContext } from "react";

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              
                <Link to="/">Home</Link>
              
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                </Nav.Link>
              )}

              {user ? (
                <Button onClick={handleLogout} variant="dark">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
