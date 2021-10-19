import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_: any, { headers }: any) => {
  //const token = localStorage.getItem("jwtToken");
  const token = Cookies.get("token");

  return { headers: { ...headers, authorization: token ? `Bearer ${token}` : "" } };
});

const httpLink = createUploadLink({ uri: "http://localhost:8080/graphql" });

export const client = new ApolloClient({ link: from([errorLink, authLink, httpLink]), cache: new InMemoryCache() });
