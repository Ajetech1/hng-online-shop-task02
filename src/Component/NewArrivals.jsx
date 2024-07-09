import React from "react";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import ReusableButton from "./ReusableButton";
import "../assets/css/NewArrivals.css";
import Image1 from "../assets/images/image1.png";
import Image2 from "../assets/images/image2.png";
import Image3 from "../assets/images/image3.png";
import Image4 from "../assets/images/image4.png";
import { Button, Container, Row, Col } from "react-bootstrap";

function NewArrivals() {
  return (
    <div className="new-arrivals">
      <h1 className="mt-4 text-center">New Arrivals</h1>
      <Container>
        <Row className="mt-4 ">
          <Col xs={6} sm={6} md={3}>
            <ProductCard
              image={Image1}
              title="T-shirt with Tape Details"
              rating={4.5}
              price={5000}
            />
          </Col>
          <Col xs={5} sm={6} md={3}>
            <ProductCard
              image={Image2}
              title="Skinny Fit Jeans"
              rating={3.5}
              price={5000}
              cutoffPrice="₦10,000"
            />
          </Col>
          <Col className="column-adjust" xs={6} sm={6} md={3}>
            <ProductCard
              image={Image3}
              title="Checkered Shirt"
              rating={4.5}
              price={7000}
            />
          </Col>
          <Col className="column-adjust" xs={6} sm={6} md={3}>
            <ProductCard
              image={Image4}
              title="Sleeve Striped T-Shirt"
              rating={4.5}
              price={2000}
              cutoffPrice="₦5,500"
            />
          </Col>
        </Row>
        <Container className="d-flex justify-content-center align-items-center custom-newarrival-button ">
          <Row className="w-100">
            <Col
              xs={12}
              md={3}
              lg={2}
              className="d-flex justify-content-center mx-auto"
            >
              <ReusableButton
                variant="light"
                size="md"
                className="mt-5 rounded-5 px-5 custom-button w-100"
                onClick={() =>
                  console.log("You are Now Viewing All Our Products!")
                }
              >
                View All
              </ReusableButton>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default NewArrivals;
