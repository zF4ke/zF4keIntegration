/* eslint-disable no-unused-vars */
module.exports = async (client) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

    const getChannel = require('../services/channels/getChannel');
    const STATUS_CHANNEL = await getChannel(client, 'Status');

    //Ready Log
    console.log(green(`[Ready] :: ${client.user.tag} está online e pronto!`));
    //Status message
    STATUS_CHANNEL.fetchMessages({ limit: 10 })
    .then(responses => responses.filter(response => response.author.id === process.env.CLIENT_ID)
    .map(messages => messages.delete()));

    STATUS_CHANNEL.send('```css\n' + `${client.user.username}Integration is online` + '```');
};