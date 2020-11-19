module.exports.run = async(client, message, args) => {
    var speed = Number(args[0]) * 1000

    if(!speed) {
        speed = Number((1.05 + (client.ping.toFixed()/1000)).toFixed(3))*1000
        message.channel.send(`[loopedit] A velocidade não foi indicada. Usando velocidade = ping + 1.05s [${speed / 1000 }]`)
    }

    var count = 0;

    message.channel.send("hum")
    .then((msg) => {
        setInterval(() => {
            count++
            console.log(count)
            msg.edit(count)
        }, speed)
    })
}

module.exports.config = {
    name: 'loopedit',
    aliases: [], // Even if you don't want an alias, leave this as an array.
};