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

class JournalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      beantype: this.props.vanilla.beantype,
      beanamount: this.props.vanilla.beanamount,
      alcoholtype: this.props.vanilla.alcoholtype,
      proof: this.props.vanilla.proof,
      alcoholamount: this.props.vanilla.alcoholamount,
      container: this.props.vanilla.container,
      startdate: this.props.vanilla.startdate,
      enddate: this.props.vanilla.enddate,
      overallresult: this.props.vanilla.overallresult,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      beantype: this.state.beantype,
      beanamount: this.state.beanamount,
      alcoholtype: this.state.alcoholtype,
      proof: this.state.proof,
      alcoholamount: this.state.alcoholamount,
      container: this.state.container,
      startdate: this.state.startdate,
      enddate: this.state.enddate,
      overallresult: this.state.overallresult,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      `http://localhost:3000/extract/update/${this.props.vanilla.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    console.log(this.props.vanilla);
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Edit
        </Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Extract</ModalHeader>
          <ModalBody>
            <h1>Journal</h1>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="beantype">Bean Type</Label>
                <Input
                  onChange={(e) => this.setState({ beantype: e.target.value })}
                  name="beantype"
                  value={this.state.beantype}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="beanamount">Bean Amount</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ beanamount: e.target.value })
                  }
                  name="beanamount"
                  value={this.state.beanamount}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="alcoholtype">Alcohol Type</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ alcoholtype: e.target.value })
                  }
                  name="alcoholtype"
                  value={this.state.alcoholtype}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="proof">Proof</Label>
                <Input
                  onChange={(e) => this.setState({ proof: e.target.value })}
                  name="proof"
                  value={this.state.proof}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="alcoholamount">Alcohol Amount</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ alcoholamount: e.target.value })
                  }
                  name="alcoholamount"
                  value={this.state.alcoholamount}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="container">Container Size</Label>
                <Input
                  onChange={(e) => this.setState({ container: e.target.value })}
                  name="container"
                  value={this.state.container}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="startdate">Start Date</Label>
                <Input
                  onChange={(e) => this.setState({ startdate: e.target.value })}
                  name="startdate"
                  value={this.state.startdate}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="endate">End date</Label>
                <Input
                  onChange={(e) => this.setState({ enddate: e.target.value })}
                  name="enddate"
                  value={this.state.enddate}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="overallresult">Overall Result</Label>
                <Input
                  onChange={(e) =>
                    this.setState({ overallresult: e.target.value })
                  }
                  name="overallresult"
                  value={this.state.overallresult}
                />
              </FormGroup>
              <Button type="submit">Journal</Button>
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

export default JournalEdit;
