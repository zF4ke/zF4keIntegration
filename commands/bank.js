const scalc = require('scalc')
const Discord = require("discord.js");
const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client(); //Criação de um novo Client
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('dbwho.json')
const db = low(adapter)
const { Message } = require('discord.js');

module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

    if (msg.author.id !== "676156690395037713") return; //zF4ke main comandos

    var subcomando = args[0]
    var info = args[1]
    var info2 = args[2]
    console.log(subcomando)
    if(typeof(subcomando) === 'undefined') { subcomando = "money";}

    switch(subcomando) {
        case "help":
            msg.channel.send("🤔")
        break
        case "money":
            msg.channel.send("+atm <@650411898096844820> <@676156690395037713>")
            let deleteCount = 1
            msg.channel.fetchMessages({ limit: deleteCount }).then(msgs=>msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
        break
        case "withdraw":
            if(typeof(info) === 'undefined') { 
                msg.channel.send("Use: .zF/bank withdraw **amount**"); 
            return;
            }
            msg.channel.send(`+pay <@676156690395037713> ${info}`)
            let deleteCount2 = 1;
            msg.channel.fetchMessages({ limit: deleteCount2 }).then(msgs=>msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
        break
        case "pay":
            if(typeof(info) === 'undefined' || typeof(info2) === 'undefined') { 
                msg.channel.send("Use: .zF/bank pay **user** **amount**"); 
            return;
            }
            msg.channel.send(`+pay <@${info}> ${info2}`)
        break
    }
}

module.exports.config = {
    name: 'bank',
    aliases: ['banco'], // Even if you don't want an alias, leave this as an array.
};