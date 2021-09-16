import { Button, Typography } from "@material-ui/core";

type PrimaryButtonProps = {
  height: string;
  color: string;
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  icon?: JSX.Element;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ height, color, text, icon, variant = "h4" }) => {
  return (
    <Button
      startIcon={icon}
      style={{ textTransform: "none", backgroundColor: color, height, color: "white" }}
      fullWidth
    >
      <Typography variant={variant}>{text}</Typography>
    </Button>
  );
};

export default PrimaryButton;
