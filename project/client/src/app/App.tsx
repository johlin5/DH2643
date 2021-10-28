import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { useEffect } from "react";
import Layout from "./Layout";
import Cookies from "js-cookie";
import { jwtTokenAtom, accountNameAtom, isAuthAtom } from "../atoms/account";
import { useSetRecoilState } from "recoil";
import "../styles.css";

const App = (): JSX.Element => {
  const setToken = useSetRecoilState(jwtTokenAtom);
  const setUserName = useSetRecoilState(accountNameAtom);
  const setIsAuth = useSetRecoilState(isAuthAtom);
  const token = Cookies.get("token");
  const userName = Cookies.get("userName");

  useEffect(() => {
    setToken(token ? token : null);
    setUserName(userName ? userName : null);
    setIsAuth(token ? true : false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
