module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

if (msg.author.id === "676156690395037713") {//zF4ke main comandos

    msg.channel.send("```arm\nbash \n  root@zf4ke: logged in```")
    console.log(cyan(`[COMMAND RAN] :: login (zF4ke)`));
    return;
}

if (msg.author.id === "650411898096844820") {//zF4ke²

    msg.channel.send("```arm\nbash \n  user@zf4ke²: logged in```")
    console.log(cyan(`[COMMAND RAN] :: login (zF4ke²)`));
    return;
}

if (msg.author.id !== "676156690395037713") {//?
    return;
}

}

//criar elevate permissions

module.exports.config = {
    name: 'new',
    aliases: ['terminal','cmd','console'], // Even if you don't want an alias, leave this as an array.
};