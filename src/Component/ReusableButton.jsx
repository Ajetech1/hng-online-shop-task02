Button.js;
import React from "react";
import { Button } from "react-bootstrap";

const ReusableButton = ({
  children,
  variant = "primary",
  size = "lg",
  disabled = false,
  onClick = () => {},
  type = "button",
  className = "mx-0 rounded-5 px-5 custom-button",
  // className = "mx-0 rounded-5 px-5 w-100 w-100 w-md-auto w-lg-auto",
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
