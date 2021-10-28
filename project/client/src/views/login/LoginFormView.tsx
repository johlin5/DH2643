import { Container, TextField, Typography, Button } from "@material-ui/core";
import React, { useState, ChangeEvent } from "react";
import { PURPLE, RED } from "../../app/theme";
import { FormInputs } from "./types";
import PrimaryButton from "../../components/PrimaryButton";

type LoginFormViewProps = {
  onSubmit: (input: FormInputs) => void;
  errorMessage: string;
  message?: string | null;
  onGoBack: () => void;
};

const LoginFormView: React.FC<LoginFormViewProps> = ({ onSubmit, errorMessage, message, onGoBack }) => {
  const [formInput, setFormInput] = useState<FormInputs>({ userName: "", password: "" });

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Login</Typography>
      {message && (
        <Typography variant="h6" color="primary">
          {message}
        </Typography>
      )}
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit(formInput);
        }}
      >
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
        <Button
          style={{
            textTransform: "none",
            backgroundColor: PURPLE,
            height: "48px",
            color: "white"
          }}
          fullWidth
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onSubmit(formInput);
          }}
        >
          <Typography variant="h5">Login</Typography>
        </Button>
        <PrimaryButton text="Back" color={RED} variant="h5" height="48px" type="button" onClick={() => onGoBack()} />
      </form>
      <>{errorMessage}</>
    </Container>
  );
};

export default LoginFormView;
