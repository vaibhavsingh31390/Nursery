/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Logo from "/logo.png";
import styled from "styled-components";

function Header({ loggedIn, setLoggedIn }) {
  const handleLogout = () => {
    // Perform logout actions here
    localStorage.removeItem("jwt"); // Remove the JWT from localStorage
    setLoggedIn(false); // Update state to reflect logged out status
  };
  return (
    <>
      <HeaderContainer>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={Logo} // Replace with your logo image path
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              {loggedIn ? (
                <CustomButton className="px-5 py-2" onClick={handleLogout}>
                  Logout
                </CustomButton>
              ) : (
                <CustomButton className="px-5 py-2" href="/login">
                  Login
                </CustomButton>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  background-color: #27374d;
  color: #dde6ed;
  .nav-link {
    padding-left: 30px !important;
    padding-right: 30px !important;
    color: #dde6ed;
    font-weight: 500;
    &:hover {
      color: #fff;
    }
  }
`;

const CustomButton = styled(Button)`
  background-color: #dde6ed;
  color: #27374d;
  outline: none;
  border: none;
  outline: none;
  box-shadow: none;

  &:hover {
    background-color: #fff;
    color: #27374d;
  }
`;

export default Header;
