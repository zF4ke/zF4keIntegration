module.exports = async user => {
    const DiscordUser = require('../../database/models/DiscordUser');

    try {
        const newUser = await DiscordUser.create({
            id: user.id,
            name: user.tag,
        });
        // eslint-disable-next-line no-unused-vars
        const savedUser = await newUser.save();
    } catch (err) {
        console.log(err);
    }
};