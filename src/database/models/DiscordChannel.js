const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name:  { type: String, required: true }
});

// eslint-disable-next-line no-unused-vars
const DiscordChannel = module.exports = new mongoose.model('Channel', ChannelSchema);