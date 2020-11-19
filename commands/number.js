const { Message } = require('discord.js');

module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');
    if (msg.author.id === "676156690395037713") {//zF4ke²
        var inicio = Number(args[0])
        var fim = Number(args[1])
        while(inicio < fim) {
            msg.channel.send(inicio)
            inicio++
        }
    }
}

module.exports.config = {
    name: 'number',
    aliases: ['numbers'], // Even if you don't want an alias, leave this as an array.
};