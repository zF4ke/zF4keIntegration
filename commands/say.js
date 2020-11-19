const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {

if (msg.author.id === "676156690395037713" || msg.author.id === "111591984245780480" || msg.author.id === "650411898096844820") {

  const sayMessage = args.join(" ")

  if(sayMessage == "") return;

  msg.channel.bulkDelete(1)
  msg.channel.send(sayMessage)
}
}

module.exports.config = {
  name: 'say',
  aliases: ['falar'], // Even if you don't want an alias, leave this as an array.
};