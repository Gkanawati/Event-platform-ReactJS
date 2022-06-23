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
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ozof7i1p7u01w72lgj01bp/master',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
