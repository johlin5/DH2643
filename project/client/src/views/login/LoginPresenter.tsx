import { LOGIN } from "../../services/queries/Auth";
import { useMutation } from "@apollo/client";
import LoginFormView from "./LoginFormView";
import { FormInputs } from "./types";
import { accountNameAtom, jwtTokenAtom } from "../../atoms/account";
import { useSetRecoilState } from "recoil";
import { useHistory, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Cookie from "js-cookie";

type LocationState = {
  message: string | undefined;
};

const LoginForm: React.FC = () => {
  const [signup, { loading, error }] = useMutation(LOGIN);
  const location = useLocation<LocationState>();
  const setToken = useSetRecoilState(jwtTokenAtom);
  const setAccountName = useSetRecoilState(accountNameAtom);
  const history = useHistory();

  const { message } = location.state ? location.state : { message: "" };

  const loginUser = async (formInput: FormInputs) => {
    const response = await signup({
      variables: {
        loginInput: {
          ...formInput
        }
      }
    });
    Cookie.set("token", response.data.login.token, { path: "/" });
    setToken(response.data.login.token);
    setAccountName(response.data.login.user.userName);
    history.push("/");
  };

  if (loading) {
    return <Spinner />;
  }

  return <LoginFormView onSubmit={loginUser} errorMessage={error ? error.message : ""} message={message} />;
};

export default LoginForm;
