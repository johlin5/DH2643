import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Layout from "./Layout";
import { jwtTokenAtom, accountNameAtom } from "../atoms/account";
import { useSetRecoilState } from "recoil";
const App = (): JSX.Element => {
  const setToken = useSetRecoilState(jwtTokenAtom);
  const setUserName = useSetRecoilState(accountNameAtom);

  setToken(localStorage.getItem("jwtToken"));
  setUserName(localStorage.getItem("userName"));
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
