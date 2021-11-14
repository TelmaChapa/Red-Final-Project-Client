import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import APIURL from "../../helpers/environment";

class SharingEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      imageupload: this.props.photos.imageupload,
      description: this.props.photos.description,
      // public: this.props.photos.public,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      imageupload: this.state.imageupload,
      description: this.state.description,
      // public: this.state.public,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${APIURL}/sharing/update/${this.props.photos.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    console.log(this.props.photos);
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Edit
        </Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Photo</ModalHeader>
          <ModalBody>
            <h1>Photo</h1>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="upload">Photo</Label>
                <Input
                  onChange={(e) => this.setState({ upload: e.target.value })}
                  name="upload"
                  value={this.state.upload}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  name="description"
                  value={this.state.description}
                />
              </FormGroup>
              {/* <FormGroup>
                <Label htmlFor="beanamount">Make Public</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ public: e.target.value })
                  }
                  name="public"
                  value={this.state.public}
                />
              </FormGroup> */}
              <Button type="submit">Photo</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "} */}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SharingEdit;
