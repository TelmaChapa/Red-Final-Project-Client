import React from "react";
import PublicCards from "./PublicCards";
import APIURL from "../../helpers/environment";
import { CardGroup, Container, Row } from "reactstrap";

class Public extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.fetchImages = this.fetchImages.bind(this);
  }
  fetchImages = (event) => {
    console.log(localStorage.getItem("token"));
    let token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${APIURL}/image/all`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ images: result });
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    this.fetchImages();
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <PublicCards
              images={this.state.images}
              fetchImages={this.fetchImages}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Public;
