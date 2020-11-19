const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('dbzf4ke.json')
const db = low(adapter)

module.exports.run = async (bot, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');
     
    var subcmd = args[0]

    if (msg.author.id !== "676156690395037713") {
        msg.channel.send("```arm\nbash \n  user@undefined: transactions \n  insufficient permissions: access denied```");
        console.log(cyan(`[COMMAND RAN] :: Transactions (${msg.author.username})`));
        return;
    }

    if(subcmd == "-help" || subcmd == "-h") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: transactions "+subcmd+" \n  Help:\n  -h (Display this list)\n  -clear (Cleans Loritta transactions history)```")))
    }

    if(!subcmd) {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: transactions \n  Invalid arguments\n  Help:\n  -h (Display this list)\n  -clear (Cleans Loritta transactions history)```")))
        return;
    }
    if((subcmd == "-clear"))  {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: transactions "+subcmd+" \n  Starting clean process```")))
        setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)
setTimeout(() => {msg.channel.send("+pay 475342409803366421 1")}, 3000)


        return;
    }
}