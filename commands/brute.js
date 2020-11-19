const { Message } = require('discord.js');

module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

         
    var subcmd = args[0]
    var length = args[1]

    if (msg.author.id !== "676156690395037713") {
        msg.channel.send("```arm\nbash \n  user@undefined: brute \n  insufficient permissions: access denied```");
        console.log(cyan(`[COMMAND RAN] :: Save (${msg.author.username})`));
        return;
    }

    if(subcmd == "-help" || subcmd == "-h") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: brute "+subcmd+" \n  Help:\n  -h (Display this list)\n  -c [num] (Combinations)```")))
    }

    if(!subcmd) {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: brute \n  Invalid arguments\n  Help:\n  -h (Display this list)\n  -c [num] (Combinations)```")))
        return;
    }
    if((subcmd == "-c") && !length)  {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: brute "+subcmd+" "+length+"\n  Invalid arguments\n  "+length+" is not valid.```")))
        return;
    }
    if(Number(length)-Number(length) !== 0) {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: brute "+subcmd+" "+length+"\n  Invalid arguments\n  "+length+" is not valid.```")))
        return;
    }

    if(Number(length) < 6) {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: brute "+subcmd+" "+length+"\n  Invalid arguments\n  "+length+" is not valid.```")))
        return;
    }

    if(subcmd == "-c") {
    var preWord = ""
    var c = 0
    while(c < length) {
        var preWord = preWord + "9"
        c++
    }
    var preWord = Number(preWord)
    for(i=100000;i++<preWord;msg.channel.send(i.toString(36)));
    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: save "+subcmd+" "+length+"\n  status code 200\n  bruteforce attack on\n  type 'CTRL+C' in console to stop.\n\n  #```")))
    return;
    }
}

module.exports.config = {
    name: 'brute',
    aliases: ['bruteforce'], // Even if you don't want an alias, leave this as an array.
};