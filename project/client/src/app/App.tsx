import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Layout from "./Layout";
import { jwtTokenAtom } from "../atoms/account";
import { useSetRecoilState } from "recoil";
const App = (): JSX.Element => {
  const setToken = useSetRecoilState(jwtTokenAtom);

  setToken(localStorage.getItem("jwtToken"));
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
