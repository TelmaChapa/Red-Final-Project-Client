import React, {useState} from 'react';
import {
    Modal,
     ModalHeader,
      ModalBody, ModalFooter,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  Jumbotron,
  Card,
  CardText,
  CardBody,
  Button
} from 'reactstrap';
import Login from '../Auth/Login';

const LandingPage = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  

  return (
    <div>
      <Navbar style= {{backgroundColor: "blue"}}color="blue" light expand="md">
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavbarText className="bg-info clearfix" style={{ padding: '.5rem'}}  >
          <Button color="danger" onClick={toggle}>Login</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
         <Login updateToken={props.updateToken} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
          <Button>Button</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
      <Jumbotron style= {{backgroundColor: "red", height:"200px", width:"200px" }}>
        <p className="lead">Extract Journal</p>
        <hr className="my-2" />
        <p>Welcome</p>
        <p className="lead">
        </p>
      </Jumbotron>
      <Card>
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};


export default LandingPage;