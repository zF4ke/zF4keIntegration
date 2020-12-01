module.exports = async (client, channel_name) => {
    const DiscordChannel = require('../../database/models/DiscordChannel');

    try {
        const response_channel = await DiscordChannel.findOne({
            name: channel_name
        });

        const channel = client.channels.get(response_channel.id);

        return channel;
    } catch (err) {
        console.log(err);
    }
};