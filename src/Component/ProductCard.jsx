import React from "react";
import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";
import "../assets/css/ProductCard.css";

const ProductCard = ({ image, title, rating, price, cutoffPrice }) => {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="custom-title">{title}</Card.Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="12px"
            starSpacing="2px"
          />
          <span style={{ marginLeft: "10px" }}>{rating}/5</span>
        </div>
        <Card.Text>
          <strong>₦{price}</strong>
          <span style={{ textDecoration: "line-through", marginLeft: "10px" }}>
            {cutoffPrice}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
