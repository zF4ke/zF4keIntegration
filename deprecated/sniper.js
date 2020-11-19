const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('dbstatus.json')
const db = low(adapter)

module.exports.run = async (bot, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');
     
    var subcmd = args[0]
    
    if (msg.author.id !== "676156690395037713") {
        msg.channel.send("```arm\nbash \n  user@undefined: save \n  insufficient permissions: access denied```");
        console.log(cyan(`[COMMAND RAN] :: Save (${msg.author.username})`));
        return;
    }

    if(!subcmd) subcmd = "-h"

    if(subcmd == "-help" || subcmd == "-h") {
        msg.channel.fetchMessages({ limit: 15 }).then(msgs=>msgs.filter(m => m.content.includes("bash") == true && m.content.includes("@") == true).map(r => r.edit(r.content + "```arm\n  root@zf4ke: sniper "+subcmd+" \n  Help:\n  -h (Display this list)\n  toggle (On/Off)```")))
    }

    if(subcmd == "create") {
        db.set("sniper-status", []).write() 
        db.get("sniper-status")
        .push({
            id: "status",
            status: "on",
        }).write()
        msg.reply("create")
    }

    if(subcmd == "toggle") {
        var sniperStatus = db.get("sniper-status").find({"id": "status"}).value().status
        if(sniperStatus == "on") {
            db.set("sniper-status", []).write() 
            db.get("sniper-status")
                .push({
                    id: "status",
                    status: "off",
                }).write()
        } else {
            db.set("sniper-status", []).write() 
            db.get("sniper-status")
                .push({
                    id: "status",
                    status: "on",
                }).write()
        }
        var sniperStatusNew = db.get("sniper-status").find({"id": "status"}).value().status
        msg.reply(sniperStatusNew)
    }
}