import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from "../../helpers/environment";

//CLASS COMPONENTS

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      user: {
        email: this.state.email,
        passwordhash: this.state.password,
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${APIURL}/user/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.props.updateToken(result.sessionToken);
        this.props.role(result.user.role);
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div>
        <h1
          style={{
            fontFamily: "Shadows Into Light, cursive",
            color: "#301B3F",
          }}
        >
          Login
        </h1>
        <Form onSubmit={this.handleSubmit}>
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
          <Button
            style={{
              backgroundColor: "#3C415C",
            }}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
    
    export default Login;
