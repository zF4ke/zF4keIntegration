module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

if (msg.author.id === "676156690395037713") {//zF4ke main comandos

    let user = (args[0]);
    let mContent = args.slice(1).join(" ");
    let membro = msg.mentions.users.first()
    membro.send(mContent);

    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true /*&& m.content.includes("root@zf4ke") == true*/).map(r => r.edit(r.content + "```arm\n  root@zf4ke: send "+mContent+" \n  Mensagem enviada com sucesso```")))
    console.log(cyan(`[COMMAND RAN] :: Send (zF4ke)`));
    return;
}

if (msg.author.id === "650411898096844820") {//zF4ke²

    let user = (args[0]);
    let mContent = args.slice(1).join(" ");
    let membro = msg.mentions.users.first()
    membro.send(mContent);

    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true /*&& m.content.includes("user@zf4ke²") == true*/).map(r => r.edit(r.content + "```arm\n  user@zf4ke²: send "+mContent+" \n  Mensagem enviada com sucesso```")))
    console.log(cyan(`[COMMAND RAN] :: Send (zF4ke²)`));
    return;
}

if (msg.author.id !== "676156690395037713") {//?

    msg.channel.send("```arm\nbash \n  user@undefined: send "+mContent+" \n  insufficient permissions: access denied```");
    console.log(cyan(`[COMMAND RAN] :: Send (${msg.author.username})`));
    return;
}

}

module.exports.config = {
    name: 'send',
    aliases: ['enviar'], // Even if you don't want an alias, leave this as an array.
  };