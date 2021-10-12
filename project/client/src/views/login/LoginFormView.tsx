import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE } from "../../app/theme";
import { FormInputs } from "./types";

type LoginFormViewProps = {
  onSubmit: (input: FormInputs) => void;
  errorMessage: string;
};

const LoginFormView: React.FC<LoginFormViewProps> = ({ onSubmit, errorMessage }) => {
  const [formInput, setFormInput] = useState<FormInputs>({ userName: "", password: "" });

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Login</Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setFormInput({ ...formInput, userName: event.target.value });
        }}
        FormHelperTextProps={{ error: true }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setFormInput({ ...formInput, password: event.target.value });
        }}
        autoComplete="current-password"
        FormHelperTextProps={{ error: true }}
      />

      <PrimaryButton
        type="submit"
        text="Login"
        color={PURPLE}
        variant="h5"
        height="48px"
        onClick={() => onSubmit(formInput)}
      />

      <>{errorMessage}</>
    </Container>
  );
};

export default LoginFormView;
