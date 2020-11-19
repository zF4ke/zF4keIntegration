module.exports.run = async (bot, msg, args) => {
    const { red, green, blue, yellow, cyan } = require('chalk');
    const worker = require('worker');

    var input = args.join(" ")
    analyzeTextClick(input)


    function analyzeTextClick() {

        var text = args.join(" ")
        if (text.length === 0) {
            msg.channel.send("erro")
            return;
        }

        var msg = { "inputText": text, "lang": "en" };
        worker = new Worker('cipher-identifier.js');

        worker.onmessage = function (e) {
            updateResults(e.data);
        };
        worker.postMessage(msg);
    }

    function updateResults(results) {
        var cipherText = text.replace(/[\s]+/g, ' ');

        if (cipherText.length > 100)
            cipherText = cipherText.slice(0, 100) + '...';
        var elementCipherTextHTML = cipherText;

        var format = results["cipherFormats"][results["cipherFormat"]];
        var votes = '';
        var isTextFormat = false;

        if (format == 'Text') {
            isTextFormat = true;
            var ciphers = [];
            for (var i = 0; i < results["cipherTypes"].length; i++) {
                ciphers.push({ id: results["cipherTypes"][i], count: results["votes"][i] });
            }

            ciphers.sort(function (a, b) { return b.count - a.count; });
            var votes = '<h4>Votes</h4>\r\n<ul>';
            for (var i = 0; i < ciphers.length; i++) {
                if (ciphers[i].count == 0)
                    break;
                votes += '<li><a href="' + getLink(ciphers[i].id) + '">' + ciphers[i].id + '</a> (' + ciphers[i].count + ' votes)</li>\r\n';
            }
            votes += '</ul>\r\n'
            format = ciphers[0].id;
        }

        var wtf = format + ' (click to read more)';
        var link = getLink(format);
        var votacao = votes;

        console.log(wtf)
        console.log(link)
        console.log(votacao)

        msg.channel.send(wtf)
        msg.channel.send(link)
        msg.channel.send(votacao)
    }

    


}