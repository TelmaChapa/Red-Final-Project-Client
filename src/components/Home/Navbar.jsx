import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  let clearToken = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Vanilla Extract Journal
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} className="justify-content-end" navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/Home">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <NavLink>My Extracts</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/JournalCreate">
                <NavLink>New Batch</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/SharingCreate">
                <NavLink>Upload a Picture </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/SharingIndex">
                <NavLink>My Pictures</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Public">
                <NavLink>Photos</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink>
                <button
                  onClick={() => {
                    clearToken();
                  }}
                >
                  Log Out
                </button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
