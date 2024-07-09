import React from "react";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import ReusableButton from "./ReusableButton";
import "../assets/css/NewArrivals.css";
import Image9 from "../assets/images/image9.png";
import Image10 from "../assets/images/image10.png";
import Image11 from "../assets/images/image11.png";
import Image12 from "../assets/images/image12.png";
import { Button, Container, Row, Col } from "react-bootstrap";

function TopSellingCard() {
  return (
    <div className="new-arrivals">
      <h1 className="mt-4 text-center">Top Selling</h1>
      <Container>
        <Row className="mt-4 ">
          <Col xs={6} sm={6} md={3}>
            <ProductCard
              image={Image9}
              title="Vertical Striped Shirt"
              rating={5.0}
              price="18,000"
              cutoffPrice="₦20,000"
            />
          </Col>
          <Col xs={5} sm={6} md={3}>
            <ProductCard
              image={Image10}
              title="Courage Graphic T-Shirt"
              rating={4.0}
              price="12,000"
            />
          </Col>
          <Col className="column-adjust" xs={6} sm={6} md={3}>
            <ProductCard
              image={Image11}
              title="Loose Bermuda Shorts"
              rating={3.0}
              price="7,000"
            />
          </Col>
          <Col className="column-adjust" xs={6} sm={6} md={3}>
            <ProductCard
              image={Image12}
              title="Faded Skinny Jeans"
              rating={4.5}
              price="₦10,500"
            />
          </Col>
        </Row>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "40vh" }}
        >
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

export default TopSellingCard;
