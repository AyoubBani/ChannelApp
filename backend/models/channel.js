const channels = [
    {
        channel: 1,
        messages: ["Message 1", "Message 2"]
    },
    {
        channel: 2,
        messages: ["Message 2"]
    },
    {
        channel: 3,
        messages: ["Message 3"]
    },
    {
        channel: 4,
        messages: ["Message 4"]
    },
];



module.exports = class Channel {
    constructor(id, messages) {
        this.id = id;
        this.messages = messages;
    }

    static fetchAll() {
        return channels;
    }


}