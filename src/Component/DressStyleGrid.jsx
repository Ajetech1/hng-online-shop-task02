import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/DressStyleGrid.css";
import Image5 from "../assets/images/image5.png";
import Image6 from "../assets/images/image6.png";
import Image7 from "../assets/images/image7.png";
import Image8 from "../assets/images/image8.png";

const DressStyleGrid = () => {
  return (
    <Container className="styled-container my-5 mx-auto">
      <h2 className="text-center my-4">Browse by Dress Style</h2>
      <Row className="d-flex justify-content-center align-items-center mb-5 ">
        <Col sm={6} md={3} lg={4} className="mb-4">
          <Card className="position-relative rounded-4">
            <Card.Img
              variant="top"
              src={Image5}
              alt="Casual"
              className="rounded-4"
            />
            <Card.ImgOverlay className="p-0">
              <div className="position-absolute top-0 start-0 p-2 text-dark">
                <strong>Casual</strong>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={6} md={3} lg={7} className="mb-4">
          <Card className="position-relative rounded-4">
            <Card.Img
              variant="top"
              src={Image6}
              alt="Formal"
              className="rounded-4"
            />
            <Card.ImgOverlay className="p-0">
              <div className="position-absolute top-0 start-0 p-2 text-dark">
                <strong>Formal</strong>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={6} md={3} lg={7} className="mb-4">
          <Card className="position-relative rounded-4">
            <Card.Img
              variant="top"
              src={Image7}
              alt="Party"
              className="rounded-4"
            />
            <Card.ImgOverlay className="p-0">
              <div className="position-absolute top-0 start-0 p-2 text-dark">
                <strong>Party</strong>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={6} md={3} lg={4} className="mb-4">
          <Card className="position-relative rounded-4">
            <Card.Img
              variant="top"
              src={Image8}
              alt="Gym"
              className="rounded-4"
            />
            <Card.ImgOverlay className="p-0">
              <div className="position-absolute top-0 start-0 p-2 text-dark">
                <strong>Gym</strong>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DressStyleGrid;
