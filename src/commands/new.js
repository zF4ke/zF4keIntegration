module.exports.run = async (client, message, args, user) => {

        message.channel.send("```arm\nbash \n  user@"+user.name+": logged in```");
        return;

};

//criar elevate permissions

module.exports.config = {
    name: 'new',
    aliases: ['terminal', 'cmd', 'console'], // Even if you don't want an alias, leave this as an array.
    permissionLevel: 7
};