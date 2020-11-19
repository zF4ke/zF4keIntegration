const { red, green, blue, yellow, cyan } = require('chalk');

function getPing(client) {
    let ping = `${client.ping.toFixed()}ms`
    return ping
}

module.exports = async (client) => {
    console.log(green(`[SELF BOT] :: ${client.user.tag} está online e pronto!`));
    console.log(green(`[SELF BOT] :: O prefixo é: ${process.env.PREFIX}`));
    console.log(yellow('============================================================================'));

    setInterval(() => {
      //bot.user.setActivity(getPing(bot), {type: "playing"}); 
      client.user.setPresence({
        game: {
            name: getPing(client),
            type: "WATCHING",
            url: "https://github.com/zf4ke"
        }
    });
    }, 7000)
}