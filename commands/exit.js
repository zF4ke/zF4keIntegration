module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

if (msg.author.id === "676156690395037713") {//zF4ke main comandos

    msg.channel.fetchMessages({ limit: 50 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true).map(r => r.delete()))
    console.log(cyan(`[COMMAND RAN] :: exit (zF4ke)`));

    return;
}

if (msg.author.id === "650411898096844820") {//zF4ke²

    msg.channel.fetchMessages({ limit: 50 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true).map(r => r.delete()))

    console.log(cyan(`[COMMAND RAN] :: exit (zF4ke²)`));
    return;
}

if (msg.author.id !== "676156690395037713") {//?

    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true /*&& m.content.includes("root@zf4ke") == true*/).map(r => r.edit(r.content + "```arm\n  user@undefined: exit \n  insufficient permissions: access denied```")))
    console.log(cyan(`[COMMAND RAN] :: exit (${msg.author.username})`));
    return;
}
}

module.exports.config = {
    name: 'exit',
    aliases: ['sair'], // Even if you don't want an alias, leave this as an array.
};