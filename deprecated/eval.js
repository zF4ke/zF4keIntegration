module.exports.run = async (bot, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

if (msg.author.id === "676156690395037713" || msg.author.id === "650411898096844820"  ) {
    let res;
    try {
        res = eval(args.join(" "))
    } catch (e) {
        return msg.edit("", {
            embed: new RichEmbed().setTitle("Results").setColor("#FF0000").setDescription(":desktop: **Input**: ```" + args.join("") + "```:eyes: **Error**: ```" + err + "```").setFooter("Eval")
        })
    }
    msg.channel.send("", {
        embed: new RichEmbed().setTitle("Results").setColor("#46FF00").setDescription(":desktop: **Input**: ```" + args.join("") + "```:white_check_mark: **Output**: ```" + res + "```").setFooter("Eval")
    })
}
}