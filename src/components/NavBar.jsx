import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <section className="my-navbar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mx-auto ">
              <Nav.Link href="#home">Home</Nav.Link>

              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Category 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Category 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Category 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Category 4
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#collections">My Collections</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
            <Nav className="buttons-navbar">
              <Button variant="link">Login</Button>
              <button className="main-btn">Sign Up</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
