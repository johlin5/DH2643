import { LOGIN } from "../../services/queries/Auth";
import { useMutation } from "@apollo/client";
import LoginFormView from "./LoginFormView";
import { FormInputs } from "./types";
import { accountNameAtom, jwtTokenAtom } from "../../atoms/account";
import { useSetRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import Spinner from "../../components/Spinner";
const LoginForm: React.FC = () => {
  const [signup, { data, loading, error }] = useMutation(LOGIN);

  const setToken = useSetRecoilState(jwtTokenAtom);
  const setAccountName = useSetRecoilState(accountNameAtom);

  const history = useHistory();

  const loginUser = async (formInput: FormInputs) => {
    const response = await signup({
      variables: {
        loginInput: {
          ...formInput
        }
      }
    });
    document.cookie = 'token=' + response.data.login.token;
    document.cookie = 'userName=' + response.data.login.user.userName;
    setToken(response.data.login.token);
    setAccountName(response.data.login.user.userName);
    history.push("/");
  };

  if (loading) {
    return <Spinner />;
  }

  return <LoginFormView onSubmit={loginUser} errorMessage={error ? error.message : ""} />;
};

export default LoginForm;
