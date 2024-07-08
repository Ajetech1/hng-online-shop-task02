import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/images/desktop-hero.png";
import "../assets/css/HeroSection.css";
import ReusableButton from "./ReusableButton";
import TotalCustomer from "./TotalCustomer";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={7}>
            <h1 className="hero-title mt-4">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="hero-description mt-3">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <ReusableButton
              variant="dark"
              size="lg"
              onClick={() => console.log("You are Now Shopping!")}
            >
              Show Now
            </ReusableButton>
            <TotalCustomer />
          </Col>
          <Col md={6} lg={5}>
            <img
              src={heroImage}
              alt="Hero"
              className="img-fluid hero-image custom-size"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
