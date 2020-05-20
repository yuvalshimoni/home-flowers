module.exports = {
  client: {
    addTypename: true,
    excludes: ['./src/graphql/schema.graphql'],
    includes: ['./src/**/*.graphql'],
    service: {
      name: 'rockup_new',
      localSchemaFile: './src/graphql/schema.graphql',
    },
    tagName: 'gql',
    clientSchemaDirectives: ['client'],
  },
};
