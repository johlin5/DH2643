import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { LOGIN } from "../../services/queries/User";
import { useMutation } from "@apollo/client";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE } from "../../app/theme";
type FormInputs = {
  userName: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInputs>({ userName: "", password: "" });
  const [signup, { data, loading, error }] = useMutation(LOGIN);

  const loginUser = async () => {
    const response = await signup({
      variables: {
        loginInput: {
          ...formInput
        }
      }
    });
    console.log(response);
  };

  if (loading) {
    return <>Loading screen</>;
  }

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

      <PrimaryButton text="Login" color={PURPLE} variant="h5" height="48px" onClick={() => loginUser()} />

      <>{error?.message}</>
    </Container>
  );
};

export default LoginForm;
