import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { SIGN_UP } from "../../services/queries/Auth";
import { useMutation } from "@apollo/client";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE, RED } from "../../app/theme";
type FormInputs = {
  userName: string;
  password: string;
  passwordConfirmation: string;
};
import { jwtTokenAtom, accountNameAtom } from "../../atoms/account";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInputs>({ userName: "", password: "", passwordConfirmation: "" });
  const [signup, { data, loading, error }] = useMutation(SIGN_UP);

  const [token, setToken] = useRecoilState(jwtTokenAtom);
  const [userName, setUserName] = useRecoilState(accountNameAtom);
  const history = useHistory();

  const registerUser = async () => {
    const response = await signup({
      variables: {
        signupInput: {
          ...formInput
        }
      }
    });
    document.cookie = "token=" + response.data.login.token;
    document.cookie = "userName=" + response.data.login.user.userName;
    setToken(response.data.login.token);
    setUserName(response.data.signin.user.userName);
  };

  const goBack = () => history.goBack();

  if (loading) {
    return <>Loading screen</>;
  }

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={() => registerUser()}>
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
        <PrimaryButton text="Back" color={RED} variant="h5" height="48px" onClick={() => goBack()} />
        <>{error?.message}</>
      </form>
      {data && <>Created account</>}
    </Container>
  );
};

export default RegisterForm;
