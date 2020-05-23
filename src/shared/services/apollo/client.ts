import ApolloClient, { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-boost';
import introspectionResult from 'graphql/introspection-result.generated';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  uri: 'http://178.128.248.28/graphql',
  cache,
});

export default client;
