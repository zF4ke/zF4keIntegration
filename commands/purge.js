module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

    if (msg.author.id === "676156690395037713") { //zF4ke

        var deleteCount = Number(args[0]) + 1
        console.log("count:" + deleteCount)
        msg.channel.fetchMessages({ limit: deleteCount }).then(msgs=>msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
	    msg.channel.send("```arm\nbash \n  root@zf4ke: purge "+(Number(deleteCount)-1)+"\n  ("+(Number(deleteCount)-1)+") mensagens eliminadas.```");

        console.log(cyan(`[COMMAND RAN] :: Purge [${Number(deleteCount)-1}] (zF4ke)`));
        return;
    }

    if (msg.author.id === "650411898096844820") { //zF4ke²

        var deleteCount = Number(args[0]) + 1
        console.log("count:" + deleteCount)

        msg.channel.fetchMessages({ limit: deleteCount }).then(msgs=>msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
	    msg.channel.send("```arm\nbash \n  user@zf4ke²: purge "+(Number(deleteCount)-1)+"\n  ("+(Number(deleteCount)-1)+") mensagens eliminadas.```");

        console.log(cyan(`[COMMAND RAN] :: Purge [${Number(deleteCount)-1}] (zF4ke²)`));
    	return;
    }

    	if (msg.author.id !== "676156690395037713") {//?

	msg.channel.send("```arm\nbash \n  user@undefined: purge "+(Number(deleteCount)-1)+"\n  insufficient permissions: access denied```");
    	console.log(cyan(`[COMMAND RAN] :: Purge (${msg.author.username})`));
        return;
    }

}

module.exports.config = {
    name: 'purge',
    aliases: ['clear','limpar','apagar'], // Even if you don't want an alias, leave this as an array.
};