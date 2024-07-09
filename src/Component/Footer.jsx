// Footer.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Twitter from "../assets/icons/twitter.png";
import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";
import Github from "../assets/icons/github.png";
import Visa from "../assets/icons/visa.png";
import Master from "../assets/icons/master.png";
import Paypal from "../assets/icons/paypal.png";
import APay from "../assets/icons/pay.png";
import Gpay from "../assets/icons/gpay.png";
import Logo from "../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#e8e8ea",
      }}
      className="text-dark pt-5 pb-4"
    >
      <Container>
        <Row className="text-center">
          <Col md={3}>
            <img src={Logo} alt="logo" className="mb-3" />
            <p class="text-justify">
              We have clothes that suit your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="d-flex">
              <a href="#">
                <img src={Twitter} alt="twitter" className="mx-2 " />
              </a>
              <a href="#">
                <img src={Facebook} alt="facebook" className="mx-2 " />
              </a>
              <a href="#">
                <img src={Instagram} alt="instagram" className="mx-2" />
              </a>
              <a href="#">
                <img
                  src={Github}
                  alt="github"
                  className="img-fluid mx-2 text-dark"
                />
              </a>
            </div>
          </Col>
          <Col md={2} lg={2}>
            <h6>COMPANY</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Career
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>HELP</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>FAQ</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Payments
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>RESOURCES</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-4 border-top border-4">
          <Col lg={6} className="text-lg-left mt-3">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
          </Col>
          <Col lg={6} className="text-lg-right mt-2">
            <div>
              <img src={Visa} alt="Visa" />
              <img src={Master} alt="Mastercard" />
              <img src={Paypal} alt="PayPal" />
              <img src={APay} alt="Apple Pay" />
              <img src={Gpay} alt="Google Pay" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
