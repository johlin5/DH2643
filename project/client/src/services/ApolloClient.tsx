import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_: any, { headers }: any) => {
  const token = localStorage.getItem("jwtToken");

  return { headers: { ...headers, authorization: token ? `Bearer ${token}` : "" } };
});

const httpLink = createHttpLink({ uri: "http://localhost:8080/graphql" });

export const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() });
