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
} from "reactstrap";
import APIURL from "../../helpers/environment";

class PublicCards extends React.Component {
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
          <Col
            style={{
              padding: "2px",
            }}
          >
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
                  // width="100%"
                  style={{
                    width: "11%",
                  }}
                  src={photos.imageupload}
                  alt={photos.imageupload}
                />
                {localStorage.getItem("role") === "admin" ? (
                  <Button
                    color="danger"
                    onClick={() => {
                      this.deleteImage(photos);
                    }}
                  >
                    Delete
                  </Button>
                ) : null}
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
        </div>
      );
    });
  };

  render() {
    return <div>{this.sharingMapper()}</div>;
  }
}

export default PublicCards;
