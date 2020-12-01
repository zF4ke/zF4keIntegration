/* eslint-disable no-unused-vars */
module.exports.run = async (client, message, args, user) => {
    
    message.channel.fetchMessages({ limit: 15 })
    .then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true)
    .map(r => r.edit(r.content + "```arm\n  root@"+user.name+": ping \n  O meu ping é de: "+client.ping.toFixed()+"ms```")));
    return;
};

module.exports.config = {
    name: 'ping',
    aliases: ['pong', 'pingpong'], // Even if you don't want an alias, leave this as an array.
    permissionLevel: 7
};