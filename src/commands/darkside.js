// eslint-disable-next-line no-unused-vars
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const webhooks = await message.channel.fetchWebhooks();
    const webhook = webhooks.find(u => u.name == 'Darkside');
/*     console.log(webhooks.find(u => u.name == 'Darkside'))
 */
/*     const mentionHook = new Discord.WebhookClient('770758629490032650', 'dkNnlB7efDw6xbgzN9qlabj2-KIQbzpChVCqwu3x39-9CEaNgCxYCmNouLm5hrWzPt9z');
 */ webhook.send(args.join(" "));


    
}; 

module.exports.config = {
    name: 'darkside',
    aliases: ['darkside'], // Even if you don't want an alias, leave this as an array.
    permissionLevel: 7

};
