import React, {useState} from 'react';
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
import vanillaBeans from "../assets/vanillaBeans.jpg";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
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
                <Login updateToken={props.updateToken} role={props.role} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Link to="/Signup">
              <Button color="yellow">SignUp</Button>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
      <Jumbotron
        style={{
          backgroundColor: "#fffae5",
          height: "600px",
          width: "100%",
          fontFamily: "Shadows Into Light, cursive",
          fontSize: "60px",
          color: "#292f36",
          textAlign: "center",
        }}
      >
        <hr className="my-1" />
        <p>Vanilla Extract Journal</p>
        <img
          src={vanillaBeans}
          height="500px"
          width="900px"
          // border-radius="18px"
        />
        <p className="lead"></p>
      </Jumbotron>
      <Card>
        <CardBody
          style={{ backgroundColor: "#fffae5", height: "90px", width: "100%" }}
        >
          <CardText
            style={{
              fontFamily: "Shadows Into Light, cursive",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            Every Step of Homemade Vanilla Extract
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};


export default LandingPage;