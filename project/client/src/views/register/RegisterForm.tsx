import { Container, TextField, Typography, Button } from "@material-ui/core";
import { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { SIGN_UP } from "../../services/queries/Auth";
import { useMutation } from "@apollo/client";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE, RED } from "../../app/theme";
type FormInputs = {
  userName: string;
  password: string;
  passwordConfirmation: string;
};
import { useHistory, withRouter } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInputs>({ userName: "", password: "", passwordConfirmation: "" });
  const [signup, { loading, error }] = useMutation(SIGN_UP);
  const history = useHistory();

  const registerUser = async (event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signup({
      variables: {
        signupInput: {
          ...formInput
        }
      }
    })
      .catch((err) => err)
      .finally(() => pushLogin("Sucessfully created account!"));
  };

  const pushLogin = (message: string) => history.push({ pathname: "/login", state: { message } });
  const goBack = () => history.goBack();

  if (loading) {
    return <>Loading screen</>;
  }

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={(e) => registerUser(e)}>
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
          id="passwordConfirmation"
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
        >
          <Typography variant="h5">Create account</Typography>
        </Button>
        <PrimaryButton text="Back" color={RED} variant="h5" height="48px" type="button" onClick={() => goBack()} />
        <>{error?.message}</>
      </form>
    </Container>
  );
};

export default withRouter(RegisterForm);
