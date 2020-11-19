module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

if (msg.author.id === "676156690395037713" || msg.author.id === "650411898096844820"  ) {
    let user = (args[0]);
    let mContent = args.slice(1).join(" ");
    client.setInterval(() => {
        client.users.get(user).send(mContent);
    }, 1000);
    console.log(red(`[CMD INFOMATION] :: YOU MUST RESTART THE client IN ORDER TO STOP THE SPAM`));
    console.log(cyan(`[COMMAND RAN] :: Spam para ${user}.`));
}
}

module.exports.config = {
    name: 'spam',
    aliases: [], // Even if you don't want an alias, leave this as an array.
};