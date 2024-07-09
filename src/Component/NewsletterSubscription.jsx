import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsletterSubscription = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "auto",
        margin: "0 8%",
        marginTop: "30px",
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md="6" lg={5}>
            <h2 style={{ fontSize: "18px" }}>
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </Col>
          <Col md="auto">
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  style={{ borderRadius: "30px", width: "200px" }}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md="auto">
            <Button
              variant="light"
              style={{ borderRadius: "30px", width: "200px" }}
            >
              Subscribe to Newsletter
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsletterSubscription;
