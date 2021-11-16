import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Redirect } from "react-router-dom";
import APIURL from "../../helpers/environment";

class SharingCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageupload: "",
      description: "",
      // redirect: false,
      // public: "",
    };
  }

  // setRedirect = () => {
  //   this.setRedirect({ redirect: true });
  // };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      imageupload: this.state.imageupload,
      description: this.state.description,
      // public: this.state.imageupload,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${APIURL}/image/create`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // this.setRedirect();
        window.location.href = "/SharingIndex";
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#F0E9D2",
          padding: "100px",
        }}
      >
        {this.renderRedirect()}
        <Container
          style={{
            textAlign: "center",
            fontFamily: "Shadows Into Light, cursive",
            color: "#301B3F",
            backgroundColor: "#F0E9D2",
          }}
        >
          <h1
            style={{
              fontFamily: "Shadows Into Light, cursive",
              textAlign: "center",
              color: "301B3F",
            }}
          >
            Sharing
          </h1>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="imageupload">Image Upload</Label>
              <Input
                onChange={(e) => this.setState({ imageupload: e.target.value })}
                name="imageupload"
                value={this.state.imageupload}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Extract Description</Label>
              <Input
                onChange={(e) => this.setState({ description: e.target.value })}
                name="description"
                value={this.state.description}
              />
            </FormGroup>
            <Button
              style={{
                backgroundColor: "#3C415C",
              }}
              type="submit"
            >
              Sharing
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
 
export default SharingCreate;          