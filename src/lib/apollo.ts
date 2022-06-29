import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

// O apollo realiza as requsiçoes da ApolloLink, como se fosse o axios 
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`
  },
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
