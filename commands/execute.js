/* module.exports.run = async (client, message, args) => {

    const timestampInicial = Number(args[0]);
    const timestampAtual = Number(args[1]);
    const points = Number(args[2]);
    const time = Number(args[3]);

    const receivedPoints = ( points - ((( timestampAtual - timestampInicial  ) / 86400) * (points / time)) ).toFixed(0)

    message.reply(receivedPoints)
} */

/* module.exports.run = async(client, message, args) => {

    const resposta = (slugifyArr(args)).join(" ").replace(/ /g, '')

    message.reply(resposta);

    function slugifyArr (arr) {
        for(let word in arr) {
        var map = {
            '-' : '',
            // eslint-disable-next-line no-dupe-keys
            '-' : '_',
            'a' : 'á|à|ã|â|À|Á|Ã|Â',
            'e' : 'é|è|ê|É|È|Ê',
            'i' : 'í|ì|î|Í|Ì|Î',
            'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
            'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
            'c' : 'ç|Ç',
            'n' : 'ñ|Ñ',
        };
        
        for (var pattern in map) {
            var str = arr[word].replace(new RegExp(map[pattern], 'g'), pattern);

            arr[word] = str.toLowerCase();
        }
        }
        return arr;
    }
}; */

module.exports.run = async(client, message, args) => {
    var date = args.join(" ")
    date = date.split("-");
    return message.reply(new Date(date[2], date[1] - 1, date[0]).getTime())
}

module.exports.config = {
    name: 'execute',
    aliases: ['exec'], // Even if you don't want an alias, leave this as an array.
};