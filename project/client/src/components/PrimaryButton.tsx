import { Button, Typography } from "@material-ui/core";
import React from "react";

type PrimaryButtonProps = {
  height: string;
  color: string;
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  icon?: JSX.Element;
  type?: "submit" | "button";
  onClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ height, color, text, icon, variant = "h4", onClick, type }) => {
  return (
    <Button
      startIcon={icon}
      style={{
        textTransform: "none",
        backgroundColor: color,
        height,
        color: "white"
      }}
      fullWidth
      onClick={onClick}
      type={type}
    >
      <Typography variant={variant}>{text}</Typography>
    </Button>
  );
};

export default PrimaryButton;
