import "./styles";
import App from "./app/App";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
