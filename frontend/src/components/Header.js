import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            Big Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/login"><i class="bi bi-person-fill"></i>Sign in</Nav.Link>
              <Nav.Link href="/cart"><i class="bi bi-cart3"></i>cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
