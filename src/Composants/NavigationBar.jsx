import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWishlistCount } from "../redux/slices/wishlistSlice";


export default function NavigationBar() {
  const activeStyle = {
    textDecoration: "underline",
  };

  const inactiveStyle = {
    textDecoration: "none",
  };
  const wishlistCount = useSelector(selectWishlistCount);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>MyEvents</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Events
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/event/addevent"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Add New Event
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/wishlist"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            WishList ({wishlistCount})
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
