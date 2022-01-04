const { buildSchema } = require('graphql');

exports.schema = buildSchema(/* GraphQL */`
    type Message {
        id: ID!
        msg: String!
        timestamp: String!
    }

    type User {
        id: ID!
        name: String!
    }

    type Query {
        user(name: String!): User
    }
`);