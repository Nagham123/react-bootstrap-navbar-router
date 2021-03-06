import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from "styled-components";

export default styled.div `

.navbar {
    background-color: #222;
}

.navbar-brand, navbar-nav .nav-link {
      color: #bbb;

      &:hover {
          color: white; 
      }
}

`;

export const NavigationBar = () => (
    <styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>  
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </styles>
)