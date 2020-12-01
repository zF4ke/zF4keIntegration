module.exports.run = async (client, message) => {

    message.channel.fetchMessages({ limit: 50 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true).map(r => r.delete()));
    return;
};

module.exports.config = {
    name: 'exit',
    aliases: ['sair'], // Even if you don't want an alias, leave this as an array.
};