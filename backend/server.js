const { GraphQLServer, PubSub } = require('graphql-yoga');
const { typeDefs } = require('./typedefs');
const { resolvers } = require('./resolvers');

const pubSub = new PubSub();

const server = new GraphQLServer({ 
    typeDefs, 
    resolvers,
    context: {
        pubSub,
    }
});

const options = {
    port: 4000,
};

server.start(options, ({port}) => console.log(`Running a GraphQL API server at http://localhost:${port}`));