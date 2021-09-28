import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql"
});

const authLink = setContext((_:any, { headers }:any) => {
  const token = localStorage.getItem('jwt');  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

