import React from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import APIURL from "../../helpers/environment";


//////Class Component/////

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      role: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      user: {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
        passwordhash: this.state.password,
        role: "user",
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${APIURL}/user/signup`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.props.updateToken(result.sessionToken);
        // this.props.role(result.user.role);
        window.location.href = "/Home";
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#b4a5a5",
          fontFamily: "Shadows Into Light, cursive",
          color: "#301B3F",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => this.setState({ username: e.target.value })}
              name="username"
              value={this.state.username}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              onChange={(e) => this.setState({ firstname: e.target.value })}
              name="firstname"
              value={this.state.firstname}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              onChange={(e) => this.setState({ lastname: e.target.value })}
              name="lastname"
              value={this.state.lastname}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => this.setState({ email: e.target.value })}
              name="email"
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(e) => this.setState({ password: e.target.value })}
              name="password"
              value={this.state.password}
            />
          </FormGroup>
          <Button type="submit">Signup</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
