import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigate extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="navcontent">
            <Nav.Link href="#home">Internships</Nav.Link>
            <Nav.Link href="#link">Competitve Coding</Nav.Link>
            <Nav.Link href="#link">Artificial Intelligence</Nav.Link>
            <Nav.Link href="#link">Finance</Nav.Link>
            <Nav.Link href="#link">Business</Nav.Link>
            <Nav.Link href="#link">Manangement</Nav.Link>
            <Nav.Link href="#link">Consultancy</Nav.Link>
            <Nav.Link href="#link">Arts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigate;
