import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "../styles.css";

class Header extends Component {
  render() {
    return (
      <div className="mt-2">
        <div className="d-flex gap-4 ms-5">
          <p className="text-white fw-bold px-2 ms-2 fs-3">TV Shows</p>
          <Dropdown className="d-flex align-items-center">
            <Dropdown.Toggle className="bg-black border border-none mb-3">Genres</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Horror</Dropdown.Item>
              <Dropdown.Item href="#">Reality</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Header;
