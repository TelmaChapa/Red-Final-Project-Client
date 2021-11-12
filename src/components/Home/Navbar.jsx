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
    <div
      style={{
        background: "linear-gradient(to bottom, white 0%, #b4a5a5 100%)",
        fontFamily: "Shadows Into Light, cursive",
        fontWeight: "bolder",
      }}
    >
      {/* backgroundColor: "#b4a5a5", */}
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
                <NavLink>New Extract</NavLink>
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
                <NavLink>Gallery</NavLink>
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
