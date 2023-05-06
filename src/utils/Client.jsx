import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: "https://unicorn-staging.eu.saleor.cloud/graphql/",
  cache: new InMemoryCache(),
});

export default Client;
