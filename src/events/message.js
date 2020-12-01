module.exports = async (client, message) => {
    const checkPermission = require('../services/security/checkPermission');

    const allowedIDs = (process.env.LOG_SERVER_IDS);

    if (!message.channel || !message.channel.guild || !message.channel.guild.id) {
        //nothing
    } else {
        
    if (allowedIDs.indexOf(message.channel.guild.id) > -1) {
        if (message.attachments.array().length > 0) {
            for (const file in message.attachments.array()) {
                console.log(`[${message.channel.guild.name}] $ (${message.channel.name}) # ${message.author.username} : ${message.content}`);
                console.log(message.attachments.array()[file].proxyURL);
            }
        } else {
            console.log(`[${message.channel.guild.name}] $ (${message.channel.name}) # ${message.author.username} : ${message.content}`);
        }
    }
    }

    //O bot não responde caso
    if (message.author.bot) return; //ele for o autor da mensagem
    if (message.channel.type === "dm") return; //a mensagem for mandada na dm

    if (!message.content.startsWith(process.env.PREFIX)) return; //caso não comece com o seu prefixo
    if (
        message.content.startsWith(`<@!${client.user.id}>`) ||
        message.content.startsWith(`<@${client.user.id}>`)
    )
        return; //caso comece com a sua mention

    const prefix = process.env.PREFIX;
    //formata os comandos
    const [cmd, ...args] = message.content.trim().slice(prefix.length).split(/\s+/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.get(client.aliases.get(cmd.toLowerCase()));
    if (command) {
        const operation = await checkPermission(message.author, command.config.name);
        if(operation.status === 1) {
            command.run(client, message, args, operation.user);
        } else {
           /*  return message.channel.send({
                embed: {
                    title: "🔒 Bloqueado",
                    color: "16069684",
                    description: 'Você não tem permissão suficiente para usar este comando.',
                    timestamp: new Date()
                }
            }).then((msg) => setTimeout(() => msg.delete(), 10000)); */
        }
    }
};