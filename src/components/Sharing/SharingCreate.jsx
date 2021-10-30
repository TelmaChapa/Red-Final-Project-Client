import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SharingCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageupload: "",
            description: "",
            public: "",
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
            description: this.state.imageupload,
            public: this.state.imageupload,
        }); 

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          fetch("http://localhost:3000/image/create", requestOptions)
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
            })
            .catch((error) => console.log("error", error));
        };

        render() { 
            return (
                <div>
                <h1>Sharing</h1>
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
              <Button type="submit">Sharing</Button>
            </Form>
          </div> 
          );
    }
}
 
export default SharingCreate;          