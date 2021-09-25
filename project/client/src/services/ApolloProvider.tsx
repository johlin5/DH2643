import { ApolloProvider as Provider } from "@apollo/client";
import { client } from "./ApolloClient";

const ApolloProvider: React.FC = (props) => {
  return <Provider client={client}>{props.children}</Provider>;
};

export default ApolloProvider;
