import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { SIGN_UP } from "../../services/queries/User";
import { useMutation } from "@apollo/client";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE } from "../../app/theme";
import { useSetRecoilState } from "recoil";
import { authAtom } from "../../atoms/account";

type FormInputs = {
  userName: string;
  password: string;
  passwordConfirmation: string;
};

const RegisterForm: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInputs>({ userName: "", password: "", passwordConfirmation: "" });
  const [signup, { data, loading, error }] = useMutation(SIGN_UP);
  const setLogin = useSetRecoilState(authAtom);

  const registerUser = async () => {
    try {
      const response = await signup({
        variables: {
          signupInput: {
            ...formInput
          }
        }
      });
      setLogin(true);
    } catch (error) {}
  };

  if (loading) {
    return <>Loading screen</>;
  }

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Register</Typography>
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Confirm password"
        label="Confirm password"
        type="password"
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setFormInput({ ...formInput, passwordConfirmation: event.target.value });
        }}
        id="password"
        FormHelperTextProps={{ error: true }}
      />

      <PrimaryButton text="Create account" color={PURPLE} variant="h5" height="48px" onClick={() => registerUser()} />

      <>{error?.message}</>
      {data && <>Created account</>}
    </Container>
  );
};

export default RegisterForm;
