class User {
    constructor(id, name) {
        this.id = id || null;
        this.name = name || null;
    }

    get name() {
        return this.name;
    }
};
exports.User;

class Message {
    constructor(from, text) {
        this.from = from || null;
        this.text = text || null;
    }
};
exports.Message;