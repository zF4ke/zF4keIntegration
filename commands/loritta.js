const { Client } = require('discord.js');

module.exports.run = async(client, message, args) => {
    const command = args.join(" ")
    const bypassClient = new Client();

    bypassClient.login("NzY2MDA4MTMyNTEzNDMxNjgy.X52b6A.0AucG66xnX0YxQD0EdIaqmmFTqM")
    bypassClient.on('ready', () => {
        message.react("✅")
        message.channel.send("✅").then((m) => m.delete())
        
    })
    bypassClient.on('message', async(msg) => {
        if(message.author.id !== "676156690395037713" && msg.author.id !== "766008132513431682") return;
        msg.channel.send(`${command}`)
        bypassClient.destroy()
    })
}

module.exports.config = {
    name: 'loritta',
    aliases: ['puta','l','lr'], // Even if you don't want an alias, leave this as an array.
};