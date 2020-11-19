module.exports.run = async (client, msg, args) => {

    const { red, green, blue, yellow, cyan } = require('chalk');
    const { Client, RichEmbed } = require('discord.js');
    const settings = require('../settings.json');


if (msg.author.id === "650411898096844820") { //zF4ke² 
    let eContent = args.slice(0).join(" ");
    msg.channel.send("", {
        embed: new RichEmbed().setColor(`${settings.color}`).setTitle(`Atenção`).setDescription(eContent).setFooter('zF4ke#8556')
    });
    console.log(cyan(`[COMMAND RAN] :: Embed (zF4ke)`));
}

if (msg.author.id === "676156690395037713") { //zF4ke main comandos
    let eContent = args.slice(0).join(" ");
    msg.edit("", {
        embed: new RichEmbed().setColor(`${settings.color}`).setTitle(`Atenção`).setDescription(eContent).setFooter('zF4ke#8556')
    });
    console.log(cyan(`[COMMAND RAN] :: Embed (zF4ke²)`));
}
}

module.exports.config = {
    name: 'embed',
    aliases: [], // Even if you don't want an alias, leave this as an array.
};