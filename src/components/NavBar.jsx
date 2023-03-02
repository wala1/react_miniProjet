import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand to="/products">MyStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/products/add" style={({isActive})=>({textDecoration:isActive&&'underline'})}>Add Product</Nav.Link>
            <Nav.Link as={NavLink} to="/products" style={({isActive})=>({textDecoration:isActive&&'underline'})}>Products</Nav.Link>
            <Nav.Link as={NavLink} to="/users" style={({isActive})=>({textDecoration:isActive&&'underline'})}>Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar