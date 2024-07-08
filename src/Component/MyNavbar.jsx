// import React from "react";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from "../assets/logos/logo.png";
// import ShoppingCat from "../assets/icons/shopping-cart.png";
// import UserOctagon from "../assets/icons/user-octagon.png";

// const MyNavbar = () => {
//   return (
//     <Navbar bg="white" expand="lg" className="mx-5">
//       <Navbar.Brand href="#home">
//         <img
//           src={Logo}
//           // width="60"
//           // height="40"
//           className="d-inline-block align-top"
//           alt="Logo"
//         />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#shop">Shop</Nav.Link>
//           <Nav.Link href="#onsale">On Sale</Nav.Link>
//           <Nav.Link href="#newsale">New Sale</Nav.Link>
//           <Nav.Link href="#brand">Brand</Nav.Link>
//         </Nav>
//         <Form inline className="d-flex ms-auto">
//           <FormControl
//             type="text"
//             placeholder="Search for products..."
//             className="me-3 w-200 rounded-lg"
//           />
//           <img
//             src={ShoppingCat}
//             className="d-inline-block align-top me-2"
//             alt="ShoppingCat"
//           />
//           <img
//             src={UserOctagon}
//             className="d-inline-block align-top"
//             alt="UserOctagon"
//           />
//         </Form>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default MyNavbar;

import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logos/logo.png";
import ShoppingCat from "../assets/icons/shopping-cart.png";
import UserOctagon from "../assets/icons/user-octagon.png";
import "../assets/css/MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#shop">
              Shop<i class="arrow down"></i>
            </Nav.Link>
            <Nav.Link href="#onsale">On Sale</Nav.Link>
            <Nav.Link href="#newsale">New Sale</Nav.Link>
            <Nav.Link href="#brand">Brand</Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto">
            <FormControl
              type="text"
              placeholder="Search for products..."
              className="me-5 custom-form-control"
            />
            <div className="d-flex align-items-center">
              <img
                src={ShoppingCat}
                className="d-inline-block align-top me-2"
                alt="ShoppingCat"
              />
              <img
                src={UserOctagon}
                className="d-inline-block align-top"
                alt="UserOctagon"
              />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
