const { GraphQLServer } = require('graphql-yoga');
const { schema } = require('./typedefs');
const { resolvers } = require('./resolvers');

const server = new GraphQLServer({ typeDefs: schema, resolvers: resolvers });

const options = {
    port: 4000,
};

server.start(options, ({port}) => console.log(`Running a GraphQL API server at http://localhost:${port}`));