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
import bottleOfVanillaExtract from "../assets/BottleOfVanillaExtract.jpg";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Navbar
        style={{
          // backgroundColor: "#b4a5a5",
          background: "linear-gradient(to top, white 0%, #b4a5a5 100%)",
          // #301b3f
          fontFamily: "Shadows Into Light, cursive",
          fontWeight: "bold",
        }}
        color="#292f36"
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
          <NavbarText className="ms-auto" style={{ padding: ".7rem" }}>
            <Button color="blue" onClick={toggle}>
              Login
            </Button>
            <Modal
              style={{
                fontFamily: "Shadows Into Light, cursive",
                color: "#301B3F",
              }}
              isOpen={modal}
              modalTransition={{ timeout: 700 }}
              backdropTransition={{ timeout: 1300 }}
              toggle={toggle}
            >
              <ModalHeader toggle={toggle}>Login</ModalHeader>
              <ModalBody
                style={{
                  backgroundColor: "E3CDC1",
                }}
              >
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
          backgroundColor: "#b4a5a5",
          // background: "linear-gradient(to top, 301b3f 0%, white 100%)",
          height: "700px",
          width: "100%",
          fontFamily: "Shadows Into Light, cursive",
          fontSize: "60px",
          color: "#301B3F",
          textAlign: "center",
        }}
      >
        <hr className="my-2" />
        <p>VanJo</p>
        <img
          src={bottleOfVanillaExtract}
          style={{
            height: "500px",
            width: "400px",
            border: "11px solid #574F7D",
            // borderImage:
            // "linear-gradient(to right, purple 10%, black 100%) 100% 0 100% 0/2px 2px 2px 2px",
            // padding: "30px",

            // #301b3f
            borderRadius: "25px",
          }}
        />
        <p className="lead"></p>
      </Jumbotron>
      <Card>
        <CardBody
          style={{
            // backgroundColor: "#b4a5a5",
            background: "linear-gradient(to top, #b4a5a5 0%, white 100%)",
            height: "120px",
            width: "100%",
          }}
        >
          <CardText
            style={{
              fontFamily: "Shadows Into Light, cursive",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            Vanilla Extract Journal
          </CardText>
        </CardBody>
      </Card>
      <footer
        style={{
          width: "100%",
          height: "40px",
          position: "fixed",
          bottom: "0",
          background: "linear-gradient(to bottom, #FCF8EC 0%, #b4a5a5 100%)",
          fontFamily: "Shadows Into Light, cursive",
          textAlign: "center",
        }}
      >
        © Telma Chapa 2021
      </footer>
    </div>
  );
};


export default LandingPage;