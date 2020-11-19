module.exports.run = async(client, message, args) => {
    message.delete()

    var speed = Number(args[0]) * 1000
    var texto;

    if(!speed) {
        speed = Number((1.05 + (client.ping.toFixed()/1000)).toFixed(3))*1000
        message.channel.send(`[uparloritta] A velocidade não foi indicada. Usando velocidade = ping + 1.05s [${speed / 1000 }]`)
        texto = args.join(" ")
    } else {
        var shifted = args.shift()
        texto = args.join(" ")
    }

    if(!texto || texto.length === 0) texto = "[<a:loading:585829014384541716>] Upando de level.."

    function sendMessage() {
        message.channel.send(`${texto} [<a:loading:585829014384541716>]`)
        .then((msg) => {
            setTimeout(() => {
                msg.delete()
                sendMessage()
            }, speed)
        })
    }

    sendMessage()
    
}

module.exports.config = {
    name: 'uparloritta',
    aliases: ['uparclient','uparxp','uparmee6'], // Even if you don't want an alias, leave this as an array.
};