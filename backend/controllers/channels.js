const Channel = require('../models/channel');


exports.getChannels = (req, res, next) => {
    const channels = Channel.fetchAll();
    //Check if no channel

    res.status(200).json({
        message: 'Fetched channels successfully.',
        data: channels.map(item => item.channel)
    });
}


exports.getMessages = (req, res, next) => {
    const channels = Channel.fetchAll();
    /*
    before
    channels.map((channel) => {
        if (channel.channel === parseInt(req.params.channel)) {
            res.status(200).json({
                message: 'Fetched messages successfully.',
                channelMessages: channel.messages
            });
        }
    })
    */
    const foundChannel = channels.find(ch => ch.channel === parseInt(req.params.channel))
    res.status(200).json({
        message: (foundChannel !== undefined) ? 'Fetched messages successfully.' : 'Channel ' + req.params.channel + ' is not found',
        channelMessages: (foundChannel !== undefined) ? foundChannel.messages : []
    });
}

exports.addMessage = (req, res, next) => {
    // GET channel by id    

    /* before
    const channels = Channel.fetchAll();
    channels.map((channel) => {

        if (channel.channel === parseInt(req.params.channel)) {
            channel.messages.push(req.body.message)
            res.status(201).json({
                message: 'Message added successfully to channel!',
                channelMessage: req.body.message
            });
        }
    })
    */
    const channels = Channel.fetchAll();
    const foundIndex = channels.findIndex(ch => ch.channel === parseInt(req.params.channel));
    if (foundIndex === -1) {
        res.status(201).json({
            message: 'Channel ' + req.params.channel + ' is not found',
        });
    } else {
        channels[foundIndex].messages.push(req.body.message)
        res.status(201).json({
            message: 'Message added successfully to channel!',
            channelMessage: req.body.message
        });
    };
}