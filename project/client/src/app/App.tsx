import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Layout from "./Layout";
import Cookies from "js-cookie";
import { jwtTokenAtom, accountNameAtom } from "../atoms/account";
import { useSetRecoilState } from "recoil";
import "../styles.css";

const App = (): JSX.Element => {
  const setToken = useSetRecoilState(jwtTokenAtom);
  const setUserName = useSetRecoilState(accountNameAtom);
  const token = Cookies.get("token");
  const userName = Cookies.get("userName");
  setToken(token === undefined ? null : token);
  setUserName(userName === undefined ? null : userName);
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
