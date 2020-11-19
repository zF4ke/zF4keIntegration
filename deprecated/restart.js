const { Message } = require("discord.js");

module.exports.run = async (bot, msg, args) => {

if (msg.author.id === "676156690395037713") {//zF4ke main comandos´
    msg.channel.bulkDelete(1)
    msg.channel.send(`⚙️ **Reiniciando...** *(<@676156690395037713>)*`)
    setInterval(
        () =>
    process.exit(),
    1000
    );
}

if (msg.author.id === "650411898096844820") {//zF4ke²
    msg.channel.bulkDelete(1)
    msg.edit(`⚙️ **Reiniciando...** *(<@650411898096844820>)*`)
    setInterval(
        () =>
    process.exit(),
    1000
    );
}
}