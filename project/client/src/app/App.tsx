import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Layout from "./Layout";
const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
