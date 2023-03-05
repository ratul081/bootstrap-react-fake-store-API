import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Shopping Hell</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Cloth
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                Deals
              </Nav.Link>
              <Nav.Link href="#">
                What's New
              </Nav.Link>
              <Nav.Link href="#">
                Delivery
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <div className='d-flex'>
                <UserCircleIcon style={{ height: '50px', padding: '10px' }} />
                <span className='py-2'>Account</span>
                <ShoppingCartIcon style={{ height: '50px', padding: '10px' }} />
                <span className='py-2'>Cart</span>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;