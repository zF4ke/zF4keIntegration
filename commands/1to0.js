module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

    if (msg.author.id === "676156690395037713") {//zF4ke main comandos

        msg.channel.send("!to aaaa")
        msg.channel.fetchMessages({ limit: 1 }).then(msgs=>msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
        msg.channel.send("!to aaab")
        msg.channel.fetchMessages({ limit: 1 }).then(msgs=>msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
    }
}

module.exports.config = {
    name: '1to0',
    aliases: ['hack1to0'], // Even if you don't want an alias, leave this as an array.
};