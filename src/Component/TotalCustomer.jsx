import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TotalCustomer = () => {
  return (
    <div className="container d-flex">
      <div className="d-flex flex-column me-3 mt-4 border-end border-2 pe-4">
        <h2>2000+</h2>
        <p>International Brands</p>
      </div>
      <div className="d-flex flex-column me-3 mt-4 border-end border-2 pe-4">
        <h2>3,000+</h2>
        <p>High-Quality Products</p>
      </div>
      <div className="d-flex flex-column me-3 mt-4">
        <h2>30,000+</h2>
        <p>Happy Customers</p>
      </div>
    </div>
  );
};

export default TotalCustomer;
