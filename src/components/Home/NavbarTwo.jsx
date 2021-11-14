import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  Jumbotron,
  Card,
  CardText,
  CardBody,
  Button,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import Login from "../Auth/Login";
import { Link } from "react-router-dom";

//  FOR SIGNUP

const NavbarTwo = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#fffae5",
          fontFamily: "Shadows Into Light, cursive",
          fontWeight: "bold",
        }}
        color="#fffae5"
        light
        expand="md"
      >
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem></NavItem>
            <NavItem></NavItem> */}
          </Nav>
          <NavbarText className="ms-auto" style={{ padding: ".5rem" }}>
            <Button color="blue" onClick={toggle}>
              Login
            </Button>
            <Modal
              isOpen={modal}
              modalTransition={{ timeout: 700 }}
              backdropTransition={{ timeout: 1300 }}
              toggle={toggle}
            >
              <ModalHeader toggle={toggle}>Login</ModalHeader>
              <ModalBody>
                <Login updateToken={props.updateToken} role={props.adminRole} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Link to="/">
              <Button color="yellow">Back</Button>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarTwo;
