const {
    RichEmbed
} = require("discord.js");
const {
    stripIndents
} = require("common-tags");
const {
    getMember,
    formatDate
} = require("../functions.js");
const { red, green, blue, yellow, cyan } = require('chalk');

module.exports.run = async (bot, msg, args) => {

    let member = bot.users.get(args[0])
    //console.log(member)
        // Member variables
        const joined = formatDate(member.joinedAt);
        var nada = "NADA MESMO"
        /*const roles = member._roles
            .filter(r => r.id !== msg.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);*/

        const embed = new RichEmbed()
            //.setFooter(member.displayName, member.avatar)
            //.setThumbnail(member.avatar)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Member information:', stripIndents `**- Display name:** ${member.username}
**- Joined at:** ${joined}
**- Roles:** ${nada}`, true)

            .addField('User information:', stripIndents `**- ID:** ${member.id}
**- Username**: ${member.username}
**- Discriminator**: ${member.discriminator}
**- Created at**: ${nada}`, true)

            .setTimestamp()

        //if (member.user.presence.game)
        //    embed.addField('Currently playing', stripIndents `** Name:** ${member.presence.game.name}`);

        msg.channel.send(embed);
        console.log(cyan(`[COMMAND RAN] :: Whois`));
        console.log(membro)
}