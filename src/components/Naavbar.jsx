import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Naavbar.css";
import { Link } from "react-router-dom";

const Naavbar = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg">
          <Nav.Link
            className="navbar-brand text-primary font-weight-bolder"
            href="/"
          >
            Reactive Life
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-text" exact to="/">
                Home
              </Link>
              <Link className="nav-text" exact to="/about">
                About
              </Link>
              <Link className="nav-text" exact to="/service">
                Services
              </Link>
              <Link className="nav-text" exact to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Naavbar;
