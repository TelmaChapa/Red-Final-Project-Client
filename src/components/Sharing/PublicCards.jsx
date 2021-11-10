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

class PublicCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sharingMapper = () => {
    return this.props.images.map((photos, index) => {
      return (
        // DOUBLECHECK CARD
        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">{photos.description}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>

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
