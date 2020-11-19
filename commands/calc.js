const scalc = require('scalc')
const Discord = require("discord.js");

const { Message } = require('discord.js');

module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

    if (msg.author.id === "676156690395037713") {//zF4ke main comandos
    console.log(cyan(`[COMMAND RAN] :: Calc`));

    let expression = args.join(" ")
    let formatedExpression = expression.replace(/ /g, "")
    let result = scalc(expression)
    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true /*&& m.content.includes("root@zf4ke") == true*/).map(r => r.edit(r.content + "```arm\n  root@zf4ke: calc "+formatedExpression+" \n  "+result+"```")))
    return;
}

if(msg.author.id === "650411898096844820") {
	console.log(cyan(`[COMMAND RAN] :: Calc`));

    let expression = args.join(" ")
    let formatedExpression = expression.replace(/ /g, "")
    let result = scalc(expression)
    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true /*&& m.content.includes("root@zf4ke") == true*/).map(r => r.edit(r.content + "```arm\n  user@zf4ke²: calc "+formatedExpression+" \n  "+result+"```")))
    return;
}

if(msg.author.id !== "676156690395037713") {
	console.log(cyan(`[COMMAND RAN] :: Calc`));

    let expression = args.join(" ")
    let formatedExpression = expression.replace(/ /g, "")
    let result = scalc(expression)
    
    msg.channel.send("```arm\nbash \n  user@undefined: calc "+formatedExpression+" \n  insufficient permissions: access denied```");
    return;
}


}

module.exports.config = {
    name: 'calc',
    aliases: ['calculator','calculadora'], // Even if you don't want an alias, leave this as an array.
};
