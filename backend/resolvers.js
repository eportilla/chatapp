const chats = [];
const MESSAGE_SENT = 'SENT';

exports.resolvers = {
    Query: {
        chats() {
            return chats;
        },
    },

    Mutation: {
        sendMessage(_, { message }, { pubSub }) {
            const chat = {id: chats.length, text: message.text, from: message.from, timestamp: new Date().toISOString()};
            chats.push(chat);

            pubSub.publish(MESSAGE_SENT, {
                receivedMessage: chat
            });

            return chat;
        },
    },

    Subscription: {
        receivedMessage: {
            subscribe(_, args, { pubSub }) {
                return pubSub.asyncIterator(MESSAGE_SENT);
            },
        }
    },
};