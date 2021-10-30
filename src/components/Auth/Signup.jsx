import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
        role: this.state.role,
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:3000/user/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.props.updateToken(result.sessionToken);
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
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
            <Label htmlFor="role">Role</Label>
            <Input
              onChange={(e) => this.setState({ role: e.target.value })}
              name="role"
              value={this.state.role}
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
