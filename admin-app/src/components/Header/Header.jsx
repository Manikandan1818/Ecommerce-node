import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <li className="nav-item">
              <NavLink to="/Signin" className="nav-link">
                Signin
              </NavLink>
            </li>
            <NavLink to="/Signup" className="nav-link">
              Signup
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
