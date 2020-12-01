/* eslint-disable no-unused-vars */
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const server = args[0];
    const shifted = args.shift();
    const messageSent = args.join(" ");

    console.log(server);

    message.delete();

    if(server == "qg") {
        var webhook = new Discord.WebhookClient('770768378691452989', 'GoJtSBCgdkhyVeENZmv-vBdHpLvDQawKha_7jvd1o-ManWU8gsAHlFljlCv1gsUH1bXL');
        webhook.send(messageSent);

    } else if (server == "ns") {
        const webhook = new Discord.WebhookClient('770771823839150090', '6q_5ygli47kBBKQ2L5FQuso2TvmkIoQgXPHjtAThXJT-XWvI-XOne4qIByQPvCnxm9sc');
        webhook.send(messageSent);

    } else {
        return;
    }



}; 

module.exports.config = {
    name: 'remote',
    aliases: [], // Even if you don't want an alias, leave this as an array.
    permissionLevel: 7
};