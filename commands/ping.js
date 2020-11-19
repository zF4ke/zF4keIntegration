module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

if (msg.author.id === "676156690395037713") {//zF4ke main comandos

    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true /*&& m.content.includes("root@zf4ke") == true*/).map(r => r.edit(r.content + "```arm\n  root@zf4ke: ping \n  O meu ping é de: "+client.ping.toFixed()+"ms```")))
    //msg.edit("```arm\nbash \n  root@zf4ke: ping \n  O meu ping é de: "+client.ping.toFixed()+"ms```");
    console.log(cyan(`[COMMAND RAN] :: Ping (zF4ke)`));
    return;
}

if (msg.author.id === "650411898096844820") {//zF4ke²
    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true /*&& m.content.includes("user@zf4ke²") == true*/).map(r => r.edit(r.content + "```arm\n  user@zf4ke²: ping \n  O meu ping é de: "+client.ping.toFixed()+"ms```")))
    //msg.channel.send("```arm\nbash \n  user@zf4ke²: ping \n  O meu ping é de: "+client.ping.toFixed()+"ms```");
    console.log(cyan(`[COMMAND RAN] :: Ping (zF4ke²)`));
    return;
}

if (msg.author.id === "555047107917250570") {//Eu
    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true /*&& m.content.includes("user@zf4ke²") == true*/).map(r => r.edit(r.content + "```arm\n  user@eu: ping \n  O meu ping é de: "+client.ping.toFixed()+"ms```")))
    //msg.channel.send("```arm\nbash \n  user@eu: ping \n  O meu ping é de: "+client.ping.toFixed()+"ms```");
    console.log(cyan(`[COMMAND RAN] :: Ping (eu)`));
    return;
}

if (msg.author.id !== "676156690395037713") {//?

    msg.channel.send("```arm\nbash \n  user@undefined: ping \n  insufficient permissions: access denied```");
    console.log(cyan(`[COMMAND RAN] :: Ping (${msg.author.username})`));
    return;
}

}

//criar elevate permissions

module.exports.config = {
    name: 'ping',
    aliases: ['pong','pingpong'], // Even if you don't want an alias, leave this as an array.
};