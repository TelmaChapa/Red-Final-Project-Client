import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
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
        // DOUBLECHECK CARD
        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src={photos.imageupload}
              alt={photos.imageupload}
            />
            <CardBody>
              <CardTitle tag="h5">{photos.description}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              {/* *******************NEEDS FIXING**************** */}
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
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
        </div>
      );
    });
  };

  render() {
    return <div>{this.sharingMapper()}</div>;
  }
}

export default PublicCards;
