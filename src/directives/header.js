import React from 'react'
import { Navbar, Nav, Form, NavDropdown, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar expand="lg" className="navbar-area">
        <Container>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="menu-mobile">
            <Nav
              className="ms-auto my-2 my-lg-0 "
            // style={{ maxHeight: '100px' }}
            // navbarScroll
            >
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about-us">about us</Link></Nav.Link>
              <Nav.Link><Link to="/our-service">our services</Link></Nav.Link>

              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/all-products">All Product</NavDropdown.Item>
                <NavDropdown.Item href="/canine-products">
                  Canine Product
                </NavDropdown.Item>
                <NavDropdown.Item href="/patners-products">
                  Patners Product
                </NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="PetCare" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/vererinary">Veterinary Service</NavDropdown.Item>
                <NavDropdown.Item href="/carering">
                  Carering Service
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">contact</Nav.Link>

            </Nav>
            <Form className="d-flex nav-btn">
              <Button className="yellow-btn">Sign In</Button>
              <Button className="blue-btn">Register</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header