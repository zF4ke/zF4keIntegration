const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('dbzf4ke.json')
const db = low(adapter)

module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');
     
    var subcmd = args[0]
    var slot = args[1]

    if (msg.author.id !== "676156690395037713") {
        msg.channel.send("```arm\nbash \n  user@undefined: save \n  insufficient permissions: access denied```");
        console.log(cyan(`[COMMAND RAN] :: Save (${msg.author.username})`));
        return;
    }

    if(subcmd == "-help" || subcmd == "-h") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: save "+subcmd+" \n  Help:\n  -h (Display this list)\n  -id [num] (Slot)\n  -pc (Print messages in console)```")))
    }

    if(!subcmd) {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: save \n  Invalid arguments\n  Help:\n  -h (Display this list)\n  -id [num] (Slot)\n  -pc (Print messages in console)```")))
        return;
    }
    if((subcmd == "-id") && !slot)  {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: save "+subcmd+" "+slot+"\n  Invalid arguments\n  "+slot+" is not valid.```")))
        return;
    }

    if(subcmd == "-id") {
    db.set(slot, []).write() 
    msg.channel.fetchMessages({limit: 99}).then(msgs=>msgs.map(r => {
        var texting = r.content; 
        db.get(slot)
        .push({
            text: texting
        })
        .write();
    }))
    if(msg.content.includes("-pc")) {
        msg.channel.fetchMessages({limit: 99}).then(msgs=>msgs.map(r => {
            var texting = r.content; 
            console.log(texting);
        }))
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: save "+subcmd+" "+slot+" -pc\n  status code 200\n  saved in messages.json and printed in console\n  type 'purge' to delete.\n\n  #```")))
        return;
    }
    msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: save "+subcmd+" "+slot+"\n  status code 200\n  saved in messages.json\n  type 'purge' to delete.\n\n  #```")))
    return;
    }
}

module.exports.config = {
    name: 'save',
    aliases: ['salvar'], // Even if you don't want an alias, leave this as an array.
};