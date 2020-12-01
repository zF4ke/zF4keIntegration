const mongoose = require('mongoose');

const CommandSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    aliases: { type: Array, required: true },
    permissionLevel: { type: Number, required: true, default: 0 }
});

// eslint-disable-next-line no-unused-vars
const SummitCommand = module.exports = new mongoose.model('Command', CommandSchema);