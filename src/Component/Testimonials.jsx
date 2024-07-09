import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/css/Testimonials.css";

const testimonials = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.",
    rating: 5,
  },
  {
    name: "James L.",
    text: "As someone who’s always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Container className="d-flex flex-column align-items-center border-top border-5 custom-bg">
      <h3 className="my-4">OUR HAPPY CUSTOMER</h3>
      <Row className="w-100 justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col
            md={4}
            lg={3}
            key={index}
            className="mb-4 d-flex justify-content-center"
          >
            <Card className="" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#f8e825" }}>
                      ★
                    </span>
                  ))}
                </Card.Title>
                <Card.Text>
                  <strong>{testimonial.name}</strong>
                  <p>{testimonial.text}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
