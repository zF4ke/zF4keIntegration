const { Message } = require('discord.js');

module.exports.run = async (client, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');

if (msg.author.id === "111591984245780480" || msg.author.id === "676156690395037713" || msg.author.id === "650411898096844820") {//one
    console.log(cyan(`[COMMAND RAN] :: O.o`));

    let time = args[0]
    
    msg.channel.send("O.o")
        .then((mensagem)=> {
            for(let c = 1; c <= time; c++) {
                mensagem.edit("o.O")
                mensagem.edit("O.o")
            }
          }); 
    }
    msg.channel.fetchMessages({ limit: 1 }).then(msgs=>msgs.filter(m => m.author.id === client.user.id).map(r => r.delete()))
}

module.exports.config = {
    name: 'Oo',
    aliases: [], // Even if you don't want an alias, leave this as an array.
};