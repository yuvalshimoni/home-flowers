import ApolloClient, { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-boost';
import introspectionResult from 'graphql/introspection-result.generated';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  uri: process.env.REACT_APP_STRAPI_URL + '/graphql',
  cache,
});

export default client;
