import Logo from "../assets/img/netflix_logo.png";
import Avatar from "../assets/img/avatar.png";
import { Component } from "react";
import { Dropdown, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { BsFillBellFill, BsSearch } from "react-icons/bs";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <img className="ms-5" src={Logo} id="logo" alt="Netflix" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className="nav-link">Home</Nav.Link>
            <Nav.Link className="nav-link">TV Shows</Nav.Link>
            <Nav.Link className="nav-link">Movies</Nav.Link>
            <Nav.Link className="nav-link">Recently Added</Nav.Link>
            <Nav.Link className="nav-link">My List</Nav.Link>
          </Nav>
          <Nav id="nav-utilities" className="d-flex align-items-center gap-1">
            <BsSearch className="navbar-icon fs-5 mx-2 text-white search " />
            <BsFillBellFill className="navbar-icon fs-5" />
            <Nav.Link>Francesco</Nav.Link>
            <NavDropdown title={<img src={Avatar} id="avatar" alt="profile" />}>
              <Dropdown.Item className="nav-drop">Settings</Dropdown.Item>
              <Dropdown.Item className="nav-drop">Logout</Dropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
