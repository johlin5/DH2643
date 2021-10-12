import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { SIGN_UP } from "../../services/queries/Auth";
import { useMutation } from "@apollo/client";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE } from "../../app/theme";
type FormInputs = {
  userName: string;
  password: string;
  passwordConfirmation: string;
};
import { jwtTokenAtom } from "../../atoms/account";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInputs>({ userName: "", password: "", passwordConfirmation: "" });
  const [signup, { data, loading, error }] = useMutation(SIGN_UP);

  const [token, setToken] = useRecoilState(jwtTokenAtom);
  const history = useHistory();

  const registerUser = async () => {
    const response = await signup({
      variables: {
        signupInput: {
          ...formInput
        }
      }
    });
    setToken(response.data.login.token);
    localStorage.setItem("jwtToken", response.data.signin.token);
    history.push("/");
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

      <PrimaryButton
        type="submit"
        text="Create account"
        color={PURPLE}
        variant="h5"
        height="48px"
        onClick={() => registerUser()}
      />

      <>{error?.message}</>
      {data && <>Created account</>}
    </Container>
  );
};

export default RegisterForm;
