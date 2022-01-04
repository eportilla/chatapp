const { Message } = require('./model');
const chats = [];

exports.resolvers = {
    Query: {
        chats() {
            return chats;
        },
    },

    Mutation: {
        sendMessage(_, { message }) {
            const chat = {id: chats.length + 1, text: message.text, from: message.from, timestamp: new Date().toISOString()};
            chats.push(chat);
            return chat;
        },
    },
};