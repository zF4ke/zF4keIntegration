module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');
     
    var subcmd = args[0]
    var slot = Number(args[1])

    if (msg.author.id !== "676156690395037713") {
        msg.channel.send("```arm\nbash \n  user@undefined: admin \n  insufficient permissions: access denied```");
        console.log(cyan(`[COMMAND RAN] :: Admin (${msg.author.username})`));
        return;
    }

    if(subcmd == "-help" || subcmd == "-h") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: admin "+subcmd+" \n  Help:\n  -h (Display this list)\n  -clear [num]```")))
    }

    if(!subcmd) {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: admin \n  Invalid arguments\n  Help:\n  -h (Display this list)\n  -clear [num]```")))
        return;
    }
    if((subcmd == "-clear") && !slot)  {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: admin "+subcmd+" "+slot+"\n  Invalid arguments\n  "+slot+" is not valid.```")))
        return;
    }

    if(Number.isInteger(slot) == false || slot < 1 || slot > 99)  {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: admin "+subcmd+" "+slot+"\n  Invalid arguments\n  "+slot+" is not valid.```")))
        return;
    }

    if(subcmd == "-clear") {
        msg.channel.fetchMessages({ limit: slot }).then(msgs=>msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
        /* msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: admin "+subcmd+" "+slot+"\n  Done\n  "+slot+" messages cleared.```"))) */
    return;
    }
}


module.exports.config = {
    name: 'admin',
    aliases: ['adm'], // Even if you don't want an alias, leave this as an array.
};