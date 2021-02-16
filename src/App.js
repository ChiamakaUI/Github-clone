import React from "react";
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider, useLazyQuery, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import UserPage from "./Components/UserPage";
import Loading from "./Components/Loading";

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'

});



const authLink = setContext((_, { headers }) => {
   const token = "69346046fa2aade9610df7b69c3b3490c04f0085";
  
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache:new InMemoryCache()
});



const USERS_QUERY = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      name
      login
      avatarUrl
      location
      websiteUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      twitterUsername
      packages(first: 10) {
        nodes {
          packageType
          name
        }
      }
      repositories(first: 30) {
        nodes {
          name
          url
          homepageUrl
          description
          stargazerCount
          forkCount
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;
function App() {
  
   const [getUser, { data, loading }] = useLazyQuery(USERS_QUERY, {
    fetchPolicy: "network-only",
  });
  
  return (
      <div>
        <UserPage onSearch={getUser} user={data && data.user} />
        {loading && <Loading/>}
    </div>    
  );
}

const AppProvider = () => {
  return (
        <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
};

export default AppProvider;