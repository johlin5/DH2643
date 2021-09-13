import { ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../theme";
import Structure from "./Structure";
const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Structure/>
      </ThemeProvider>
  );
};

export default App;
