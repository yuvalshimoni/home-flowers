import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://174.138.32.210/graphql',
});

export default client;
