import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Container,
  CardFooter,
} from "reactstrap";
import APIURL from "../../helpers/environment";
import SharingEdit from "./SharingEdit";

class SharingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteImage = (photos) => {
    let token = localStorage.getItem("token");
    fetch(`${APIURL}/image/delete/${photos.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then(() => this.props.fetchImages());
  };

  sharingMapper = () => {
    return this.props.images.map((photos, index) => {
      return (
        <div>
          <Container fluid="md">
            <Col>
              <Card
                style={{
                  backgroundColor: "#FAF3F3",
                  textAlign: "center",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                <CardBody>
                  <CardText>{photos.description}</CardText>
                  <CardImg
                    top
                    // width="10px"
                    // height="auto"
                    style={{
                      width: "11%",
                    }}
                    src={photos.imageupload}
                    // alt="Card image cap"
                    alt={photos.imageupload}
                  />
                  <CardFooter
                    style={{
                      padding: "15px",
                    }}
                  >
                    <SharingEdit
                      images={photos}
                      fetchImages={this.props.fetchImages}
                    />
                    <Button
                      // color="danger"
                      style={{
                        backgroundColor: "#D72323",
                        padding: "1px",
                      }}
                      onClick={() => {
                        this.deleteImage(photos);
                      }}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Container>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Card>
          <CardImg />
          <CardBody>
            <CardTitle></CardTitle>
            <CardSubtitle></CardSubtitle>
          </CardBody>
        </Card>
        {this.sharingMapper()}
      </div>
    );
  }
}

export default SharingTable;
