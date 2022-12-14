import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { THE_GRAPH_API } from "utils/constants";
import fetch from "cross-fetch";

const APIURL = THE_GRAPH_API;

export const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: APIURL, fetch }),
});
