import { LOGIN } from "../../services/queries/Auth";
import { useMutation } from "@apollo/client";
import LoginFormView from "./LoginFormView";
import { FormInputs } from "./types";
import { accountNameAtom, jwtTokenAtom, isAuthAtom } from "../../atoms/account";
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
  const setIsAuth = useSetRecoilState(isAuthAtom);
  const history = useHistory();

  const message = location.state ? location.state.message : null;

  const pushSlash = () => {
    history.push("/");
  };

  const loginUser = async (formInput: FormInputs) => {
    signup({
      variables: {
        loginInput: {
          ...formInput
        }
      }
    })
      .then((response) => {
        Cookie.set("token", response.data.login.token, { path: "/" });
        Cookie.set("userName", response.data.login.user.userName, { path: "/" });
        setToken(response.data.login.token);
        setAccountName(response.data.login.user.userName);
        setIsAuth(true);
        pushSlash();
      })
      .catch(() => {
        return;
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <LoginFormView
      onSubmit={loginUser}
      errorMessage={error ? error.message : ""}
      message={message}
      onGoBack={pushSlash}
    />
  );
};

export default LoginForm;
