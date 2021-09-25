import App from "./app/App";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import ApolloProvider from "./services/ApolloProvider";

render(
  <RecoilRoot>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </RecoilRoot>,
  document.getElementById("root")
);
