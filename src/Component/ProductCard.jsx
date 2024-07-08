import React from "react";
import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";

const ProductCard = ({ image, title, rating, price }) => {
  return (
    <Card style={{ width: "18rem", height: "18rem", borderRadius: "16px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <span style={{ marginLeft: "10px" }}>{rating}/5</span>
        </div>
        <Card.Text>
          <strong>₦{price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
