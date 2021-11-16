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
        <NavbarBrand
          style={{
            textAlign: "justify",
          }}
          href="/"
          className="mr-auto"
        >
          Vanilla Extract Journal
        </NavbarBrand>
        <NavbarToggler
          style={{
            color: "#301B3F",
          }}
          onClick={toggleNavbar}
          className="mr-2"
        />
        <Collapse isOpen={!collapsed} className="justify-content-end" navbar>
          <Nav
            navbar
            style={{
              textAlign: "center",
            }}
          >
            <NavItem>
              <Link to="/Home">
                <NavLink
                  style={{
                    fontFamily: "Shadows Into Light, cursive",
                    color: "#3f0071",
                  }}
                >
                  Home
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                <NavLink
                  style={{
                    fontFamily: "Shadows Into Light, cursive",
                    color: "#3f0071",
                  }}
                >
                  My Extracts
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/JournalCreate">
                <NavLink
                  style={{
                    color: "#3f0071",
                    fontFamily: "Shadows Into Light, cursive",
                  }}
                >
                  New Extract
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/SharingCreate">
                <NavLink
                  style={{
                    fontFamily: "Shadows Into Light, cursive",
                    color: "#3f0071",
                  }}
                >
                  Upload a Picture{" "}
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/SharingIndex">
                <NavLink
                  style={{
                    fontFamily: "Shadows Into Light, cursive",
                    color: "#3f0071",
                  }}
                >
                  My Pictures
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Public">
                <NavLink
                  style={{
                    fontFamily: "Shadows Into Light, cursive",
                    color: "#3f0071",
                    borderRadius: "25px",
                  }}
                >
                  Gallery
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink>
                <button
                  style={{
                    fontFamily: "Shadows Into Light, cursive",
                    // color: "#3C415C",
                    borderRadius: "65px",
                  }}
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
