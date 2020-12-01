const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name:  { type: String, required: true },
    roles: { type: Array },
    permissionLevel: { type: Number, required: true, default: 0 }
});

// eslint-disable-next-line no-unused-vars
const DiscordUser = module.exports = new mongoose.model('User', UserSchema);