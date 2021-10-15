import App from "./app/App";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import ApolloProvider from "./services/ApolloProvider";

render(
  <ApolloProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
  </ApolloProvider>,
  document.getElementById("root")
);
