
exports.typeDefs = /* GraphQL */`
    type User {
        id: ID!
        name: String!
    }

    type Chat {
        id: ID!
        text: String!
        from: String!
        timestamp: String!
    }

    input Message {
        text: String!
        from: String!
    }

    type Query {
        chats: [Chat!]
    }

    type Mutation {
        sendMessage(message: Message!): Chat!
    }

    type Subscription {
        receivedMessage: Chat!
    }
`;